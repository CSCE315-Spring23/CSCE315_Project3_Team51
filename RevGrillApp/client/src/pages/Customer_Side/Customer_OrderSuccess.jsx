<<<<<<< HEAD
import './style_menu.css';

export default function Customer_OrderSuccess() {

  return(
    <div className = 'small-window'>
      <div className='title'> Thank you! </div>
      <div className='title black' style='font-size: 60px'> ORDER NO. </div>
      <div className='title black' style='font-size: 60px'> 3356 </div>
    
      <div className="text"> We'll call your number when it's ready. </div>
    
      <div className='no-thanks'> <button> Exit </button> </div>
    
    </div>
  
  )
  
=======
import React, { Component } from 'react';
import './style_menu.css';

export class Customer_OrderSuccess extends Component {

  render() {
    return(
      <div className = 'small-window'>
        <div className='title'> Thank you! </div>
        <div className='title black' style='font-size: 60px'> ORDER NO. </div>
        <div className='title black' style='font-size: 60px'> 3356 </div>
      
        <div className="text"> We'll call your number when it's ready. </div>
      
        <div className='no-thanks'> <button> Exit </button> </div>
      
      </div>
    
    )
  }

>>>>>>> auth
}
