/**
 * React Component that displays the restaurant's menu.
 * @module Menu_Side
 * @author Anna
 */
import React, { Component } from 'react';
import '../Customer_Side/style_menu.css';
import './style.css';
import burgerPic from './../../assets/categories/cat_burgers.png';
import dessertPic from './../../assets/categories/cat_dessert.png';
import drinkPic from './../../assets/categories/cat_drink.png';
import sandwichPic from './../../assets/categories/cat_sandwich.png';
import shakePic from './../../assets/categories/cat_shake.png';
import sidesPic from './../../assets/categories/cat_sides.png';
import tendersPic from './../../assets/categories/cat_tenders.png';
import logo from './logo.gif';
import itemImages from '../../assets/items/item_img';
import { useNavigate } from 'react-router-dom';


/**
 * Helper function that returns the item description.
 * @param {string} category - The category of the menu item.
 * @param {string[]} ingredients - The ingredients of the menu item.
 * @returns {string} The item description.
 * @author Anna
 */
function buildDescription(category, ingredients) {
  let description = '';
  switch (category) {
    case 'Burger':
      description += 'Juicy beef patty with';
      break;
    case 'Sandwich':
      description += 'Satisfying sandwich with';
      break;
    case 'Tenders':
      description += 'Crispy tenders with';
      break;
  }
  description += ` ${ingredients.join(', ')}.`;
  return description;
}

/**
 * Helper function that returns the image source of the menu item.
 * @param {string} category - The category of the menu item.
 * @returns {string} The image source.
 * @author Anna
 */
function buildImage(category) {
  let imageSrc = '';
  switch (category) {
    case 'Burger':
      imageSrc = burgerPic;
      break;
    case 'Sandwich':
      imageSrc = sandwichPic;
      break;
    case 'Tenders':
      imageSrc = tendersPic;
      break;
    default:
      imageSrc = sidesPic;
      break;
  }
  return imageSrc;
}

/**
 * A class that displays the restaurant's menu.
 * @author Anna
 */
export default class Menu extends Component {
    constructor(props) {
      super(props);
      this.goMenu2 = this.goMenu2.bind(this);
      // this.handleClick = this.handleClick.bind(this);
    }
    
    goMenu2() {
      this.props.navigate('/menu_side/menu2');
    }

    /**
     * The component's state.
     * @type {object}
     * @property {boolean} isLoading - Indicates if the component is currently loading.
     * @property {object[]} menuItems - The restaurant's menu items.
     * @property {object} error - The error that occurred during the component's lifecycle, if any.
     */
    state = {
      isLoading: true,
      menuItems: [],
      error: null,
      ispage1: true
    };

    /**
     * Fetches the restaurant's menu items from the server.
     */    
    fetchMenuItems = () => {
      this.setState({
        isLoading: true,
        error: null
      });
  
      fetch("https://csce-315-project-3-backend.onrender.com/server_side/get_menu")
        .then(response => response.json())
        .then(result => {
          this.setState({
            isLoading: false,
            menuItems: result
          });
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error: error
          });
        });
    }
    

    /**
     * Lifecycle method called after the component mounts.
     */
    componentDidMount() {
        this.fetchMenuItems();
    }

    handleClick = () => {
      this.setState({ispage1: true})
    }
    handleClick2 = () => {
      this.setState({ispage1: false})
    }
    /**
     * This method renders the component.
     * 
     * @returns {JSX.Element} - The JSX element to be rendered.
     */  
    render() {
        const { isLoading, menuItems, error } = this.state;
        const Combos = menuItems.filter((menuItem) => menuItem.category === 'Combo');
        const firstFiveCombos = Combos.slice(0, 5);
        const lastCombos = Combos.slice(5, Combos.length);

        const Burgers = menuItems.filter((menuItem) => menuItem.category === 'Burger');
        const Sandwiches = menuItems.filter((menuItem) => menuItem.category === 'Sandwich');
        const Desserts = menuItems.filter((menuItem) => menuItem.category === "Dessert");
        const Shakes = menuItems.filter((menuItem) => menuItem.category === "Shake");
        const Tenders = menuItems.filter((menuItem) => menuItem.category === 'Tenders');
        const Featured = menuItems.filter((menuItem) => menuItem.item_name === 'Rev\'s Burger Entree');

        const Sides = menuItems.filter((menuItem) => menuItem.category === 'Sides');
        const Seasonal = menuItems.filter((menuItem) => menuItem.item_name === 'Cappucino Shake');
        
        if (isLoading) {
          return (
            <div style={{backgroundColor:"ghostwhite", textAlign:'center',}}>
              <div style={{height:"10%",}}></div>
              <h1>Loading...</h1>
              <img style={{height:"40%", width:"40%"}} src= {logo} alt="Reveille flipping burgers"/>
            </div>
          );
        }

        if (error) {
            return (
              <div style={{backgroundColor:"ghostwhite", textAlign:'center',}}>
                <div style={{height:"10%",}}></div>
                <h1>Error: {error.message}</h1>
                <img style={{height:"40%", width:"40%"}} src= {logo} alt="Reveille flipping burgers"/>
              </div>
            );
        }

        return (
          <div className = 'body'> 
          {this.state.ispage1 ? 
            <div className = 'page'> 
                {/* <div className = 'header'>
                    <div className = 'weather'> 
                        <img src= {logo} alt="menu item"/>
                    </div>
                    <div className = 'welcome'> Welcome to Rev's! </div>
                    <button onClick={this.goMenu2}> Go Back </button>
                </div> */}

                <div className = 'body'>
                  <div style={{width:'5%',}}></div>
                    <div className = 'combos'>
                      {/* <div className = 'title'> Combos </div> */}
                      <div className = 'grid'> 
                          <div className = 'row'>
                          {firstFiveCombos.map((menuItem, index) => (
                              <div className = 'smaller-card' key={index}>
                                  <div className = 'item-number'> #{menuItem.item_number} </div>
                                  <img src= {itemImages[menuItem.item_number-1]} alt="burger"/>
                                  <div className = 'text bold'> {menuItem.price} </div>
                                  <div className = 'text'> {menuItem.item_name} + side + drink </div>
                              </div>
                          ))}
                          </div>
                          <div className = 'row'>
                          {lastCombos.map((menuItem, index) => (
                              <div className = 'smaller-card' key={index}>
                                  <div className = 'item-number'> #{menuItem.item_number} </div>
                                  <img src= {itemImages[menuItem.item_number - 1]} alt="burger"/>
                                  <div className = 'text bold'> {menuItem.price} </div>
                                  <div className = 'text'> {menuItem.item_name} + side + drink </div>
                              </div>
                          ))}
                          </div>
                          {/* <div className = 'text bold'> Best Value Option! </div>
                          <div className = 'text'> Upgrade your meal by adding your choice of a side and a drink! </div> */}
                      </div>
                    </div>
                    <div className = 'right'> 
                        {Seasonal.map((menuItem) => (
                          <div className = 'larger-card special'>
                              <div className = 'title'> {menuItem.item_name} </div>
                              <img src= {itemImages[menuItem.item_number-1]}/>
                              <div className = 'text'> Your morning pick-me-up and after-dinner dessert, all blended into one! </div>
                              <div>  ---- </div>
                              <div> </div>
                              <div className = 'text bold larger'> Get it before it's gone! </div>
                          </div>
                      ))}

                      <div className = 'menu-list'> 
                      <div className = 'title'> Sides </div>
                          {Sides.map((menuItem, index) => (
                              <ul key={index}>
                                  <li> <div className = 'bold'> {menuItem.item_name} </div> {menuItem.price} </li>
                              </ul>
                          ))}
                      </div>
                    
                    </div>
                  {/* <div style={{width:'5%',}}></div> */}
                </div>    
                <div className = 'navigate'> 
                  <button onClick = {this.handleClick2} > </button>
                </div>
            </div>
          :
            <div className = 'page'> 
                {/* <div className = 'header'>
                    <div className = 'weather'> 
                        <img src= {burgerPic} alt="menu item"/>
                        <div className = 'stacked'> 
                            <p> 68 F </p>
                            <p> Sunny </p>
                        </div>
                    </div>
                    <div className = 'welcome'> Welcome to Rev's! </div>
                </div> */}
        
                <div className = 'body'>
                    <div className = 'left'> 
                        {Featured.map((menuItem) => (
                                <div className = 'larger-card special'>
                                    <div className = 'title'> {menuItem.item_name} </div>
                                    <img src= {itemImages[menuItem.item_number-1]} alt={menuItem.name}/>
                                    <div className = 'text'> {buildDescription(menuItem.category, menuItem.ingredients)} </div>
                                    <div className = 'text bold larger'> Try our best-selling menu item! </div>
                                </div>
                        ))}
        
                        <div className = 'menu-list'> 
                            <div className = 'title'> Milkshakes </div>
                            {Shakes.map((menuItem, index) => (
                                <ul key={index}>
                                    <li> <div className = 'bold'> {menuItem.item_name} </div> {menuItem.price} </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    
                    <div className = 'right'>
                        <div className = 'grid'> 
                            {/* <div className = 'title'> Burgers </div> */}
                            <div className = 'row'>
                            {Burgers.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {itemImages[menuItem.item_number-1]} alt="burger"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>
                            
                            {/* <div className = 'title'> Sandwiches </div> */}
                            <div className = 'row'>
                            {Sandwiches.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src={itemImages[menuItem.item_number-1]} alt="sandwich"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            {Tenders.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {itemImages[menuItem.item_number-1]} alt="tenders"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>

                            {/* <div className = 'title'> Sweets </div> */}
                            <div className = 'row'>
                            {Desserts.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {itemImages[menuItem.item_number-1]} alt="dessert"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>

                        </div>
                    </div>
                    
                </div>
                {/* FOR ROUTING */}
                <div className = 'navigate'> 
                    <button onClick = {this.handleClick} > </button>
                </div>
                              
            </div>
          }
          </div>
        );
    }
}