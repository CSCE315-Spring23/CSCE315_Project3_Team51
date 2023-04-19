import React, { Component } from 'react';
import "style_menu.css";

export class Customer_Upgrade extends Component {

  render() {
    return(
        <div class = 'upgrade'> 
            <div class = 'title'> Want to upgrade your order today? </div>

            <div class = 'grid'> 
                <div class = 'row'>
                    <div class = 'column-wide'> 
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png"> </img>
                            <div class = 'text bold'> $7.49 </div>
                            <div class = 'text'> Rev's Burger + side + drink </div>
                            <button> Add to Order </button>
                        </div>
                    </div>
                    <div class = 'column-wide'> 
                    <div class = ' smaller-card'> 
                        <div class = 'item-number'> #1</div>
                        <img src="../Menu_Side/cat_burgers.png"> </img>
                        <div class = 'text bold'> $7.49 </div>
                        <div class = 'text'> Rev's Burger + side + drink </div>
                        <button> Add to Order </button>
                    </div>
                </div>
                </div>
            </div>

            <div class = "no-thanks"> 
                <button> No thanks! </button>
            </div>
            
        </div>
    )

}
}