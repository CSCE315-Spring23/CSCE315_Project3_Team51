import React, { Component } from 'react';
import { MenuList } from './menu_tile.jsx';
import { SimpleMenuList } from './menu_tile.jsx';
import { FeaturedMenuItem } from './menu_tile.jsx';
import './style.css';

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
                    <div> <FeaturedMenuItem category="Burgers" /> </div>
    
                    <div className = 'menu-list' style = 'width: 350px'> 
                        <SimpleMenuList category='desserts' />
                    </div>
                </div>
                
                <div className = 'right'>
                    <div className = 'grid'> 
                        <div className = 'title'> Burgers </div>
                        <div className = 'row'>
                            <MenuList category="Burgers" />
                        </div>
                        
                        <div className = 'title'> Sandwiches </div>
                        <div className = 'row'>
                            <MenuList category="Sandwiches" />
                        </div>
                        
                        <div className = 'title'> Tenders </div>
                        <div className = 'row'>
                            <MenuList category="Tenders" />
                        </div>
                    </div>
                </div>
                
            </div>
    
        </div>
    
        <div className = 'navigate'> 
            <button className = "button"> <a href="./menu2.html" style="text-decoration: none"> </a> </button> // ROUTING: NAVIGATE TO MENU1 ON CLICK
        </div>
    
    </div>
    )
  }

}