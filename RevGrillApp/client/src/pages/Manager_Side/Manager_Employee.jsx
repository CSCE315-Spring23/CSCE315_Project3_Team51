import React, { Component } from 'react';
import './manager.css';
import { useEffect, useState } from 'react';

export default function Manager_Employee() {

    const [itemNum, setItemNum] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemCat, setItemCat] = useState('');
    const [itemIngs, setItemIngs] = useState('');

    const numChange = (event) => {
        setItemNum(event.target.value);
    };

    const nameChange = (event) => {
        setItemName(event.target.value);
    };

    const priceChange = (event) => {
        setItemPrice(event.target.value);
    };

    const catChange = (event) => {
        setItemCat(event.target.value);
    };

    const ingsChange = (event) => {
        setItemIngs(event.target.value);
    };

    const handleRemove = () => {
        let requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            // body: JSON.stringify({ item: 34})
        };

        if (itemNum != "") {
            requestOptions.body = JSON.stringify({ item: itemNum})
        }
        else if (itemName != "") {
            requestOptions.body = JSON.stringify({ item: itemName})
        }
        else {
            window.alert("Please enter an item name or number to delete an item.")
        }
        fetch("http://localhost:9000/manager_side/remove_item", requestOptions);

        // window.location.reload();
    };

    const handleAdd = () => {
        let requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Chocolate Cake", price: 10.25, category: "Dessert", ingredients: "[10 sugar, 1 bread]"})
        };
        fetch("http://localhost:9000/manager_side/add_item", requestOptions);
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
                                <td><input type="number" id="item_num" name="item_num" onChange={numChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="item_name">Item name:</label></td>
                                <td><input type="text" id="item_name" name="item_name" onChange={nameChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="item_price">Item price:</label></td>
                                <td><input type="number" step="0.01" id="item_price" name="item_price" onChange={priceChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="item_category">Item category:</label></td>
                                <td><input type="text" id="item_category" name="item_category" onChange={catChange}/></td>
                            </tr>
                            <tr>
                                <td><label for="ing_list">Ingredient list:</label></td>
                                <td><input type="text" id="ing_list" name="ing_list" onChange={ingsChange} placeholder="<# Ingredient, # Ingredient, ...>"/></td>
                            </tr>
                        </table>
                        <div className="button-div">
                            <button onClick = { handleAdd }>Add Item</button>
                            <button>Edit Item</button>
                            <button onClick = { handleRemove }>Remove Item</button>
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

