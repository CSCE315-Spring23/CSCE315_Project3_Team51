import React from 'react';
import { useEffect, useState } from 'react';
import itemImages from '../../assets/items/item_img'

/**
*    Renders a list of items in a chosen category with item details
*    @author Casey @peicasey
*
*    @param {Object} chosen_cat - The category object that was selected
*
*    @param {string} chosen_cat.category - The name of the category that was selected
*
*    @param {number} chosen_cat.catId - The ID of the category that was selected
*
*    @returns {JSX.Element} - The JSX element with the item options
*/
export default function ItemOptions({chosen_cat}) {

    var Items = [];

    const Item = {
        "item_number":-1,
        "item_name":"No Burger",
        "price":9.99,
        "category":"Burger",
        "ingredients":["none"]
    };

    Items.push(Item);

    const [items, setItems] = useState(Items)

    function getCatsItems() {
        fetch("http://revgrill-app.onrender.com/get_menu/get_menu")
        .then(response => response.text())
        .then(result => {
            setItems(JSON.parse(result));
        })
        .catch(error => {
            setItems(Items);
        });
    }

    // fetch the information for the item given the number
    useEffect(() => {
        getCatsItems()
    }, []);

    function getItemPic(item) {
        return ;
    }

    const Item_Tile = item => 
        `<div id="item_tile">
            <div style="margin-left:15px;">
                <img id="item_img" src=${itemImages[item.item_number]} alt=${item.item_name}></img>
                <p>$${item.price}</p>
            </div>
            <div id="item_info">
                <h3>${item.item_name}</h3>
                <p>${item.ingredients}</p>
            </div>  
        </div>`
    ;

    const mappedItems = { __html: items.filter((item) => item.category === chosen_cat).map(item => Item_Tile(item)).join('') };


    return (
        <div>
            <h2 style={{marginLeft:'30px'}}>Items in Category</h2>
            <h3 style={{marginLeft:'30px', lineHeight:'10px'}}>Displaying options for: {chosen_cat}</h3>
            <div>
                <div id="item_OptionBox" dangerouslySetInnerHTML={ mappedItems }></div>
            </div>
        </div>
    );
}
