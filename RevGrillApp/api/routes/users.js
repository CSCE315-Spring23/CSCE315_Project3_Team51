var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const dotenv = require('dotenv').config();

// Create express app
// const app = express();
// const port = 3000;

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

//app.set("view engine", "ejs");

// app.get('/', (req, res) => {
//   const data = {name: 'Mario'};
//   res.render('index', data);
// });

router.get('/', (req, res, next) => {
  teammembers = []
  pool
    .query('SELECT * FROM teammembers;')
    .then(query_res => {
      for (let i = 0; i < query_res.rowCount; i++){
        teammembers.push(query_res.rows[i]);
      }
      const data = {teammembers: teammembers};
      console.log(teammembers);
      res.send(data);

      const FileSystem = require("fs");
      FileSystem.writeFile('../local_data/example.json', JSON.stringify(data), (error) => {
        (err) => {  if (err) throw err; } 
      });
    });
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
