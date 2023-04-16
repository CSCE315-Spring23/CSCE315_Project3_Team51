const {pool} = require("./Conn.js");
const Item = require("./Item");


async function lastOrderNumber() {
    try {
        console.log('Getting last order number');
        const res = await pool.query(
            "SELECT MAX(order_number) FROM orders"
        );
        console.log(res.rows[0]);
        return res.rows[0];
    } catch (error) {
        console.error(error)
    }
}

async function updateInventory(orderNum) {
    try {
        console.log('UPDATING INVENTORY BEGIN');
        console.log('Getting items of order ' + orderNum);
        const orderRes = await pool.query(
            "SELECT items_ordered, modifications FROM orders WHERE order_number= $1",
            [orderNum]
        );
        console.log(orderRes.rows[0]);
        console.log("\nGetting quantity of each ingredient");
        let totalIngredients = new Map();
        for(let i = 0; i < orderRes.rows[0].items_ordered.length; i++) {
            console.log("Item " + orderRes.rows[0].items_ordered[i] + ":");
            let ingr = await Item.getIngredients(orderRes.rows[0].items_ordered[i]);
            ingr = ingr.ingredients;
            for(let j = 0; j < ingr.length; j++) {
                let quan = ingr[j].substring(0, ingr[j].indexOf(' '));
                let name = ingr[j].substring(ingr[j].indexOf(' ') + 1);
                if(totalIngredients.has(name)) {
                    totalIngredients.set(name, totalIngredients.get(name) + parseInt(quan));
                } else {
                    totalIngredients.set(name, parseInt(quan));
                }
            }
            console.log();
        }
        console.log("Getting modifications");
        let mods = orderRes.rows[0].modifications;
        for(let i = 0; i < mods.length; i++) {
            let name = mods[i].substring(2);
            console.log(name);
            let quan = 1;
            if(mods[i].indexOf('+') == -1) {
                quan = -1;
            }
            if(totalIngredients.has(name)) {
                totalIngredients.set(name, totalIngredients.get(name) + parseInt(quan));
            } else {
                totalIngredients.set(name, parseInt(quan));
            }
        }
        console.log("\nUpdating stock");
        for(const [key, value] of totalIngredients.entries()) {
            pool.query(
                "UPDATE inventory_data SET quantity = quantity - $1 WHERE ingredient_name = $2",
                [value, key]
            );
        }
        return 1;
    } catch (error) {
        console.error(error)
    }
}

exports.lastOrderNumber = lastOrderNumber;
exports.updateInventory = updateInventory;