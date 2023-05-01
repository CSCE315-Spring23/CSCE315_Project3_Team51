import React from 'react';
import './server-side.css';
import '../../assets/progress/progress_0';

export default function Server_Categories() {

  return(
    <div>
    <body>
        <header>
          <img></img>
        </header>
    
        <div className="ms-grid">
            <div className="m-form">
                <h2>Create new order</h2>
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