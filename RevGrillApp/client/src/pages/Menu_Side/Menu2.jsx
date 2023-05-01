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
                        {Featured.map((menuItem) => (
                                <div className = 'larger-card special'>
                                    <div className = 'title'> {menuItem.item_name} </div>
                                    <img src= {buildImage(menuItem.category)} alt={menuItem.name}/>
                                    <div className = 'text'> {buildDescription(menuItem.category, menuItem.ingredients)} </div>
                                    <div className = 'text bold larger'> Try our best-selling menu item! </div>
                                </div>
                        ))}
        
                        <div className = 'menu-list'> 
                            <div className = 'title'> Handcrafted Shakes </div>
                            {Shakes.map((menuItem, index) => (
                                <ul key={index}>
                                    <li> <div className = 'bold'> {menuItem.item_name} </div> {menuItem.price} </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    
                    <div className = 'right'>
                        <div className = 'grid'> 
                            <div className = 'title'> Burgers </div>
                            <div className = 'row'>
                            {Burgers.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_burgers.png" alt="burger"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>
                            
                            <div className = 'title'> Sandwiches </div>
                            <div className = 'row'>
                            {Sandwiches.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_sandwich.png" alt="sandwich"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>
                            
                            <div className = 'title'> Tenders </div>
                            <div className = 'row'>
                            {Tenders.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_tenders.png" alt="tenders"/>
                                    <div className = 'text bold'> {menuItem.price} </div>
                                    <div className = 'text'> {menuItem.item_name} </div>
                                </div>
                            ))}
                            </div>

                            <div className = 'title'> Sweets </div>
                            <div className = 'row'>
                            {Desserts.map((menuItem, index) => (
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src="./cat_dessert.png" alt="dessert"/>
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
                <button className = "button"> <a href="./menu2.html"> </a> </button>
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