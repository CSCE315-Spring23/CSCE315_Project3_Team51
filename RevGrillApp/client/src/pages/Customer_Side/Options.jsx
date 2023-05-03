import React, { Component } from 'react';
import './style_menu.css';
import burgerPic from './../../assets/categories/cat_burgers.png';
import dessertPic from './../../assets/categories/cat_dessert.png';
import drinkPic from './../../assets/categories/cat_drink.png';
import sandwichPic from './../../assets/categories/cat_sandwich.png';
import shakePic from './../../assets/categories/cat_shake.png';
import sidesPic from './../../assets/categories/cat_sides.png';
import tendersPic from './../../assets/categories/cat_tenders.png';
import logo from '../Menu_Side/logo.gif';
import Customer_Confirm from './Customer_Confirm';

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
            },
            cartItems: [],
            selectedItem:  {
                item_name: 'Example Item',
                category: 'example',
                price: '$10.00',
                ingredients: 'Example ingredients'
            },
            isReadytoSubmit: false,
            orderNum: 0,
            orderPlaced: false
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
    placeOrder = (items, price) => {
        let requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemsOrdered: items.map(i => parseInt(i.item_number)), totalPrice: price})
        };
        const url = 'http://localhost:9000/server_side/create_order';
            
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({ 
            orderNum: result, 
        });
        });
    }
    
    componentDidMount() {
        this.fetchMenuItems();
    }
  
    handleItemClick = (item) => {
        this.setState({ selectedItem: item });
    }

    handleAddItem = (item) => {
        const currentCartItems = this.state.cartItems;
        this.setState({Item: item, cartItems: [...currentCartItems, item]});
    }

    removeItem = (index, item) => {
        if (this.state.cartItems.includes(item)) {
            const currentCartItems = this.state.cartItems;
            const updatedCartItems = [...currentCartItems];
            updatedCartItems.splice(index, 1);
            this.setState({cartItems: updatedCartItems});
        }
    }

    getTotalPrice = (cartItems) => {
        let total = 0;
        {cartItems.map(item => (total += item.price))}
        return total.toFixed(2);
    }

    handleNav = (cat) => {this.setState({category: cat})}

    handleOrder = (cart) => {
        if (this.state.isReadytoSubmit == false)
            this.setState({isReadytoSubmit: true});
        else {
            this.placeOrder(cart, this.getTotalPrice(cart));
            this.setState({isReadytoSubmit: false, orderPlaced: true, cartItems: []})
        }
    }

    handleReturn = () => {this.setState({orderPlaced: false})};

    handleCancel = () => {this.setState({isReadytoSubmit: false});}
      
    render() {
        const category = this.state.category;
        const { isLoading, menuItems, error } = this.state;
        const Items = menuItems.filter((menuItem) => menuItem.category === this.state.category);
        const firstTwoItems = Items.slice(0, 3);
        const secondTwoItems = Items.slice(3, 6);
        const lastItems = Items.slice(6);
        const Categories = ['Burger', 'Sandwich', 'Combo', 'Tenders', 'Sides', 'Dessert', 'Shake'];
        const cartItems = this.state.cartItems;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (this.state.selectedItem.item_name === "Example Item") {
            this.setState({ selectedItem: Items[0] });
        }
        if (this.state.Item.item_name === "Example Item") {
            this.setState({ Item: Items[0] });
        }

        return (
            <div>
                <div class = 'welcome'> 
                    <img src = {logo} />
                    Welcome to Rev's! 
                </div>
                <div class = 'navbar'>
                <div className = 'row'> 
                    {Categories.map(category => (
                        <div className = 'smaller-card'>
                        <img key={category} onClick={() => this.handleNav(category)} src={buildImage(category)} alt={category} />
                        <div className = 'text'> {category} </div>   
                        </div> 
                    ))}
                </div>
                </div>
            <div className = 'body'>
                <div className = 'bar'>
                    <div className = 'shoppingCart'> 
                            <ul>
                                {this.state.cartItems.map((menuItem, index) => (
                                    <li key={index}>
                                        {menuItem.item_name} - ${menuItem.price}
                                        <button onClick={() => this.removeItem(index, menuItem)}> - </button>
                                    </li>
                                ))}  
                            </ul>
                    </div>
                    
                    {this.state.isReadytoSubmit === false ? 
                        <div>
                        <div className = 'total'>  Total: ${this.getTotalPrice(this.state.cartItems)} </div>
                        <button onClick={() => this.handleOrder(this.state.cartItems)}> Submit </button>
                        </div>
                        :
                        <div>
                        <div className = 'total'>  Are you sure you're ready to submit? </div>
                            <button onClick={() => this.handleOrder(this.state.cartItems)}> Yes </button>
                            <button onClick={this.handleCancel}> No </button>
                        </div>
                    }

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
                                        <button onClick={() => { this.handleAddItem(menuItem) }}> + </button>
                                        <button onClick={() => this.removeItem(this.state.Item, menuItem)}> - </button>
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
                                        <button onClick={() => { this.handleAddItem(menuItem) }}> + </button>
                                        <button onClick={() => this.removeItem(this.state.Item, menuItem)}> - </button>
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
                                </div>
                                <div className="edit-button"> 
                                    <button onClick={() => { this.handleAddItem(menuItem) }}> + </button>
                                    <button onClick={() => this.removeItem(this.state.Item, menuItem)}> - </button>
                                </div>
                            </div>
                        ))}                      
                    </div> : <div> </div>
                    }
                </div>
            </div>
            <div className="left"> 
                    {this.state.orderPlaced == true ? 
                        <div className = 'larger-card special'> 
                            <div className='title'> Thank you! </div>
                            <div className='title black'> ORDER NO. </div>
                            <div className='title black'> {this.state.orderNum} </div>
                            <div className="text"> We'll call your number when it's ready. </div>
                        </div> : 
                    
                        <div className = 'larger-card special'> 
                            <div className = 'title'> {this.state.selectedItem.item_name} </div>
                            <img src={buildImage(this.state.selectedItem.category)} alt={this.state.selectedItem.item_name} />
                            <div className = 'text bold'> {this.state.Item.price} </div>
                            <div className = 'text'> {buildDescription(this.state.selectedItem.category, this.state.selectedItem.ingredients)} </div>
                        </div>
                    }
            </div>
            </div>
            <button onClick={this.handleReturn}> Go Back </button>
            </div>
        );
    }
}