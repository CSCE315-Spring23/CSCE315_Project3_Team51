const {pool} = require("./Conn.js");

/**
 * Gets all orders
 * @return {JSON} order data
 * @author Peter Just
 */
async function getOrders() {
    try {
        console.log('Getting all orders');
        const res = await pool.query(
            "SELECT * FROM orders ORDER BY order_number"
        );
        console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.error(error)
    }
}

/**
 * Gets an order by given number
 * @param {int} orderNum - number of order to get
 * @return {JSON} order data
 * @author Peter Just
 */
async function getOrderByNum(orderNum) {
    try {
        console.log('Getting order ' + orderNum);
        const res = await pool.query(
            "SELECT * FROM orders WHERE order_number = $1",
            [orderNum]
        );
        console.log(res.rows[0]);
        return res.rows[0];
    } catch (error) {
        console.error(error)
    }
}

/**
 * Gets total sales
 * @return {JSON} total sales
 * @author Peter Just
 */
async function getSales() {
    try {
        console.log('Getting total sales from today');
        const res = await pool.query(
            "SELECT ROUND(CAST(SUM(total_price) AS numeric), 2) AS total_sales FROM orders WHERE current_day = TRUE"
        );
        console.log(res.rows[0]);
        return res.rows[0];
    } catch (error) {
        console.error(error)
    }
}

exports.getOrders = getOrders;
exports.getOrderByNum = getOrderByNum;
exports.getSales = getSales;