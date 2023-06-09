import './manager.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JsonToTable3 from './Display_Table3';

export default function Manager_Inventory() {
    const navigate = useNavigate();
    const [mostUsed, setMostUsed] = useState('No Data - Most Used');
    const [inventory, setInventory] = useState('No Data - Inventory');
  
    /**
     * Gets the most used ingredients in JSON format from the backend, sets the mostUsed state variable (with a string of the top 3 ingredients)
     * @author Harini Kumar
     */
    const getMostUsed = () => {
      fetch("https://csce-315-project-3-backend.onrender.com/manager_side/most_used_items")
        .then(r => r.text())
        .then(r => {
            setMostUsed(populateTop3(r));
        });
    }

    /**
     * Gets inventory in JSON format from the backend and sets the inventory state variable (with an HTML table generated from this data)
     * @author Harini Kumar
     */
    const getInventory = () => {
      fetch("https://csce-315-project-3-backend.onrender.com/manager_side/get_inventory")
        .then(r => r.text())
        .then(r => {
            setInventory(JsonToTable3("ingredient_name", "quantity", "min_q", "Ingredient", "Quantity", "Minimum Quantity", r))
        });  
    }

    /**
     * Parses the string JSON data to get the top 3 most used ingredients in string format
     * @param {string} m_text - stringified JSON data from the backend
     * @return {string} the top 3 items and their amounts used
     * @author Harini Kumar
     */
    function populateTop3(m_text) {
        const obj = JSON.parse(m_text);
        let text = ""
        for (let i = 0; i < Math.min(3, obj.length); i++) {
            text += obj[i].ingredient_name + ": " + obj[i].amt_used + "\n";
        }
        if (text == "") {
            text = 'No Data - Most Used'
        }
        return text;
    }

    /**
     * Called when the "Update Inventory" button is clicked, makes the necessary call to the database to update the desired ingredient's quantity/minimum
     * @author Harini Kumar
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        let itemName = event.target.itemname.value;
        let itemQty = Number(event.target.itemqty.value);
        let itemMin = Number(event.target.itemmin.value);

        event.target.reset();

        if (itemQty == "") {
            itemQty = -1;
        }
        if (itemMin == "") {
            itemMin = -1;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredient: itemName, newQuantity: itemQty, minQuantity: itemMin })
            // body: JSON.stringify({ ingredient: "bacon", newQuantity: 400, minQuantity: 200 })
        };
        fetch("https://csce-315-project-3-backend.onrender.com/manager_side/edit_inventory", requestOptions);

        window.location.reload();
    };

    useEffect(() => {
        getMostUsed()
    }, [])

    useEffect(() => {
        getInventory()
    }, [])

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
        <div className='manager-body'>
        
            <div className="header">
                <ul className="nav nav-ls">
                    <div className="nav-home">
                        <li><a className="nav-link link-home" href="">Rev's Grill</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link nav-curr" onClick={goInventory}>Inventory</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" onClick = {goEmployee}>Menu</a></li>
                    </div>
                    <div className="nav-item">
                        <li><a className="nav-link" onClick = {goSales}>Sales</a></li>
                    </div>
                </ul>
            </div>

        <div className="i-grid">
            <div className="i-form">
                <h2 class="form-heading">Update Inventory</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td><label for="itemname">Item name:</label></td>
                            <td><input type="text" id="itemname" name="itemname"/></td>
                        </tr>
                        <tr>
                            <td><label for="itemqty">Item quantity:</label></td>
                            <td><input type="number" id="itemqty" name="itemqty"/></td>
                        </tr>
                        <tr>
                            <td><label for="itemmin">Item minimum:</label></td>
                            <td><input type="number" id="itemmin" name="itemmin"/></td>
                        </tr>
                    </table>
                    <div className="button-div">
                        <button type="submit">Update Inventory</button>
                    </div>
                </form>
            </div>
            <div className="i-mostused">
                <h2>Most Used Items Today</h2>
                <p id="most-used">
                    { mostUsed.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                            {item}
                            <br/>
                            </span>
                        )
                    })}
                </p>
            </div>
            <div className="i-display">
                <h2>Display Inventory</h2>
                <p> { inventory } </p>
            </div>
        </div>

        <footer>
            Made with 🤍 by CSCE 315 Team 51
        </footer>

      </div>
    
    )
  
}
