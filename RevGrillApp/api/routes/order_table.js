var express = require('express');
const SS = require('../backend_functions/Server_Side.js');
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


router.get('/get_orders', async (req, res, next) => {
  try {
      const data = await SS.getOrders();
      res.send(data);
  } catch (err) {
      res.status(500).send('getOrders failed');
  }
});

module.exports = router;
