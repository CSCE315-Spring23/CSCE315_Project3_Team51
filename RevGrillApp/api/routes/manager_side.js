var express = require('express');
const MS = require('../backend_functions/Manager_Side.js');
var router = express.Router();

router.get('/most_used_items', async (req, res, next) => {
    try {
        const data = await MS.getMostUsedItems();
        console.log("Inside router");
        console.log(data);
        res.send(data);
    } catch (err) {
        res.status(500).send('getMostUsedItems failed');
    }
});

router.get('/get_sells_together', async (req, res, next) => {
    try {
        const data = await MS.getSellsTogether();
        res.send(data);
    } catch (err) {
        res.status(500).send('getSellsTogether failed');
    }
});

router.get('/restock_report', async (req, res, next) => {
    try {
        const data = await MS.restockReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('restockReport failed');
    }
});

router.get('/sales_report', async (req, res, next) => {
    try {
        const data = await MS.salesReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('salesReport failed');
    }
});

router.get('/excess_report', async (req, res, next) => {
    try {
        const data = await MS.excessReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('excessReport failed');
    }
});

router.get('/x_report', async (req, res, next) => {
    try {
        const data = await MS.xReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('xReport failed');
    }
});

router.get('/z_report', async (req, res, next) => {
    try {
        const data = await MS.zReport();
        res.send(data);
    } catch (err) {
        res.status(500).send('zReport failed');
    }
});

router.put('/edit_item', async (req, res, next) => {
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
        await MS.editItem(item, newName, newPrice, newCategory, newIngredients);
    } catch (err) {
        res.status(500).send('editItem failed');
    }
});

router.put('/add_item', async (req, res, next) => {
    try {
        await MS.addItem(req.body.name, req.body.price, req.body.category, req.body.ingredients);
    } catch (err) {
        res.status(500).send('addItem failed');
    }
});

router.put('/remove_item', async (req, res, next) => {
    try {
        await MS.removeItem(req.body.item);
    } catch (err) {
        res.status(500).send('removeItem failed');
    }
});

router.get('/get_inventory', async (req, res, next) => {
    try {
        const data = await MS.getInventory();
        res.send(data);
    } catch (err) {
        res.status(500).send('getInventory failed');
    }
});

router.post('/edit_inventory', async (req, res, next) => {
    try {
        var ingredient = req.body.ingredient;
        var newQuantity = -1;
        var minQuantity = -1;
        if(req.body.hasOwnProperty(newQuantity))
            newQuantity = req.body.newQuantity;
        if(req.body.hasOwnProperty(minQuantity))
            minQuantity = req.body.minQuantity;
        await MS.editInventory(ingredient, newQuantity, minQuantity);
    } catch (err) {
        res.status(500).send('editInventory failed');
    }
});

router.put('/new_day', async (req, res, next) => {
    try {
        await MS.signalNewDay();
    } catch (err) {
        res.status(500).send('signalNewDay failed');
    }
});

router.put('/employee_info', async (req, res, next) => {
    try {
        const data = await MS.employeeInfo(req.body.id);
        res.send(data);
    } catch (err) {
        res.status(500).send('employeeInfo failed');
    }
});

router.get('/get_sales', async (req, res, next) => {
    try {
        const data = await MS.getSales();
        res.send(data);
    } catch (err) {
        res.status(500).send('getSales failed');
    }
});

module.exports = router;