import React, { Component } from 'react';
import './manager.css';
import { useEffect, useState } from 'react';

export default function Manager_Employee() {

    // const [ingredients, setIngredients] = useState('No data - Ingredients')
  
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
                        <li><a className="nav-link nav-curr" href="Manager_Employee.html">Menu</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" href="Manager_Sales.html">Sales</a></li>
                    </div>
                </ul>
            </div>
        
            <div className="ms-grid">
                <div className="m-form">
                    <h2>Update Menu</h2>
                    <form>
                        <table>
                            <tr>
                                <td><label for="item_num">Item number:</label></td>
                                <td><input type="text" id="item_num" name="item_num"/></td>
                            </tr>
                            <tr>
                                <td><label for="item_name">Item name:</label></td>
                                <td><input type="text" id="item_name" name="item_name"/></td>
                            </tr>
                            <tr>
                                <td><label for="item_price">Item price:</label></td>
                                <td><input type="text" id="item_price" name="item_price"/></td>
                            </tr>
                            <tr>
                                <td><label for="item_category">Item category:</label></td>
                                <td><input type="text" id="item_category" name="item_category"/></td>
                            </tr>
                            <tr>
                                <td><label for="ing_list">Ingredient list:</label></td>
                                <td><input type="text" id="ing_list" name="ing_list" placeholder="<Ingredient, Ingredient, ...>"/></td>
                            </tr>
                            <tr>
                                <td><label for="ing_list">Amount list:</label></td>
                                <td><input type="text" id="ing_list" name="ing_list" placeholder="<Amount, Amount, ...>"/></td>
                            </tr>
                        </table>
                        <div className="button-div">
                            <button>Add Item</button>
                            <button>Edit Item</button>
                            <button>Remove Item</button>
                        </div>
                    </form>
                </div>
                <div className="ms-display">
                    <h2>Display Menu</h2>
                    <p>menu will display here</p>
                </div>
            </div>
        </body>
        <footer>
            Made with 🤍 by CSCE 315 Team 51
        </footer>
        
        
        </div>        
    
    )

}

