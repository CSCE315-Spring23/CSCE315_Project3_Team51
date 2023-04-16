const {pool} = require("./Conn.js");


async function getIngredients(item) {
    try {
        if(typeof item == "string") {
            console.log('Getting ingredients of ' + item);
            const res = await pool.query(
                "SELECT ingredients FROM menu_items WHERE item_name = $1",
                [item]
            );
            console.log(res.rows[0]);
            return res.rows;
        } else if(typeof item == "number") {
            console.log('Getting ingredients of item ' + item);
            const res = await pool.query(
                "SELECT ingredients FROM menu_items WHERE item_number = $1",
                [item]
            );
            console.log(res.rows[0]);
            return res.rows[0];
        } else {
            console.log("Bad input for getIngredients()");
        }
    } catch (error) {
        console.error(error)
    }
}

async function getCategoryItems(category) {
    try {
        console.log('Getting menu items from category: ' + category);
        const res = await pool.query(
            "SELECT * FROM menu_items WHERE category = $1 ORDER BY item_number",
            [category]
        );
        console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.error(error)
    }
}

exports.getIngredients = getIngredients;
exports.getCategoryItems = getCategoryItems;