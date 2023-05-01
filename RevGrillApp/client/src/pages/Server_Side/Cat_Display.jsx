import React from 'react';
import './server-side.css';
import burgerPic from './../../assets/categories/cat_burgers.png';
import dessertPic from './../../assets/categories/cat_dessert.png';
import drinkPic from './../../assets/categories/cat_drink.png';
import sandwichPic from './../../assets/categories/cat_sandwich.png';
import shakePic from './../../assets/categories/cat_shake.png';
import sidesPic from './../../assets/categories/cat_sides.png';
import tendersPic from './../../assets/categories/cat_tenders.png';


const CATEGORIES = [{
    "name": "Burgers",
    "nameLower": "burgers",
    "pic": burgerPic,
    "alt": "picture of burger",
},
{
    "name": "Dessert",
    "nameLower": "dessert",
    "pic": dessertPic,
    "alt": "picture of dessert",
},
{
    "name": "Drink",
    "nameLower": "drink",
    "pic": drinkPic,
    "alt": "picture of drink",
},
{
    "name": "Sandwich",
    "nameLower": "sandwich",
    "pic": sandwichPic,
    "alt": "picture of sandwhich",
},
{
    "name": "Shake",
    "nameLower": "shake",
    "pic": shakePic,
    "alt": "picture of shake",
},
{
    "name": "Sides",
    "nameLower": "sides",
    "pic": sidesPic,
    "alt": "picture of sides",
},
{
    "name": "Tenders",
    "nameLower": "tenders",
    "pic": tendersPic,
    "alt": "picture of tenders",
},];

const Cat_Tile = category => 
    `<div id="category_tile">
        <h3>${category.name}</h3>
        <img src=${category.pic} alt=${category.alt}
            id='cat_img'
        />
    </div>`
;

export default function CatDisplay() {

    const mappedCategories =  { __html: CATEGORIES.map(item => Cat_Tile(item)).join('') };

    return (
        <div>
            <div id="cat_display" dangerouslySetInnerHTML={ mappedCategories }></div>
            
        </div>
        
    )
}
