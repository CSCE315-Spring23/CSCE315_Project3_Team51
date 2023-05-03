var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Oranges');
});

module.exports = router;

const Employee = require('../api_func/Employee');

router.get('/server_sub', function(req, res, next) {
  try {
      res.send(Employee.isEmployee(3))
  } catch (err) {
      res.status(500).send('Isn\'t an manager');
  }
});