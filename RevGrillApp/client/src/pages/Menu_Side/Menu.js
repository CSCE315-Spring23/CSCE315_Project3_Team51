import React, { Component } from 'react';

export class Menu extends Component {

  render() {
    return(
        <div>
        <div class = 'page'> 
        <div class = 'header'>
            <div class = 'weather'> 
                <img src="./cat_burgers.png"> </img>
                <div class = 'stacked'> 
                    <p> 68 F </p>
                    <p> Sunny </p>
                </div>
            </div>
            <div class = 'welcome'> Welcome to Rev's! </div>
            <div class = 'date'> <em> April 2 2023 06:43 PM </em> </div>
        </div>
        <div class = 'body'>
            <div class = 'left'>
                <div class = 'title'> Combos </div>
                <div class = "small-divider"> </div>
                <div class = 'text bold'> Best Value Option! </div>
                <div class = 'text'> Upgrade your meal by adding your choice of a side and a drink! </div>
                <div class = 'grid'> 
                    <div class = 'row'>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #1</div>
                            <img src="./cat_burgers.png"> </img>
                            <div class = 'text bold'> $7.49 </div>
                            <div class = 'text'> Rev's Burger + side + drink </div>
                        </div>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #2 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $10.69 </div>
                            <div class = 'text'> Double stack burger + side + drink </div>
                        </div>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #3 </div>
                            <img src="./cat_burgers.png"  smaller-card> </img>
                            <div class = 'text bold'> $7.39 </div>
                            <div class = 'text'> Classic burger + side + drink </div>
                        </div>
                    </div>

                    <div class = 'row'>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #4 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $5.99 </div>
                            <div class = 'text'> Gig-em patty melt + side + drink </div>
                        </div>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #5 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $5.99 </div>
                            <div class = 'text'> 3 chicken fingers + side + drink </div>
                        </div>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #6 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $5.99 </div>
                            <div class = 'text'> 4 steak fingers + side + drink </div>
                        </div>
                    </div>

                    <div class = 'row'>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #7 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $5.99 </div>
                            <div class = 'text'> Spicy ranch chicken strip sandwich + side + drink </div>
                        </div>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #8 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $8.89 </div>
                            <div class = 'text'> Crispy bacon cheeseburger + side + drink </div>
                        </div>
                        <div class = ' smaller-card'> 
                            <div class = 'item-number'> #9 </div>
                            <img src="./cat_burgers.png"  > </img>
                            <div class = 'text bold'> $8.89 </div>
                            <div class = 'text'> Classic chicken strip sandwich + side + drink </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = 'right'> 
                <div class = 'larger-card special'> 
                    <div class = 'title'> Seasonal Item Name </div>
                    <img src="./cat_burgers.png"  > </img>
                    <div class = 'text bold'> $5.99 </div>
                    <div class = 'text'> Tasty /category/ with /ingredients list/ </div>
                    <div class = 'text bold larger'> Get it before it's gone! </div>
                </div>

                <div class = 'menu-list'> 
                    <div class = 'title'> Sides </div>
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

        <div class = 'navigate'> 
        <button class = "button"> <a href="./menu2.html" style="text-decoration: none"> next </a> </button>
        </div>

        </div>
    )
  }

}