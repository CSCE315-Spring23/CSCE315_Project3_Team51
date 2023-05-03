import React, { Component } from 'react';
import './style.css';
import burgerPic from './../../assets/categories/cat_burgers.png';
import dessertPic from './../../assets/categories/cat_dessert.png';
import drinkPic from './../../assets/categories/cat_drink.png';
import sandwichPic from './../../assets/categories/cat_sandwich.png';
import shakePic from './../../assets/categories/cat_shake.png';
import sidesPic from './../../assets/categories/cat_sides.png';
import tendersPic from './../../assets/categories/cat_tenders.png';
import { useNavigate } from 'react-router-dom';

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

export default class Menu extends Component {
    constructor() {super(); this.goMenu = this.goMenu.bind(this);}

    state = {
      isLoading: true,
      menuItems: [],
      error: null
    };
  
    fetchMenuItems = () => {
      this.setState({
        isLoading: true,
        error: null
      });
  
      fetch("http://revgrill-app.onrender.com/get_menu/get_menu")
        .then(response => response.json())
        .then(result => {
          this.setState({
            isLoading: false,
            menuItems: result[0]
          });
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error: error
          });
        });
    }

    componentDidMount() {
        this.fetchMenuItems();
    }

    goMenu = () => {
      const navigate = useNavigate();
      navigate('/menu_side/menu');
    };

    render() {
        const { isLoading, menuItems, error } = this.state;
        const Burgers = menuItems.filter((menuItem) => menuItem.category === 'Burger');
        const Sandwiches = menuItems.filter((menuItem) => menuItem.category === 'Sandwich');
        const Sides = menuItems.filter((menuItem) => menuItem.category === 'Sides');
        const Desserts = menuItems.filter((menuItem) => menuItem.category === "Dessert");
        const Shakes = menuItems.filter((menuItem) => menuItem.category === "Shake");
        const Tenders = menuItems.filter((menuItem) => menuItem.category === 'Tenders');
        const Combos = menuItems.filter((menuItem) => menuItem.category === 'Combo');

        const Featured = menuItems.filter((menuItem) => menuItem.item_name === 'Rev\'s Burger Entree');
        
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div className = 'body'>
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
                                    <img src= {buildImage(menuItem.category)} alt={menuItem.name}/>
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
                                    <img src= {burgerPic} alt="burger"/>
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
                                    <img src={sandwichPic} alt="sandwich"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            {Tenders.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {tendersPic} alt="tenders"/>
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
                                    <img src= {dessertPic} alt="dessert"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>

                        </div>
                    </div>
                    
                </div>
                              
            </div>
            
            {/* FOR ROUTING */}
            <div className = 'navigate'> 
                <button onClick={this.goMenu}> Go Back </button>
            </div>
        
        </div>

        // <div>
        //     {Desserts.map((menuItem, index) => (
        //     <div key={index}>
        //         <p>Item Number: {menuItem.item_number}</p>
        //         <p>Item Name: {menuItem.item_name}</p>
        //         <p>Price: {menuItem.price}</p>
        //         <p>Category: {menuItem.category}</p>
        //         <p>Ingredients: {menuItem.ingredients}</p>
        //         <p>Description: {buildDescription(menuItem.category, menuItem.ingredients)}</p>
        //         <img src={buildImage(menuItem.category)} />
        //     </div>
        //     ))}
        // </div>
        );
    }
}