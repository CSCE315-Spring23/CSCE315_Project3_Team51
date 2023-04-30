var express = require('express');
const SS = require('../backend_functions/Server_Side.js');
var router = express.Router();

router.get('/last_order_number', (req, res, next) => {
    try {
        const data = SS.lastOrderNumber();
        res.send(data);
    } catch (err) {
        res.status(500).send('lastOrderNumber failed');
    }
});

router.put('/update_inventory', (req, res, next) => {
    try {
        SS.updateInventory(req.body.orderNum);
    } catch (err) {
        res.status(500).send('updateInventory failed');
    }
});

router.get('/get_menu', (req, res, next) => {
    try {
        const data = SS.getMenu();
        res.send(data);
    } catch (err) {
        res.status(500).send('getMenu failed');
    }
});

router.put('/get_ingredients', (req, res, next) => {
    try {
        const data = SS.getIngredients(req.body.item);
        res.send(data);
    } catch (err) {
        res.status(500).send('getIngredients failed');
    }
});

router.put('/get_category_items', (req, res, next) => {
    try {
        const data = SS.getCategoryItems(req.body.category);
        res.send(data);
    } catch (err) {
        res.status(500).send('getCategoryItems failed');
    }
});

router.get('/get_orders', (req, res, next) => {
    try {
        const data = SS.getOrders();
        res.send(data);
    } catch (err) {
        res.status(500).send('getOrders failed');
    }
});

router.put('/get_order_by_num', (req, res, next) => {
    try {
        const data = SS.getOrderByNum(req.body.orderNum);
        res.send(data);
    } catch (err) {
        res.status(500).send('getOrderByNum failed');
    }
});

module.exports = router;