import React, { Component } from 'react';
import './style.css';

async function fetchData() {
  const menuItems = await getMenu();
  console.log(menuItems); // logs the resulting rows of the query
  return menuItems;
}

function buildDescription(category, ingredients) {
  let description = '';
  switch (category) {
    case 'Burgers':
      description += 'Juicy beef patty with';
      break;
    case 'Sandwiches':
      description += 'Satisfying sandwich with';
      break;
    case 'Tenders':
      description += 'Crispy tenders with';
      break;
  }
  description += ` ${ingredients.join(', ')}.`;
  return description;
}

function buildImageAndAlt(category) {
    let imageSrc = '';
    let altText = '';
    switch (category) {
      case 'Burgers':
        imageSrc = './cat_burgers.png';
        altText = 'Burger';
        break;
      case 'Sandwiches':
        imageSrc = './cat_sandwich.png';
        altText = 'Sandwich';
        break;
      case 'Tenders':
        imageSrc = './cat_tenders.png';
        altText = 'Tenders';
        break;
      default:
        imageSrc = './cat_sides.png';
        altText = 'Menu item';
        break;
    }
    return {imageSrc, altText};
}

export class MenuTile extends Component {
    render() {
      const { image, description } = this.props.item;
      const { price, number } = this.props.item;
      return (
        <div className = 'smaller-card'>
          <div className='item-number'> {number} </div>
          <img src={image} alt='menu item' />
          <div className='text bold'> {price} </div>
          <div className='text'> {description} </div>
        </div>
      )
    }
  }

export class MenuList extends Component {
constructor(props) {
    super(props);
    this.state = {
    menuItems: []
    };
}

async componentDidMount() {
    const allMenuItems = await fetchData();
    const filteredMenuItems = allMenuItems.filter(
    item => item.category === this.props.category
    );
    this.setState({ menuItems: filteredMenuItems });
}

render() {
    const { category } = this.props;
    const { imageSrc, altText } = buildImageAndAlt(category);
    return (
    <div>
        {this.state.menuItems.map(item => (
        <MenuTile
            key={item.id}
            image={imageSrc}
            alt={altText}
            description={buildDescription(item.category, item.ingredients)}
            price={item.price}
            number={item.number}
        />
        ))}
    </div>
    );
}
}