import Options from './Options';
import {React, useState} from 'react';

/**
* loads customer side with necessary state values
* @module Customer_Side
* @author Anna Brooks
*/
export default function Customer() {
  const [cartItems, setCartItems] = useState();

  return (
    <div>
      <Options category='Burger' cartItems={cartItems}/>
    </div>
  );
}