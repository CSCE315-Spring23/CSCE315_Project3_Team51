var express = require('express');
const inventory = require('../backend_functions/Ingredient.js');
var router = express.Router();

router.get('/get_inventory', (req, res, next) => {
    try {
        const inv = inventory.getInventory();
        res.send(inv);
    } catch (err) {
        res.status(500).send('get_inventory failed');
    }
});

module.exports = router;