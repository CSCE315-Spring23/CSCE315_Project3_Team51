var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
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

router.get('/', (req, res, next) => {
  employees = []
  pool
    .query("SELECT * FROM employees;")
    .then(query_res => {
      for (let i = 0; i < query_res.rowCount; i++){
        employees.push(query_res.rows[i]);
      }
      const data = {employee: employees};
      // console.log(teammembers);
      res.send(data);

      const FileSystem = require("fs");
      FileSystem.writeFile('../local_data/employees.json', JSON.stringify(data), (error) => {
        (err) => {  if (err) throw err; } 
      });
    });
});

module.exports = router;
