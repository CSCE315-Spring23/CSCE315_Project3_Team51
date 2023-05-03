import Options from './Options';
import {React, useState} from 'react';

/**
* loads customer side with necessary state values
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