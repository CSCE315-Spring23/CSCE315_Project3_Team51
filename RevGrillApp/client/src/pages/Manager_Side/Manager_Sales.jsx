import React, { Component } from 'react';
import './manager.css';
import {}

export class Manager_Sales extends Component {

  render() {
    return(
      <div>

        <body>
            <div className="header">
                <ul className="nav nav-ls">
                    <div className="nav-home">
                        <li><a className="nav-link link-home" href="">Rev's Grill</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" href="Manager_Inventory.html">Inventory</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" href="Manager_Employee.html">Menu</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link nav-curr" href="Manager_Sales.html">Sales</a></li>
                    </div>
                </ul>
            </div>

            <div className="ms-grid">
                <div className="s-form">
                    <h2>Select Report</h2>
                    <p> form/buttons for report</p>
                </div>
                <div className="ms-display">
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

