const {pool} = require("./Conn.js");


async function getMenu() {
    try {
        console.log('Getting all menu items');
        const res = await pool.query(
            "SELECT * FROM menu_items ORDER BY item_number"
        );
        console.log(res.rows[0]);
        return res.rows;
    } catch (error) {
        console.error(error)
    }
}

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
        console.log(res.rows[0]);
        return res.rows;
    } catch (error) {
        console.error(error)
    }
}

async function editItem(item, newName = "", newPrice = -1, newCategory = "", newIngredients = []) {
    try {
        let identifier = "";
        if(typeof item == "string") {
            console.log("Editing " + item);
            identifier = "item_name";
        } else if(typeof item == "number") {
            console.log("Editing item " + item);
            identifier = "item_number";
        } else {
            console.log("Bad input for editItem()");
            return -1;
        }
        const prevRes = await pool.query(
            "SELECT * FROM menu_items WHERE " + identifier + " = $1",
            [item]
        );
        let prevData = prevRes.rows[0];
        if(newName.length == 0)
            newName = prevData.item_name;
        if(newPrice == -1)
            newPrice = prevData.price;
        if(newCategory.length == 0)
            newCategory = prevData.category;
        if(newIngredients.length == 0)
            newIngredients = prevData.ingredients;
        pool.query(
            "UPDATE menu_items SET item_name = $1, price = $2, category = $3, ingredients = $4 WHERE " + identifier + " = $5",
            [newName, newPrice, newCategory, newIngredients, item]
        );
    } catch (error) {
        console.error(error)
    }
}

async function addItem(name, price, category, ingredients) {
    try {
        console.log("Adding new item: " + name);
        pool.query(
            "INSERT INTO menu_items (item_number, item_name, price, category, ingredients) " +
            "VALUES ((SELECT MAX(item_number) FROM menu_items) + 1, $1, $2, $3, $4)",
            [name, price, category, ingredients]
        );
    } catch (error) {
        console.error(error)
    }
}

async function removeItem(item) {
    try {
        let identifier;
        if(typeof item == "string") {
            console.log("Deleting " + item);
            identifier = "item_name";
        } else if(typeof item == "number") {
            console.log("Deleting item " + item);
            identifier = "item_number";
        } else {
            console.log("Bad input for removeItem()");
            return -1;
        }
        const prevRes = await pool.query(
            "DELETE FROM menu_items WHERE " + identifier + " = $1",
            [item]
        );
    } catch (error) {
        console.error(error)
    }
}

// getIngredients("Drip Coffee");
// getCategoryItems("Burger");
// editItem(28, newName = "Drip Coffee");
// addItem("Dripper Coffee", 11.99, "Drink", ["1 sugar"]);
// deleteItem("Dripper Coffee");

exports.getIngredients = getIngredients;
exports.getCategoryItems = getCategoryItems;
exports.getMenu = getMenu;
exports.editItem = editItem;
exports.addItem = addItem;
exports.removeItem = removeItem;