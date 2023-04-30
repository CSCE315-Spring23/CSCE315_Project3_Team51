import React, { Component } from 'react';
import './style.css';

export class Menu extends Component {

  render() {
    return(
    <div>

        <div className = 'page'> 
            <div className = 'header'>
                <div className = 'weather'> 
                    <img src="./cat_burgers.png" alt="menu item"/>
                    <div className = 'stacked'> 
                        <p> 68 F </p>
                        <p> Sunny </p>
                    </div>
                </div>
                <div className = 'welcome'> Welcome to Rev's! </div>
                <div className = 'date'> <em> April 2 2023 06:43 PM </em> </div>
            </div>
            <div className = 'body'>
                <div className = 'left'>
                    <div className = 'title'> Combos </div>
                    <div className = "small-divider"> </div>
                    <div className = 'text bold'> Best Value Option! </div>
                    <div className = 'text'> Upgrade your meal by adding your choice of a side and a drink! </div>
                    <div className = 'grid'> 
                        <div className = 'row'>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #1</div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $7.49 </div>
                                <div className = 'text'> Rev's Burger + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #2 </div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $10.69 </div>
                                <div className = 'text'> Double stack burger + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #3 </div>
                                <img src="./cat_burgers.png"  className='smaller-card' alt="menu item"/>
                                <div className = 'text bold'> $7.39 </div>
                                <div className = 'text'> classNameic burger + side + drink </div>
                            </div>
                        </div>
    
                        <div className = 'row'>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #4 </div>
                                <img src="./cat_burgers.png"  alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> Gig-em patty melt + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #5 </div>
                                <img src="./cat_burgers.png"  alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> 3 chicken fingers + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #6 </div>
                                <img src="./cat_burgers.png"  alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> 4 steak fingers + side + drink </div>
                            </div>
                        </div>
    
                        <div className = 'row'>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #7 </div>
                                <img src="./cat_burgers.png"  alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> Spicy ranch chicken strip sandwich + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #8 </div>
                                <img src="./cat_burgers.png"  alt="menu item"/>
                                <div className = 'text bold'> $8.89 </div>
                                <div className = 'text'> Crispy bacon cheeseburger + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #9 </div>
                                <img src="./cat_burgers.png"  alt="menu item"/>
                                <div className = 'text bold'> $8.89 </div>
                                <div className = 'text'> classNameic chicken strip sandwich + side + drink </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'right'> 
                    <div className = 'larger-card special'> 
                        <div className = 'title'> Seasonal Item Name </div>
                        <img src="./cat_burgers.png"  alt="menu item"/>
                        <div className = 'text bold'> $5.99 </div>
                        <div className = 'text'> Tasty /category/ with /ingredients list/ </div>
                        <div className = 'text bold larger'> Get it before it's gone! </div>
                    </div>
    
                    <div className = 'menu-list'> 
                        <div className = 'title'> Sides </div>
                        <ul> 
                            <li> seasoned fries </li>
                            <li> tator tots </li>
                            <li> onion rings </li>
                            <li> kettle chips </li>
                        </ul>
                    </div>
                </div>
            </div>
    
        </div>
    
        <div className = 'navigate'> 
            <button className = "button"> <a href="./menu2.html" style="text-decoration: none"> </a> </button>
        </div>
    </div>
    )
  }

}