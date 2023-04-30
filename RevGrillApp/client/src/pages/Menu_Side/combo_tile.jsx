import React, { Component } from 'react';
import './style.css';

export class MenuTile extends Component {

    render() {
        return(
        <div>                          
        <div className = 'item-number'> #1</div>
        <img src="./cat_burgers.png" alt="menu item"/>
        <div className = 'text bold'> $7.49 </div>
        <div className = 'text'> Rev's Burger + side + drink </div>
        </div>
        )
    }
}