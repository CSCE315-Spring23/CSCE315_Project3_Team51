import React, { Component } from 'react';
import './style_menu.css';
import burgerPic from './../../assets/categories/cat_burgers.png';
import dessertPic from './../../assets/categories/cat_dessert.png';
import drinkPic from './../../assets/categories/cat_drink.png';
import sandwichPic from './../../assets/categories/cat_sandwich.png';
import shakePic from './../../assets/categories/cat_shake.png';
import sidesPic from './../../assets/categories/cat_sides.png';
import tendersPic from './../../assets/categories/cat_tenders.png';
import AddItem from './shoppingCart.jsx'
import removeItem from './shoppingCart.jsx'

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

    // Convert ingredients to an array if it's a string
    if (typeof ingredients === 'string') {
        ingredients = ingredients.split(', ');
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
      case 'Combo':
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


export default class Options extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
            menuItems: [],
            error: null,
            category: props.category,
            Item: {
                item_name: 'Example Item',
                category: 'example',
                price: '$10.00',
                ingredients: 'Example ingredients'
            }
        };
    }
  
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

    addItem = item => {
        // Add the selected item to the cart
        console.log(`Added item: ${item.item_name}`);
    };
    
    removeItem = item => {
        // Remove the selected item from the cart
        console.log(`Removed item: ${item.item_name}`);
    };
    
    componentDidMount() {
        this.fetchMenuItems();
    }
  
    handleItemClick = (item) => {
        this.setState({ Item: item });
    }
      
    render() {
        const category = this.state.category;
        const { isLoading, menuItems, error } = this.state;
        const Items = menuItems.filter((menuItem) => menuItem.category === this.state.category);
        const firstTwoItems = Items.slice(0, 3);
        const secondTwoItems = Items.slice(3, 6);
        const lastItems = Items.slice(6, Items.size);

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (this.state.Item.item_name === "Example Item") {
            this.setState({ Item: Items[0] });
        }

        return (
            <div>
            <div className = 'body'>
            <div className="left"> 
                <div className = 'larger-card special'> 
                    <div className = 'title'> {this.state.Item.item_name} </div>
                    <img src={buildImage(this.state.Item.category)} alt={this.state.Item.item_name} />
                    <div className = 'text bold'> {this.state.Item.price} </div>
                    <div className = 'text'> {buildDescription(this.state.Item.category, this.state.Item.ingredients)} </div>
                    <button> Add to Order </button>
                </div>
            </div>
            <div className = "right"> 
                <div className = 'grid'> 
                    <div className = 'row'>  
                            {firstTwoItems.map((menuItem, index) => (
                                <div className = 'column'> 
                                    <div className = 'smaller-card' key={index}>
                                        <div className = 'item-number'> #{menuItem.item_number} </div>
                                        <img src= {buildImage({category})} alt={category} onClick={() => this.handleItemClick(menuItem)}/>
                                        <div className = 'text bold'> {menuItem.price} </div>
                                        <div className = 'text'> {menuItem.item_name} </div>
                                    </div>
                                    <div className="edit-button"> 
                                        <button onClick={() => this.addItem(selectedItem)}> + </button>
                                        <button onClick={() => this.removeItem(selectedItem)}> - </button>
                                    </div>
                                </div>
                            ))}                      
                    </div>
                    <div className = 'row'>  
                            {secondTwoItems.map((menuItem, index) => (
                                <div className = 'column'> 
                                    <div className = 'smaller-card' key={index}>
                                        <div className = 'item-number'> #{menuItem.item_number} </div>
                                        <img src= {buildImage({category})} alt={category} onClick={() => this.handleItemClick(menuItem)}/>
                                        <div className = 'text bold'> {menuItem.price} </div>
                                        <div className = 'text'> {menuItem.item_name} </div>
                                    </div>
                                    <div className="edit-button"> 
                                        <button onClick={() => this.addItem(selectedItem)}> + </button>
                                        <button onClick={() => this.removeItem(selectedItem)}> - </button>
                                    </div>
                                </div>
                            ))}                      
                    </div> 
                    {lastItems.size != 0 ? 
                    <div className = 'row'>  
                        {lastItems.map((menuItem, index) => (
                            <div className = 'column'> 
                                <div className = 'smaller-card' key={index}>
                                    <div className = 'item-number'> #{menuItem.item_number} </div>
                                    <img src= {buildImage({category})} alt={category} onClick={() => this.handleItemClick(menuItem)}/>
                                    <button onClick={() => this.addItem(selectedItem)}> + </button>
                                    <button onClick={() => this.removeItem(selectedItem)}> - </button>
                                </div>
                                <div className="edit-button"> 
                                    <button> + </button>
                                    <button> - </button>
                                </div>
                            </div>
                        ))}                      
                    </div> : <div> </div>
                    }
                </div>
            </div>
            </div>
            <button> go back</button>
            </div>
        );
    }
}