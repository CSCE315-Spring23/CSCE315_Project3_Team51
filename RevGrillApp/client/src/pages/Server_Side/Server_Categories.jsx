import React from 'react';
import OrdersBar from './Orders_Bar';
import CatDisplay from './Cat_Display';
import CurrentOrder from './Current_Order';
import './server-side.css';
import prog0 from '../../assets/progress/prog0.png';
import prog1 from '../../assets/progress/prog1.png';
import prog2 from '../../assets/progress/prog2.png';
import prog3 from '../../assets/progress/prog3.png';
import ItemOptions from './Item_Options';


/**
  A component that displays server-side information and allows the user to select an item category.
  @author Casey @peicasey

  @returns The rendered component.
*/
export default function Server_Categories() {

  return(
    <div style={{backgroundColor:"white",}}>

        <div id="server_side">
          <OrdersBar></OrdersBar>
          <div className="RHS" style={{textAlign:'left',}}>

            <div style={{display:'block'}}>
              <h1 style={{marginLeft:'30px',}}>Start with an Item Category</h1>
              <div style={{display:'flex', justifyContent:'center', textAlign:'center',}}>
                <CatDisplay> hello </CatDisplay>
              </div>
              <div>
                <ItemOptions chosen_cat={'Burger'}/>
              </div>
              <div style={{ height: 20,}}></div> 
              <div>
                <CurrentOrder></CurrentOrder>
              </div>
            </div>

          </div>
        </div>

    </div>
  )

}