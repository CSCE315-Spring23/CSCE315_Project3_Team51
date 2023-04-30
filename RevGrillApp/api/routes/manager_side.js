var express = require('express');
const MS = require('../backend_functions/Manager_Side.js');
var router = express.Router();

router.get('/most_used_items', (req, res, next) => {
    try {
        const inv = MS.getMostUsedItems();
        res.send(inv);
    } catch (err) {
        res.status(500).send('getMostUsedItems failed');
    }
});

router.get('/get_sells_together', (req, res, next) => {
    try {
        const inv = MS.getSellsTogether();
        res.send(inv);
    } catch (err) {
        res.status(500).send('getSellsTogether failed');
    }
});

router.get('/restock_report', (req, res, next) => {
    try {
        const inv = MS.restockReport();
        res.send(inv);
    } catch (err) {
        res.status(500).send('restockReport failed');
    }
});

router.get('/sales_report', (req, res, next) => {
    try {
        const inv = MS.salesReport();
        res.send(inv);
    } catch (err) {
        res.status(500).send('salesReport failed');
    }
});

router.get('/excess_report', (req, res, next) => {
    try {
        const inv = MS.excessReport();
        res.send(inv);
    } catch (err) {
        res.status(500).send('excessReport failed');
    }
});

router.get('/x_report', (req, res, next) => {
    try {
        const inv = MS.xReport();
        res.send(inv);
    } catch (err) {
        res.status(500).send('xReport failed');
    }
});

router.get('/z_report', (req, res, next) => {
    try {
        const inv = MS.zReport();
        res.send(inv);
    } catch (err) {
        res.status(500).send('zReport failed');
    }
});

//edit_item

//add_item

//remove_item

router.get('/get_inventory', (req, res, next) => {
    try {
        const inv = MS.getInventory();
        res.send(inv);
    } catch (err) {
        res.status(500).send('getInventory failed');
    }
});

//edit_inventory

//signal_new_day

//employee_info

router.get('/get_sales', (req, res, next) => {
    try {
        const inv = MS.getSales();
        res.send(inv);
    } catch (err) {
        res.status(500).send('getSales failed');
    }
});

module.exports = router;