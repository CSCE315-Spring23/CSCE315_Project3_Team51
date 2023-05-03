import React, { Component } from 'react';
import './style.css';
import burgerPic from './../../assets/categories/cat_burgers.png';
import dessertPic from './../../assets/categories/cat_dessert.png';
import drinkPic from './../../assets/categories/cat_drink.png';
import sandwichPic from './../../assets/categories/cat_sandwich.png';
import shakePic from './../../assets/categories/cat_shake.png';
import sidesPic from './../../assets/categories/cat_sides.png';
import tendersPic from './../../assets/categories/cat_tenders.png';
import logo from './logo.gif';

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

    componentDidMount() {
        this.fetchMenuItems();
    }
  
    render() {
        const { isLoading, menuItems, error } = this.state;
        const Combos = menuItems.filter((menuItem) => menuItem.category === 'Combo');
        const firstFiveCombos = Combos.slice(0, 5);
        const lastCombos = Combos.slice(5, Combos.length);

        const Sides = menuItems.filter((menuItem) => menuItem.category === 'Sides');
        const Featured = menuItems.filter((menuItem) => menuItem.item_name === 'Shrimp Cookie');
        
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
          <div className = 'body'> 
            <div className = 'page'> 
                <div className = 'header'>
                    <div className = 'weather'> 
                        <img src= {logo} alt="menu item"/>
                    </div>
                    <div className = 'welcome'> Welcome to Rev's! </div>
                </div>

                <div className = 'main'>
                    <div className = 'left'>
                        <div className = 'title'> Combos </div>
                        <div className = "small-divider"> </div>
                        <div className = 'text bold'> Best Value Option! </div>
                        <div className = 'text'> Upgrade your meal by adding your choice of a side and a drink! </div>
                        <div className = 'grid'> 
                            <div className = 'row'>
                            {firstFiveCombos.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {burgerPic} alt="burger"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} + side + drink </div>
                                </div>
                            ))}
                            </div>

                            <div className = 'row'>
                            {lastCombos.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {burgerPic} alt="burger"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} + side + drink </div>
                                </div>
                            ))}
                            </div>
        

                        </div>
                    </div>
                    <div className = 'right'> 
                        {Featured.map((menuItem) => (
                            <div className = 'larger-card special'>
                                <div className = 'title'> {menuItem.item_name} </div>
                                <img src= {buildImage(menuItem.category)} alt={menuItem.name}/>
                                <div className = 'text'> {buildDescription(menuItem.category, menuItem.ingredients)} </div>
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
                </div>
    
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