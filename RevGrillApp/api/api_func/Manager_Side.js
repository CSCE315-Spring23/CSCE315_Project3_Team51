const {pool} = require("./Conn.js");
const Item = require("./Item");
const Ingredient = require("./Ingredient");
const Employee = require("./Employee");
const Order = require("./Order");


async function getMostUsedItems() {
    console.log("Work in progress");
}

async function getSellsTogether() {
    console.log("Work in progress");
}

async function restockReport() {
    console.log("Work in progress");
}

async function salesReport() {
    console.log("Work in progress");
}

async function excessReport() {
    console.log("Work in progress");
}

async function xReport() {
    console.log("Work in progress");
}

async function zReport() {
    console.log("Work in progress");
}

exports.getMostUsedItems = getMostUsedItems;
exports.getSellsTogether = getSellsTogether;
exports.restockReport = restockReport;
exports.salesReport = salesReport;
exports.excessReport = excessReport;
exports.xReport = xReport;
exports.zReport = zReport;
exports.editItem = Item.editItem;
exports.addItem = Item.addItem;
exports.removeItem = Item.removeItem;
exports.getInventory = Ingredient.getInventory;
exports.editInventory = Ingredient.editInventory;
exports.employeeInfo = Employee.employeeInfo;
exports.getSales = Order.getSales;