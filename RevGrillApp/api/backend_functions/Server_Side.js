const {pool} = require("./Conn.js");
const Item = require("./Item.js");
const Order = require("./Order.js");


async function lastOrderNumber() {
    try {
        console.log('Getting last order number');
        const res = await pool.query(
            "SELECT MAX(order_number) as last_number FROM orders"
        );
        console.log(res.rows[0]);
        return res.rows[0];
    } catch (error) {
        console.error(error)
    }
}

async function getTotalPrice(itemsOrdered) {
    try {
        console.log('Getting total price of an order');
        const res = await pool.query(
            "SELECT total_price FROM (SELECT UNNEST($1::int[]), SUM(price) AS total_price FROM UNNEST($1::int[]) " +
            "AS item_number INNER JOIN menu_items USING (item_number)) AS inner_table GROUP BY total_price",
            [new Array(itemsOrdered)]
        );
        console.log(res.rows[0]);
        return res.rows[0];
    } catch (error) {
        console.error(error)
    }
}

async function createOrder(items_ordered, total_price, modifications = [], order_taker = -1, tip = 0) {
    try {
        console.log('Creating new order');
        await pool.query(
            "INSERT INTO orders (order_number, total_price, tip, order_taker, items_ordered, modifications, order_status, current_day, order_time) " +
            "VALUES ((SELECT MAX(order_number)+1 FROM orders), $1, $2, $3, $4, $5, $6, True, (SELECT NOW()::timestamp(0)))",
            [total_price, tip, order_taker, items_ordered, modifications, "In Progress"]
        );
        var oNum = await lastOrderNumber();
        Order.getOrderByNum(oNum.last_number);
        console.log({"order_number": oNum.last_number});
        updateInventory(oNum.last_number);
        return {"order_number": oNum.last_number};
    } catch (error) {
        console.error(error)
    }
}

async function updateInventory(orderNum) {
    try {
        console.log('UPDATING INVENTORY BEGIN');
        console.log('Checking if order has already been served');
        const statusRes = await pool.query(
            "SELECT order_status FROM orders WHERE order_number = $1",
            [orderNum]
        );
        if(statusRes.rows[0].order_status != "Served") {
            pool.query(
                "UPDATE orders SET order_status = $1 WHERE order_number = $2",
                ['Served', orderNum]
            );
            console.log('Getting items of order ' + orderNum);
            const orderRes = await pool.query(
                "SELECT items_ordered, modifications FROM orders WHERE order_number = $1",
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
        } else {
            console.log('Order has already been served!');
        }
    } catch (error) {
        console.error(error)
    }
}

// async function createNewOrder() {
//     try {
//         console.log('Creating new order');
//         let newNum = lastOrderNumber
//         const res = await pool.query(
//             "SELECT * FROM orders WHERE order_number = $1",
//             [orderNum]
//         );
//         console.log(res.rows[0]);
//         return res.rows[0];
//     } catch (error) {
//         console.error(error)
//     }
// }

exports.lastOrderNumber = lastOrderNumber;
exports.getTotalPrice = getTotalPrice;
exports.createOrder = createOrder;
exports.updateInventory = updateInventory;
exports.getMenu = Item.getMenu;
exports.getIngredients = Item.getIngredients;
exports.getCategoryItems = Item.getCategoryItems;
exports.getOrders = Order.getOrders;
exports.getOrderByNum = Order.getOrderByNum;