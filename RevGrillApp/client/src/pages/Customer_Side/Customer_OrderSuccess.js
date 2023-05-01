import React, { Component } from 'react';
import "style_menu.css";

export class Customer_Success extends Component {

  render() {
    return(
        <div class = 'small-window'>
        <div class='title'> Sorry, </div>
        <div class='title black' style='font-size: 60px'> Order </div>
        <div class='title black' style='font-size: 60px'> Cancelled </div>

        <div class="text"> See you next time. </div>

        <div class='no-thanks'> <button> Exit </button> </div>

        </div>
    )

}
}