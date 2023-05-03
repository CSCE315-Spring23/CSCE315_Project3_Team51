import React from 'react';
import { useEffect, useState } from 'react';

// this is literally the most stupid thing that i have ever done
// import i1 from '../../assets/items/i1.png';
// import i2 from '../../assets/items/i2.png';
// import i3 from '../../assets/items/i3.png';
// import i4 from '../../assets/items/i4.png';
// import i5 from '../../assets/items/i5.png';
// import i6 from '../../assets/items/i6.png';
// import i7 from '../../assets/items/i7.png';
// import i8 from '../../assets/items/i8.png';
// import i9 from '../../assets/items/i9.png';
// import i10 from '../../assets/items/i10.png';
// import i11 from '../../assets/items/i11.png';
// import i12 from '../../assets/items/i12.png';
// import i13 from '../../assets/items/i13.png';
// import i14 from '../../assets/items/i14.png';
// import i15 from '../../assets/items/i15.png';
// import i16 from '../../assets/items/i16.png';
// import i17 from '../../assets/items/i17.png';
// import i18 from '../../assets/items/i18.png';
// import i19 from '../../assets/items/i19.png';
// import i20 from '../../assets/items/i20.png';
// import i21 from '../../assets/items/i21.png';
// import i22 from '../../assets/items/i22.png';
// import i23 from '../../assets/items/i23.png';
// import i24 from '../../assets/items/i24.png';
// import i25 from '../../assets/items/i25.png';
// import i26 from '../../assets/items/i26.png';
// import i27 from '../../assets/items/i27.png';
// import i28 from '../../assets/items/i28.png';
// import i29 from '../../assets/items/i29.png';
// import i31 from '../../assets/items/i31.png';
// import i32 from '../../assets/items/i32.png';
// import inew from '../../assets/items/inew.png';

export default function Options() {

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
        fetch("http://localhost:9000/get_menu/get_menu")
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
            <h3>${item.item_name}</h3>
            <img src=i${item.item_number} alt=${item.item_name}></img>
            <p>$${item.price}</p>
            <p>${item.ingredients}</p>
        </div>`
    ;

    const mappedItems = { __html: items.map(item => Item_Tile(item)).join('') };

    return (
        <div>
            <h2 style={{marginLeft:'30px'}}>Items in Category</h2>
            <div id="item_OptionBox">
                Click an Item Category to see Available Items!
                <div dangerouslySetInnerHTML={ mappedItems }></div>
            </div>
        </div>
    );
}
