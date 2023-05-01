var express = require('express');
const Log = require('../backend_functions/Login.js');
var router = express.Router();

router.put('/is_employee', (req, res, next) => {
    try {
        const data = Log.isEmployee(req.body.id);
        res.send(data);
    } catch (err) {
        res.status(500).send('isEmployee failed');
    }
});

router.put('/is_manager', (req, res, next) => {
    try {
        const data = Log.isManager(req.body.id);
        res.send(data);
    } catch (err) {
        res.status(500).send('isManager failed');
    }
});

module.exports = router;