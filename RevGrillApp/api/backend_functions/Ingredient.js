const {pool} = require("./Conn.js");


async function getInventory() {
    try {
        console.log('Getting all inventory items');
        const res = await pool.query(
            "SELECT * FROM inventory_data ORDER BY ingredient_name"
        );
        console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.error(error)
    }
}

async function editInventory(ingredient, newQuantity = -1, minQuantity = -1) {
    try {
        console.log('Editing stock for ' + ingredient);
        const res = await pool.query(
            "SELECT quantity, min_q FROM inventory_data WHERE ingredient_name = $1",
            [ingredient]
        );
        if(newQuantity == -1)
            newQuantity = res.rows[0].quantity;
        if(minQuantity == -1)
            minQuantity = res.rows[0].min_q;
        pool.query(
            "UPDATE inventory_data SET quantity = $1, min_q = $2 WHERE ingredient_name = $3",
            [newQuantity, minQuantity, ingredient]
        );
    } catch (error) {
        console.error(error)
    }
}

async function signalNewDay() {
    try {
        console.log('Shifting inventory data');
        pool.query(
            "UPDATE inventory_data AS i SET prev_q7 = p.prev_q6, prev_q6 = p.prev_q5, prev_q5 = p.prev_q4, prev_q4 = p.prev_q3, prev_q3 = p.prev_q2, prev_q2 = p.prev_q1, prev_q1 = p.quantity " +
            "FROM (SELECT ingredient_name, prev_q6, prev_q5, prev_q4, prev_q3, prev_q2, prev_q1, quantity FROM inventory_data)" +
            "AS p(ingredient_name, prev_q6, prev_q5, prev_q4, prev_q3, prev_q2, prev_q1, quantity) WHERE i.ingredient_name = p.ingredient_name"  
        );
        console.log('Updating current_day in orders');
        pool.query(
            "UPDATE orders SET current_day = FALSE" 
        );
    } catch (error) {
        console.error(error);
    }
}

// editInventory("chocolate", newQuantity = 415);

exports.getInventory = getInventory;
exports.editInventory = editInventory;
exports.signalNewDay = signalNewDay;
