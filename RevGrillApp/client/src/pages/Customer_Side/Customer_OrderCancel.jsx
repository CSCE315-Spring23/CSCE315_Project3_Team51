import React, { Component } from 'react';
import './style_menu.css';

export class Customer_OrderCancel extends Component {

  render() {
    return(
      <div className = 'small-window'>
        <div className='title'> Sorry, </div>
        <div className='title black' style='font-size: 60px'> Order </div>
        <div className='title black' style='font-size: 60px'> Cancelled </div>
      
        <div className="text"> See you next time. </div>
      
        <div className='no-thanks'> <button> Exit </button> </div>
      
      </div>
    
    )
  }

}

