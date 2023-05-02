import React from 'react';
import CatDisplay from '../Server_Side/Cat_Display';
import CurrentOrder from '../Server_Side/Current_Order';
import './server-side.css';
import prog0 from '../../assets/progress/prog0.png';
import prog1 from '../../assets/progress/prog1.png';
import prog2 from '../../assets/progress/prog2.png';
import prog3 from '../../assets/progress/prog3.png';
// import { WrapAroundEnding } from 'three';


export default function Customer_Categories() {

  return(
    <div>
    <body>
        <header>
          <a style={{ margin: 20, }} className="nav-link link-home" href="">Rev's Grill</a>
          <div className="progress_bar" style={{ margin: 20, }}>
            <div> ADDING ITEMS </div>
            <div style={{ width: 20, }}></div>    
            <img style={{ maxHeight: 50, }} src={prog2} alt="progress 0" />  
            <div style={{ width: 20, }}></div> 
          </div>
          
        </header>
        <div style={{ height: 80, }}> filling behind the header</div>
        
        <div id="server_side">
          <div className="RHS">
            <h1>Start with an Item Category</h1>
            <div style={{display:'flex', justifyContent:'center'}}>
              <CatDisplay> hello </CatDisplay>
            </div>
            <div style={{ height: 20,}}></div> 
            <div>
              <CurrentOrder></CurrentOrder>
            </div>
            
            
          </div>
        </div>
        
    </body>
    
    <footer>
        Made with 🤍 by CSCE 315 Team 51
    </footer>
    </div>
  )

}