import React from 'react';

export default function Cat_Tile(category_name) {

    // fetch the information for the item given the number

    return (
        <div className="cat_tile">
            <h1>{category_name}</h1>
            <img ref="cat_{category_name}.png"></img>
            
        </div>
    )
}