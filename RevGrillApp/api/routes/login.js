var express = require('express');
const Log = require('../backend_functions/Login.js');
var router = express.Router();

router.post('/is_employee', async (req, res, next) => {
    try {
        const data = await Log.isEmployee(req.body.id);
        res.send(data);
    } catch (err) {
        res.status(500).send('isEmployee failed');
    }
});

router.post('/is_manager', async (req, res, next) => {
    try {
        const data = await Log.isManager(req.body.id);
        res.send(data);
    } catch (err) {
        res.status(500).send('isManager failed');
    }
});

module.exports = router;