import Options from './Options';
import {React, useState} from 'react';


export default function Server() {
  const [cartItems, setCartItems] = useState();

  return (
    <div style={{backgroundColor:"ghostwhite"}}>
      <Options category='Burger' cartItems={cartItems}/>
    </div>
  );
}