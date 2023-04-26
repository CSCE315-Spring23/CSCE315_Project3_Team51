import React, { Component } from 'react';
import "style_menu.css";

export class Customer_Options extends Component {

  render() {
    return(
        <div class = 'body'>
        <div class="left"> 
            <div class = 'larger-card special'> 
                <div class = 'title'> Item Name </div>
                <img src="../Menu_Side/cat_burgers.png"> </img>
                <div class = 'text bold'> $5.99 </div>
                <div class = 'text'> Tasty /category/ with /ingredients list/ </div>
                <button> Add to Order </button>
            </div>
        </div>
        <div class = "right"> 
            <div class = 'grid'> 
                <div class = 'row'>
                    <div class = 'column'> 
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png"  > </img>
                            <div class = 'text bold'> $7.49 </div>
                            <div class = 'text'> Rev's Burger + side + drink </div>
                        </div>
                        <div class="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>

                    <div class = 'column'> 
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png"  > </img>
                            <div class = 'text bold'> $7.49 </div>
                            <div class = 'text'> Rev's Burger + side + drink </div>
                        </div>

                        <div class="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>
                </div>

                <div class = 'row'>
                    <div class = 'column'> 
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png" > </img>
                            <div class = 'text bold'> $7.49 </div>
                            <div class = 'text'> Rev's Burger + side + drink </div>
                        </div>
                        <div class="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>
                    
                    <div class = 'column'> 
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png"  > </img>
                            <div class = 'text bold'> $7.49 </div>
                            <div class = 'text'> Rev's Burger + side + drink </div>
                        </div>

                        <div class="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )

}
}