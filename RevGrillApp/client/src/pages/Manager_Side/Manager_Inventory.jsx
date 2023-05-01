// import React, { Component } from 'react';
import './manager.css';
import { useEffect, useState } from 'react';
// import './Manager_Side';
// import { fun } from './Manager_Side';

export default function Manager_Inventory() {

    const [ingredients, setIngredients] = useState('No data - Ingredients')
    // const yay = "yay!"
  
    const callAPIIngredients = () => {
      fetch("http://localhost:9000/users")
        .then(r => r.text())
        .then(resp => {
          setIngredients(resp)
        });
    }

    useEffect(() => {
        callAPIIngredients()
    }, [])

    function fun() {
        const obj = JSON.parse(ingredients)
        window.alert(obj.teammembers[0].section);
    }

    return(
      <div>
        <div className="header">
            <ul className="nav nav-ls">
                <div className="nav-home">
                    <li><a className="nav-link link-home" href="">Rev's Grill</a></li>
                </div>
                <div className="nav-item">
                    <li><a className="nav-link nav-curr" href="Manager_Inventory.html">Inventory</a></li>
                </div>
                <div className="nav-item">
                    <li><a className="nav-link" href="Manager_Employee.html">Menu</a></li>
                </div>
                <div className="nav-item">
                    <li><a className="nav-link" href="Manager_Sales.html">Sales</a></li>
                </div>
            </ul>
        </div>

        <div className="i-grid">
            <div className="i-form">
                <h2>Update Inventory</h2>
                <form>
                    <table>
                        <tr>
                            <td><label for="itemname">Item name:</label></td>
                            <td><input type="text" id="itemname" name="itemname"/></td>
                        </tr>
                        <tr>
                            <td><label for="itemqty">Item quantity:</label></td>
                            <td><input type="text" id="itemqty" name="itemqty"/></td>
                        </tr>
                        <tr>
                            <td><label for="itemmin">Item minimum:</label></td>
                            <td><input type="text" id="itemmin" name="itemmin"/></td>
                        </tr>
                    </table>
                    <div className="button-div">
                        {/* {yay} */}
                        {/* {ingredients} */}
                        <button onClick={fun}>Update Inventory</button>
                    </div>
                </form>
            </div>
            <div className="i-mostused">
                <h2>Most Used Items Today</h2>
                {/* <!-- <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul> --> */}
            </div>
            <div className="i-display">
                <h2>Display Inventory</h2>
                <p>inventory will display here</p>
            </div>
        </div>

        <footer>
            Made with 🤍 by CSCE 315 Team 51
        </footer>

        {/* <p>{ingredients}</p> */}

      </div>
    
    )
  
}
