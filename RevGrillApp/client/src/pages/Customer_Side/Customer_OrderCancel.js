import React, { Component } from 'react';

export class Customer_OrderCancel extends Component {

  render() {
    return(
        <div class = 'small-window'>
        <div class='title'> Thank you! </div>
        <div class='title black' style='font-size: 60px'> ORDER NO. </div>
        <div class='title black' style='font-size: 60px'> 3356 </div>
      
        <div class="text"> We'll call your number when it's ready. </div>
      
        <div class='no-thanks'> <button> Exit </button> </div>
      
      </div>
    )

}
}