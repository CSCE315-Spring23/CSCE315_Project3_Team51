import React, { Component } from 'react';
import './manager.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JsonToTable2 from './Display_Table2';
import JsonToTable3 from './Display_Table3';
import { isFunction } from 'lodash';

export default function Manager_Sales() {
    
    const navigate = useNavigate();
    const [heading, setHeading] = useState('Display Report')
    const [report, setReport] = useState('Report Will Display Here')
    const tableFuncs = {
        "sales": [2, "item_name", "total_sales", "Item", "Sales"],
        "pairings": [3, "item_1", "item_2", "times_sold", "Item 1", "Item 2", "Times Sold"],
        "x": [2, "item_name", "times_ordered", "Item Name", "Times Ordered"],
        "z": [2, "item_name", "total_sales", "Item Name", "Total Sales"],
        "restock": [3, "ingredient_name", "quantity", "min_q", "Ingredient", "Quantity", "Minimum Quantity"],
        "excess": [2, "ingredient_name", "amt_sold", "Ingredient Name", "Amount Sold"]
    }




    const handleSubmit = (event) => {
        event.preventDefault();

        const reportType = event.target.report_type.value;
        const startTime = event.target.start_time.value;
        const endTime = event.target.end_time.value;

        event.target.reset();
        setHeading(reportType.charAt(0).toUpperCase() + reportType.slice(1) + " Report");
        
        let params = tableFuncs[reportType]

        if (reportType == "sales") {
            if (startTime == "" || endTime == "") {
                window.alert("Please provide start and end time for the sales report.")
            }
            else {
                let requestOptions = {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({ startTime: startTime, endTime: endTime})
                };
                fetch("http://localhost:9000/manager_side/" + reportType + "_report", requestOptions)
                    .then(r => r.text())
                    .then(r =>
                        setReport(JsonToTable2(params[1], params[2], params[3], params[4], r))
                    )
            }
        }
        else if (reportType == "pairings") {
            if (startTime == "" || endTime == "") {
                window.alert("Please provide start and end time for the pairings report.")
            }
            else {
                let requestOptions = {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({ startTime: startTime, endTime: endTime})
                };
                fetch("http://localhost:9000/manager_side/" + reportType + "_report", requestOptions)
                    .then(r => r.text())
                    .then(r =>
                        setReport(JsonToTable3(params[1], params[2], params[3], params[4], params[5], params[6], r))
                    )
            }
        }
        else if (reportType == "excess") {
            if (startTime == "") {
                window.alert("Please provide start time for the excess report.")
            }
            else {
                let requestOptions = {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({ startTime: startTime })
                };
                fetch("http://localhost:9000/manager_side/" + reportType + "_report", requestOptions)
                    .then(r => r.text())
                    .then(r =>
                        setReport(JsonToTable2(params[1], params[2], params[3], params[4], r))
                    )
            }
        }
        else {
            if (params[0] == 2) {
                fetch("http://localhost:9000/manager_side/" + reportType + "_report")
                    .then(r => r.text())
                    .then(r =>
                        setReport(JsonToTable2(params[1], params[2], params[3], params[4], r))
                    )
            }
            else if (params[0] == 3) {
                fetch("http://localhost:9000/manager_side/" + reportType + "_report")
                    .then(r => r.text())
                    .then(r =>
                        setReport(JsonToTable3(params[1], params[2], params[3], params[4], params[5], params[6], r))
                    )           
            }
        }
    };

    function goInventory() {
        navigate('/manager_side/inventory')
    }

    function goEmployee() {
        navigate('/manager_side/employee')
    } 

    function goSales() {
        navigate('/manager_side/sales')
    }

    return(
        <div>
        <body>
            <div className="header">
                <ul className="nav nav-ls">
                    <div className="nav-home">
                        <li><a className="nav-link link-home" href="">Rev's Grill</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" onClick={goInventory}>Inventory</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link nav-curr" onClick = {goEmployee}>Menu</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" onClick = {goSales}>Sales</a></li>
                    </div>
                </ul>
            </div>

            <div class="ms-grid">
                <div class="s-form">
                    <h2>Select Report</h2>
                    <form onSubmit={handleSubmit}>
                        <label for="report_type">Choose a report type:</label>
                        <select name="report_type" id="report_type">
                            <option value="sales">Sales Report</option>
                            <option value="pairings">Pairings Report</option>
                            <option value="x">X Report</option>
                            <option value="z">Z Report</option>
                            <option value="excess">Excess Report</option>
                            <option value="restock">Restock Report</option>
                        </select>
                        <p></p>
                        <label for="start_time">For Sales, Pairing, and Excess Reports, enter the start time here: </label>
                        <input type="datetime-local" id="start_time" name="start_time" placeholder="start time (YYYY-MM-DD HH:MM)" />
                        <p></p>
                        <label for="end_time">For Sales and Pairing Reports, enter the end time here: </label>
                        <input type="datetime-local" id="end_time" name="end_time" placeholder="end time (YYYY-MM-DD HH:MM)" />
                        <p></p>
                        <button type="submit">Generate Report</button>
                    </form>
                </div>
                <div class="ms-display">
                    <h2> { heading } </h2>
                    <p>{ report }</p>
                </div>
            </div>
        </body>

        <footer>
            Made with 🤍 by CSCE 315 Team 51
        </footer>

      </div>

    
    )
}

