import React, { Component } from 'react';
import './style.css';

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
        imageSrc = './cat_burgers.png';
        break;
      case 'Sandwich':
        imageSrc = './cat_sandwich.png';
        break;
      case 'Tenders':
        imageSrc = './cat_tenders.png';
        break;
      default:
        imageSrc = './cat_sides.png';
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
  
      fetch("http://localhost:9000/get_menu/get_menu")
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
        const firstThreeCombos = Combos.slice(0, 3);
        const secondThreeCombos = Combos.slice(4, 7);
        const lastThreeCombos = Combos.slice(Math.max(Combos.length - 3, 0));

        const Sides = menuItems.filter((menuItem) => menuItem.category === 'Sides');
        const Featured = menuItems.filter((menuItem) => menuItem.item_name === 'Shrimp Cookie');
        
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
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
                            {firstThreeCombos.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_burgers.png" alt="burger"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} + side + drink </div>
                                </div>
                            ))}
                            </div>

                            <div className = 'row'>
                            {secondThreeCombos.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_burgers.png" alt="burger"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} + side + drink </div>
                                </div>
                            ))}
                            </div>

                            <div className = 'row'>
                            {lastThreeCombos.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_burgers.png" alt="burger"/>
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