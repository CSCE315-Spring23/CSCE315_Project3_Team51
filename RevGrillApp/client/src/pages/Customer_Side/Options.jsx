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

/**
 * Returns a string description of a menu item given its category and list of ingredients
 * @author Anna Brooks
 * @param {string} category - the category of the menu item
 * @param {string} ingredients - the list of ingredients in the menu item, separated by commas
 * @returns {string} - a description of the menu item
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

    // Convert ingredients to an array if it's a string
    if (typeof ingredients === 'string') {
        ingredients = ingredients.split(', ');
    }

    description += ` ${ingredients.join(', ')}.`;
    return description;
}

/**
 * Returns the image source file name for a menu item given its category
 * @author Anna Brooks
 * @param {string} category - the category of the menu item
 * @returns {string} - the file name of the image for the category
 */
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
      case 'Dessert':
        imageSrc = dessertPic;
        break;
      case 'Shake' :
        imageSrc = shakePic;
        break;
      case 'Drink' :
        imageSrc = drinkPic;
        break;
      case 'Sides' :
        imageSrc = sidesPic;
        break;
      default:
        imageSrc = logo;
        break;
    }
    return imageSrc;
}

/**
 * Component for displaying menu options and handling user interaction
 * @author Anna Brooks
 */
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

    /**
     * Fetches menu items from the server and updates the state accordingly
     */
    fetchMenuItems = () => {
      this.setState({
        isLoading: true,
        error: null
      });
  
    //   fetch("localhost:9000/server_side/get_menu")
      fetch("https://revgrill-app.onrender.com/server_side/get_menu")
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
    Sends a POST request to the server to place an order with the given items and price.
    * @param {Array} items - An array of items to be ordered.
    * @param {Number} price - The total price of the items.
    */
    placeOrder = (items, price) => {
        let requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemsOrdered: items.map(i => parseInt(i.item_number)).join(', '), totalPrice: price})
            //body: JSON.stringify({itemsOrdered: "1, 2, 3", totalPrice: 9.99})
        };
        // const url = "localhost:9000/server_side/create_order"
        const url = 'https://revgrill-app.onrender.com/server_side/create_order';
            
        fetch(url, requestOptions);
        fetch('https://revgrill-app.onrender.com/server_side/last_order_number')
        .then(response => response.json())
        .then(result => {
            this.setState({ 
            orderNum: result.last_number + 1
            });
        });
    }

    /**
     * This method fetches the menu items when the component is mounted.
     * 
     * @returns {void}
     */
    componentDidMount() {
        this.fetchMenuItems();
    }
    
    /**
     * This method sets the selected item in the state.
     * 
     * @param {Object} item - The selected item object.
     * @returns {void}
     */
    handleItemClick = (item) => {
        this.setState({ selectedItem: item });
    }

    /**
     * This method adds an item to the cart in the state.
     * 
     * @param {Object} item - The item object to be added to the cart.
     * @returns {void}
     */
    handleAddItem = (item) => {
        const currentCartItems = this.state.cartItems;
        this.setState({Item: item, cartItems: [...currentCartItems, item]});
    }

    /**
     * This method removes an item from the cart in the state.
     * 
     * @param {number} index - The index of the item to be removed.
     * @param {Object} item - The item object to be removed.
     * @returns {void}
     */
    removeItem = (index, item) => {
        if (this.state.cartItems.includes(item)) {
            const currentCartItems = this.state.cartItems;
            const updatedCartItems = [...currentCartItems];
            updatedCartItems.splice(index, 1);
            this.setState({cartItems: updatedCartItems});
        }
    }

    /**
     * This method removes an item from the cart in the state.
     * 
     * @param {number} index - The index of the item to be removed.
     * @param {Object} item - The item object to be removed.
     * @returns {void}
     */
    getTotalPrice = (cartItems) => {
        let total = 0;
        {cartItems.map(item => (total += item.price))}
        return total.toFixed(2);
    }

    /**
     * This method sets the category in the state.
     * 
     * @param {string} cat - The category to be set.
     * @returns {void}
     */
    handleNav = (cat) => {this.setState({category: cat})}

    /**
     * This method handles the order placement.
     * 
     * @param {Array} cart - The array of cart item objects.
     * @returns {void}
     */
    handleOrder = (cart) => {
        if (this.state.isReadytoSubmit == false)
            this.setState({isReadytoSubmit: true});
        else {
            this.placeOrder(cart, this.getTotalPrice(cart));
            this.setState({isReadytoSubmit: false, orderPlaced: true, cartItems: []})
        }
    }

    /**
     * This method handles the return to the menu after placing an order.
     * 
     * @returns {void}
     */
    handleReturn = () => {this.setState({orderPlaced: false})};

    /**
     * This method handles the cancellation of an order.
     * 
     * @returns {void}
     */
    handleCancel = () => {this.setState({isReadytoSubmit: false});}
    
    /**
     * This method renders the component.
     * 
     * @returns {JSX.Element} - The JSX element to be rendered.
     */     
    render() {
        const category = this.state.category;
        const { isLoading, menuItems, error } = this.state;
        const Items = menuItems.filter((menuItem) => menuItem.category === this.state.category);
        const firstTwoItems = Items.slice(0, 3);
        const secondTwoItems = Items.slice(3, 6);
        const lastItems = Items.slice(6);
        const Categories = ['Burger', 'Sandwich', 'Combo', 'Tenders', 'Sides', 'Dessert', 'Shake', 'Drink'];
        const cartItems = this.state.cartItems;

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
                <div style={{backgroundColor:"pink", textAlign:'center',}}>
                  <div style={{height:"10%",}}></div>
                  <h1>Error: {error.message}</h1>
                  <img style={{height:"40%", width:"40%"}} src= {logo} alt="Reveille flipping burgers"/>
                </div>
              );
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
                                        <div className = 'text bold'> {menuItem.price} </div>
                                        <div className = 'text'> {menuItem.item_name} </div>
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