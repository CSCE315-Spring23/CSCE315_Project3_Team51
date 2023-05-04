const {pool} = require("./Conn.js");
const Item = require("./Item.js");
const Ingredient = require("./Ingredient.js");
const Employee = require("./Employee.js");
const Order = require("./Order.js");


async function getMostUsedItems() {
    try {
        console.log('Getting most used ingredients');
        const res = await pool.query(
            "SELECT ingredient_name, (prev_q1 - quantity) AS \"amt_used\" FROM inventory_data WHERE (prev_q1 - quantity) > 0 ORDER BY (prev_q1 - quantity) DESC"
        );
        console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.error(error);
    }
}

async function pairingsReport(startTime = "", endTime = "") {
    try {
        console.log('Getting pairings report');
        var res;
        if(startTime.length == 0 || endTime.length == 0) {
            res = await pool.query(
                "SELECT items_ordered FROM orders"
            );
        } else {
            res = await pool.query(
                "SELECT items_ordered FROM orders WHERE order_time > (TO_TIMESTAMP($1)) AND order_time < (TO_TIMESTAMP($2))",
                [Date.parse(startTime) / 1000.0, Date.parse(endTime) / 1000.0]
            )
        }
        const freq = new Map();
        for(let i = 0; i < res.rowCount; ++i) {
            const items = res.rows[i].items_ordered;
            for(let a = 0; a < items.length; ++a) {
                let itemA = items[a];
                for(let b = a + 1; b < items.length; ++b) {
                    let itemB = items[b];
                    if(itemA != itemB) {
                        if(itemA > itemB) {
                            let bubble = itemB;
                            itemB = itemA;
                            itemA = bubble;
                        }
                        let pair = itemA.toString() + "," + itemB.toString();
                        if(freq.has(pair)) {
                            freq.set(pair, freq.get(pair) + 1);
                        } else {
                            freq.set(pair, 1);
                        }
                    }
                }
            }
        }
        const freqArr = [];
        for(const [key, value] of freq) {
            //console.log(`${key} = ${value}`);
            if(value > 1)
                freqArr.push([key.split(",")[0], key.split(",")[1], value]);
        }
        freqArr.sort(arrayCompare);
        //for(let i = 0; i < freqArr.length; ++i)
            //console.log(freqArr[i][0] + " " + freqArr[i][1] + " " + freqArr[i][2]);
        const itemNames = new Map();
        const menu = await Item.getMenu();
        for(let i = 0; i < menu.length; ++i) {
            itemNames.set(menu[i].item_number, menu[i].item_name);
        }
        const sellsTogether = [];
        for(let i = 0; i < freqArr.length; ++i) {
            const entry = {"item_1": itemNames.get(parseInt(freqArr[i][0])), "item_2": itemNames.get(parseInt(freqArr[i][1])), "times_sold": freqArr[i][2]};
            sellsTogether.push(entry);
        }
        console.log(sellsTogether[0]);
        return sellsTogether;
    } catch (error) {
        console.error(error);
    }
}

function arrayCompare(a, b) {
    if(a[2] === b[2])
        return 0;
    else
        return (a[2] > b[2]) ? -1 : 1;
}

async function restockReport() {
    try {
        console.log('Creating restock report');
        const res = await pool.query(
            "SELECT ingredient_name, (quantity || ' ' || units) AS \"quantity\", (min_q || ' ' || units) " + 
            "AS \"min_q\" FROM inventory_data WHERE quantity < min_q ORDER BY ingredient_name"
        );
        console.log(res.rows[0]);
        return res.rows;
    } catch (error) {
        console.error(error);
    }
}

async function salesReport(startTime = "", endTime = "") {
    try {
        console.log('Creating sales report');
        var tsString;
        if(startTime.length == 0 || endTime.length == 0) {
            tsString = "";
        } else {
            tsString = " WHERE order_time > (TO_TIMESTAMP(" + (Date.parse(startTime) / 1000.0).toString() +
            ")) AND order_time < (TO_TIMESTAMP(" + (Date.parse(endTime) / 1000.0).toString() + "))";
        }
        const res = await pool.query(
            "WITH all_items AS (SELECT array_agg(c) AS arr FROM (SELECT UNNEST(items_ordered) FROM orders" + tsString + 
            ") AS dt(c)), row_items AS (SELECT UNNEST(arr) AS items FROM all_items) " + 
            "SELECT (SELECT item_name FROM menu_items WHERE item_number = items), ROUND(CAST(count(*) * " + 
            "(SELECT price FROM menu_items WHERE item_number = items ORDER BY items) AS NUMERIC), 2) " + 
            "AS total_sales FROM row_items GROUP BY items ORDER BY total_sales DESC"
        );
        console.log(res.rows[0]);
        return res.rows;
    } catch (error) {
        console.error(error);
    }
}

async function excessReport(startTime = "") {
    try {
        const cDate = new Date();
        const msAgo = cDate.getTime() - Date.parse(startTime);
        var daysAgo = Math.floor(msAgo / 1000.0 / 60.0 / 60.0 / 24.0);
        console.log('Creating excess report from ' + daysAgo + ' day(s) ago');
        if(daysAgo > 7 || daysAgo < 1)
            daysAgo = 1;
        const res = await pool.query(
            "SELECT ingredient_name, (prev_q" + daysAgo.toString() + " - quantity) AS amt_sold FROM inventory_data " + 
            "WHERE prev_q" + daysAgo.toString() + " - quantity < 0.1 * prev_q" + daysAgo.toString() + " AND " + 
            "prev_q" + daysAgo.toString() + " - quantity > 0"
        );
        console.log(res.rows[0]);
        return res.rows;
    } catch (error) {
        console.error(error);
    }
}

async function xReport() {
    try {
        console.log('Creating X report');
        const res = await pool.query(
            "WITH all_items AS (SELECT array_agg(c) AS arr FROM (SELECT UNNEST(items_ordered) FROM orders) AS dt(c)), " + 
            "row_items AS (SELECT UNNEST(arr) AS items FROM all_items) SELECT (SELECT item_name FROM menu_items WHERE item_number = items), " +
            "COUNT(*) AS times_ordered FROM row_items GROUP BY items ORDER BY times_ordered DESC"
        );
        console.log(res.rows[0]);
        return res.rows;
    } catch (error) {
        console.error(error);
    }
}

async function zReport() {
    try {
        console.log('Creating Z report');
        const res = await pool.query(
            "WITH all_items AS (SELECT array_agg(c) AS arr FROM (SELECT UNNEST(items_ordered) FROM orders) AS dt(c)), " +
            "row_items AS (SELECT UNNEST(arr) AS items FROM all_items) SELECT (SELECT item_name FROM menu_items WHERE item_number = items), " +
            "ROUND(CAST(count(*) * (SELECT price FROM menu_items WHERE item_number = items ORDER BY items) AS NUMERIC), 2) AS total_sales " + 
            "FROM row_items GROUP BY items ORDER BY items"
        );
        console.log(res.rows[0]);
        Ingredient.signalNewDay();
        return res.rows;
    } catch (error) {
        console.error(error);
    }
}

exports.getMostUsedItems = getMostUsedItems;
exports.pairingsReport = pairingsReport;
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
exports.signalNewDay = Ingredient.signalNewDay;
exports.employeeInfo = Employee.employeeInfo;
exports.getSales = Order.getSales;