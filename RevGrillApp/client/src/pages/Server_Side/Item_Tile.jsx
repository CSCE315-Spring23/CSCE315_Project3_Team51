import React from 'react';

export default function Item_Tile(item_num) {

    // fetch the information for the item given the number

    return (
        <div className="item_tile">
            <h1>{item_name}</h1>
            <img ref="i{item_num}.png"></img>
            <p>{item_price}</p>
        </div>
    )
}