import React, { Component } from 'react';
import './manager.css';

export class Manager_Sales extends Component {

  render() {
    return(
      <div>

        <body>
            <div class="header">
                <ul class="nav nav-ls">
                    <div class="nav-home">
                        <li><a class="nav-link link-home" href="">Rev's Grill</a></li>
                    </div>
                    <div class="nav-item">
                        <li><a class="nav-link" href="Manager_Inventory.html">Inventory</a></li>
                    </div>
                    <div class="nav-item">
                        <li><a class="nav-link" href="Manager_Employee.html">Menu</a></li>
                    </div>
                    <div class="nav-item">
                        <li><a class="nav-link nav-curr" href="Manager_Sales.html">Sales</a></li>
                    </div>
                </ul>
            </div>

            <div class="ms-grid">
                <div class="s-form">
                    <h2>Select Report</h2>
                    <form>
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
                        <button onclick= "fun()">Generate Report</button>
                    </form>
                </div>
                <div class="ms-display">
                    <h2>Display Report</h2>
                    <p>report will display here</p>
                </div>
            </div>
        </body>

        <footer>
            Made with 🤍 by CSCE 315 Team 51
        </footer>

      </div>

    
    )
  }

}

