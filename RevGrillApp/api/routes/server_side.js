var express = require('express');
const SS = require('../backend_functions/Server_Side.js');
var router = express.Router();

router.get('/last_order_number', async (req, res, next) => {
    try {
        const data = await SS.lastOrderNumber();
        res.send(data);
    } catch (err) {
        res.status(500).send('lastOrderNumber failed');
    }
});

router.post('/create_order', async (req, res, next) => {
    try {
        var modifications = [];
        var orderTaker = -1;
        var tip = 0;
        if(req.body.hasOwnProperty(modifications))
            modifications = req.body.modifications;
        if(req.body.hasOwnProperty(orderTaker))
            orderTaker = req.body.orderTaker;
        if(req.body.hasOwnProperty(tip))
            tip = req.body.tip;
        await SS.createOrder(req.body.itemsOrdered, req.body.totalPrice, modifications, orderTaker, tip);
    } catch (err) {
        res.status(500).send('createOrder failed');
    }
});

router.post('/update_inventory', async (req, res, next) => {
    try {
        await SS.updateInventory(req.body.orderNum);
    } catch (err) {
        res.status(500).send('updateInventory failed');
    }
});

router.get('/get_menu', async (req, res, next) => {
    try {
        const data = await SS.getMenu();
        res.send(data);
    } catch (err) {
        res.status(500).send('getMenu failed');
    }
});

router.post('/get_ingredients', async (req, res, next) => {
    try {
        const data = await SS.getIngredients(req.body.item);
        res.send(data);
    } catch (err) {
        res.status(500).send('getIngredients failed');
    }
});

router.post('/get_category_items', async (req, res, next) => {
    try {
        const data = await SS.getCategoryItems(req.body.category);
        res.send(data);
    } catch (err) {
        res.status(500).send('getCategoryItems failed');
    }
});

router.get('/get_orders', async (req, res, next) => {
    try {
        const data = await SS.getOrders();
        res.send(data);
    } catch (err) {
        res.status(500).send('getOrders failed');
    }
});

router.post('/get_order_by_num', async (req, res, next) => {
    try {
        const data = await SS.getOrderByNum(req.body.orderNum);
        res.send(data);
    } catch (err) {
        res.status(500).send('getOrderByNum failed');
    }
});

module.exports = router;