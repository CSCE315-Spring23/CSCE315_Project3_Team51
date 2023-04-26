import React, { Component } from 'react';
import './style_menu.css';

export class Customer_Options extends Component {

  render() {
    return (
    <div className = 'body'>
        <div className="left"> 
            <div className = 'larger-card special'> 
                <div className = 'title'> Item Name </div>
                <img src="../Menu_Side/cat_burgers.png" alt="menu item" />
                <div className = 'text bold'> $5.99 </div>
                <div className = 'text'> Tasty /category/ with /ingredients list/ </div>
                <button> Add to Order </button>
            </div>
        </div>
        <div className = "right"> 
            <div className = 'grid'> 
                <div className = 'row'>
                    <div className = 'column'> 
                        <div className = ' smaller-card'> 
                            <div className = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png" alt="menu item" />
                            <div className = 'text bold'> $7.49 </div>
                            <div className = 'text'> Rev's Burger + side + drink </div>
                        </div>
                        <div className="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>
    
                    <div className = 'column'> 
                        <div className = ' smaller-card'> 
                            <div className = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png" alt="menu item"  />
                            <div className = 'text bold'> $7.49 </div>
                            <div className = 'text'> Rev's Burger + side + drink </div>
                        </div>
    
                        <div className="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>
                </div>
    
                <div className = 'row'>
                    <div className = 'column'> 
                        <div className = ' smaller-card'> 
                            <div className = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png" alt="menu item" />
                            <div className = 'text bold'> $7.49 </div>
                            <div className = 'text'> Rev's Burger + side + drink </div>
                        </div>
                        <div className="edit-button"> 
                            <button> + </button>
                            <button> - </button>
                        </div>
                    </div>
                    
                    <div className = 'column'> 
                        <div className = ' smaller-card'> 
                            <div className = 'item-number'> #1</div>
                            <img src="../Menu_Side/cat_burgers.png" alt="picture of burger" />
                            <div className = 'text bold'> $7.49 </div>
                            <div className = 'text'> Rev's Burger + side + drink </div>
                        </div>
    
                        <div className="edit-button"> 
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

