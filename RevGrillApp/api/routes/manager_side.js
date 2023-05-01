var express = require('express');
const MS = require('../backend_functions/Manager_Side.js');
var router = express.Router();

router.get('/most_used_items', (req, res, next) => {
    try {
        const data = MS.getMostUsedItems();
        res.send(data);
    } catch (err) {
        res.status(500).send('getMostUsedItems failed');
    }
});

router.get('/get_sells_together', (req, res, next) => {
    try {
        const data = MS.getSellsTogether();
        res.send(data);
    } catch (err) {
        res.status(500).send('getSellsTogether failed');
    }
});

router.get('/restock_report', (req, res, next) => {
    try {
        const data = MS.restockReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('restockReport failed');
    }
});

router.get('/sales_report', (req, res, next) => {
    try {
        const data = MS.salesReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('salesReport failed');
    }
});

router.get('/excess_report', (req, res, next) => {
    try {
        const data = MS.excessReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('excessReport failed');
    }
});

router.get('/x_report', (req, res, next) => {
    try {
        const data = MS.xReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('xReport failed');
    }
});

router.get('/z_report', (req, res, next) => {
    try {
        const data = MS.zReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('zReport failed');
    }
});

router.put('/edit_item', (req, res, next) => {
    try {
        var item = req.body.item;
        var newName = "";
        var newPrice = -1;
        var newCategory = "";
        var newIngredients = [];
        if(req.body.hasOwnProperty(newName))
            newName = req.body.newName;
        if(req.body.hasOwnProperty(newPrice))
            newPrice = req.body.newPrice;
        if(req.body.hasOwnProperty(newCategory))
            newCategory = req.body.newCategory;
        if(req.body.hasOwnProperty(newIngredients))
            newIngredients = req.body.newIngredients;
        MS.editItem(item, newName, newPrice, newCategory, newIngredients);
    } catch (err) {
        res.status(500).send('editItem failed');
    }
});

router.put('/add_item', (req, res, next) => {
    try {
        MS.addItem(req.body.name, req.body.price, req.body.category, req.body.ingredients);
    } catch (err) {
        res.status(500).send('addItem failed');
    }
});

router.put('/remove_item', (req, res, next) => {
    try {
        MS.removeItem(req.body.item);
    } catch (err) {
        res.status(500).send('removeItem failed');
    }
});

router.get('/get_inventory', (req, res, next) => {
    try {
        const data = MS.getInventory();
        res.send(data);
    } catch (err) {
        res.status(500).send('getInventory failed');
    }
});

router.put('/edit_inventory', (req, res, next) => {
    try {
        var ingredient = req.body.ingredient;
        var newQuantity = -1;
        var minQuantity = -1;
        if(req.body.hasOwnProperty(newQuantity))
            newQuantity = req.body.newQuantity;
        if(req.body.hasOwnProperty(minQuantity))
            minQuantity = req.body.minQuantity;
        MS.editInventory(ingredient, newQuantity, minQuantity);
    } catch (err) {
        res.status(500).send('editInventory failed');
    }
});

router.put('/new_day', (req, res, next) => {
    try {
        MS.signalNewDay();
    } catch (err) {
        res.status(500).send('signalNewDay failed');
    }
});

router.put('/employee_info', (req, res, next) => {
    try {
        const data = MS.employeeInfo(req.body.id);
        res.send(data);
    } catch (err) {
        res.status(500).send('employeeInfo failed');
    }
});

router.get('/get_sales', (req, res, next) => {
    try {
        const data = MS.getSales();
        res.send(data);
    } catch (err) {
        res.status(500).send('getSales failed');
    }
});

module.exports = router;