<<<<<<< HEAD
import './style_menu.css';

export default function Customer_Confirm() {

  return(
    <div>
    <div className = 'small-window'>
    <div className='text bold'> Are you sure you're ready to submit? </div>
    <div className='text'> Once submitted, changes can no longer be made to orders. </div>
  
    <button> Yes, I'm sure </button>
    <div className='no-thanks'> <button> Return to Order </button> </div>
  
    </div>
  
  </div>
  
  )
=======
import React, { Component } from 'react';
import './style_menu.css';

export class Customer_Confirm extends Component {

  render() {
    return(
      <div>
      <div className = 'small-window'>
      <div className='text bold'> Are you sure you're ready to submit? </div>
      <div className='text'> Once submitted, changes can no longer be made to orders. </div>
    
      <button> Yes, I'm sure </button>
      <div className='no-thanks'> <button> Return to Order </button> </div>
    
      </div>
    
    </div>
    
    )
  }
>>>>>>> auth

}
