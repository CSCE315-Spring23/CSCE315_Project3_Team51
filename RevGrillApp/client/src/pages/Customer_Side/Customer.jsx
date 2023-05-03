import Options from './Options';
import {React, useState} from 'react';

export default function Customer() {
  const [cartItems, setCartItems] = useState();

  return (
    <div>
      <Options category='Burger' cartItems={cartItems}/>
    </div>
  );
}