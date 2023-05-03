var express = require('express');
var router = express.Router();

/**
  Retrieves all orders from the database, sends the data as a response, and writes the data to a local file.
  @author Peter
  @function 
  @param {Object} req - The request object.
  @param {Object} res - The response object.
  @param {function} next - The next middleware function in the request-response cycle.
  @throws {Error} If an error occurs while retrieving the orders or writing to the local file.
  @returns {void}
*/

const { Pool } = require('pg');
// const { getOrders } = require('./backend_functions/Order');
const dotenv = require('dotenv').config();

// Create pool
const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: process.env.PSQL_PORT,
  ssl: {rejectUnauthorized: false}
});

// Add process hook to shutdown pool
process.on('SIGINT', function() {
  pool.end();
  console.log('Application successfully shutdown');
  process.exit(0);
});

// router.get('/', function(req, res, next) {
//   res.send('message from orders');
// });

router.get('/', (req, res, next) => {
  orders = []
  pool
    .query("SELECT * FROM orders ORDER BY order_number;")
    .then(query_res => {
      for (let i = 0; i < query_res.rowCount; i++){
        orders.push(query_res.rows[i]);
      }
      const data = {order: orders};
      console.log(orders);
      res.send(data);

      const FileSystem = require("fs");
      FileSystem.writeFile('../local_data/orders.json', JSON.stringify(data), (error) => {
        (err) => {  if (err) throw err; } 
      });
    });
});

module.exports = router;
