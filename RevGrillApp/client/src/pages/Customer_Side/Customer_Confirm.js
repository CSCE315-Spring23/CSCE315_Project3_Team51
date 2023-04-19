import React, { Component } from 'react';

export class Customer_Categories extends Component {

  render() {
    return(
        <div class = 'small-window'>
        <div class='text bold'> Are you sure you're ready to submit? </div>
        <div class='text'> Once submitted, changes can no longer be made to orders. </div>
        <button> Yes, I'm sure </button>
        <div class='no-thanks'> <button> Return to Order </button> </div>
        </div>
    )
  }
}
