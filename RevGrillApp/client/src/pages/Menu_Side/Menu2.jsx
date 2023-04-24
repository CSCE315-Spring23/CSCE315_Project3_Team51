import React, { Component } from 'react';

export class Menu2 extends Component {

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
                    <div className = 'larger-card special'> 
                        <div className = 'title'> Featured Item Name </div>
                        <img src="./cat_burgers.png" alt="menu item"/>
                        <div className = 'text bold'> $5.99 </div>
                        <div className = 'text'> Tasty /category/ with /ingredients_list/ </div>
                        <div className = 'text bold larger'> Try our best-selling menu item! </div>
                    </div>
    
                    <div className = 'menu-list' style = 'width: 350px'> 
                        <div className = 'title'> Sweet Treats </div>
                        <ul> 
                            <li> cookie </li>
                            <li> vanilla shake </li>
                            <li> chocolate shake </li>
                            <li> strawberry shake </li>
                            <li> cappuccino shake </li>
                            <li> ice cream </li>
                        </ul>
                    </div>
                </div>
                
                <div className = 'right'>
                    <div className = 'grid'> 
                        <div className = 'title'> Burgers </div>
                        <div className = 'row'>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #1</div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $7.49 </div>
                                <div className = 'text'> Rev's Burger + side + drink </div>
                            </div>
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
                        
                        <div className = 'title'> Sandwiches </div>
                        <div className = 'row'>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #4 </div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> Gig-em patty melt + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #5 </div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> 3 chicken fingers + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #6 </div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> 4 steak fingers + side + drink </div>
                            </div>
                        </div>
                        
                        <div className = 'title'> Tenders </div>
                        <div className = 'row'>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #7 </div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $5.99 </div>
                                <div className = 'text'> Spicy ranch chicken strip sandwich + side + drink </div>
                            </div>
                            <div className = ' smaller-card'> 
                                <div className = 'item-number'> #8 </div>
                                <img src="./cat_burgers.png" alt="menu item"/>
                                <div className = 'text bold'> $8.89 </div>
                                <div className = 'text'> Crispy bacon cheeseburger + side + drink </div>
                            </div>
                            <div className = 'menu-list'> 
                                <div className = 'text'> Want to upgrade your meal? </div> 
                                <div className = 'text bold' style = 'font-size: 30px; text-align: center'> Make it a combo! </div> 
                            </div>
                        </div>
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