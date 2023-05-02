import React, { Component } from 'react';
import './manager.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Manager_Sales() {
    const navigate = useNavigate();
    const [report, setReport] = useState('No Data - Report')
  
    // const callAPIIngredients = () => {
    //   fetch("http://localhost:9000/users")
    //     .then(r => r.text())
    //     .then(resp => {
    //       setIngredients(resp)
    //     });
    // }

    // useEffect(() => {
    //     callAPIIngredients()
    // }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        const reportType = event.target.report_type.value;
        const startTime = event.target.start_time.value;
        const endTime = event.target.end_time.value;

        event.target.reset();

        fetch("http://localhost:9000/manager_side/" + reportType + "_report")
            .then(r => r.text())
            .then(r => {
                setReport(r)
            })
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
                        <input type="text" id="start_time" name="start_time" placeholder="start time (YYYY-MM-DD HH:MM)" />
                        <p></p>
                        <label for="end_time">For Sales and Pairing Reports, enter the end time here: </label>
                        <input type="text" id="end_time" name="end_time" placeholder="end time (YYYY-MM-DD HH:MM)" />
                        <p></p>
                        <button type="submit">Generate Report</button>
                    </form>
                </div>
                <div class="ms-display">
                    <h2>Display Report</h2>
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

