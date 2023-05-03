var express = require('express');
const Employee = require('../api_func/Employee');
var router = express.Router();

/* GET home page. */
router.get('/server_sub', function(req, res, next) {
    try {
        const res = Employee.isEmployee(3);
        res.send(res)
    } catch (err) {
        res.status(500).send('Isn\'t an manager');
    }
});

module.exports = router;
