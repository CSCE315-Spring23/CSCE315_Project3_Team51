import './App.css';
import { useEffect, useState } from 'react'
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';

import './pages/Manager_Side/manager.css';


// function App() {

//   const [ingredients, setIngredients] = useState('No data - Ingredients')
//   const [orders, setOrders] = useState('No data - Orders')

//   const callAPIIngredients = () => {
//     fetch("http://localhost:9000/users")
//       .then(r => r.text())
//       .then(resp => {
//         setIngredients(resp)
//       });
//   }

//   const callAPIOrders = () => {
//     fetch("http://localhost:9000/orders")
//       .then(r => r.text())
//       .then(resp => {
//         setOrders(resp)
//       });
//   }

//   useEffect(() => {
//     callAPIIngredients()
//   }, [])

//   useEffect(() => {
//     callAPIOrders()
//   }, [])
  

  

//   return (
//     <div className="App">
//       <Manager_Inventory></Manager_Inventory>
      
//         <h1>What are you doing here today?</h1>
        
//         {/* <Router>
//         <ul>
//           <li><button href="/">Main</button></li>
//           <li><button href="/menu">Menu</button></li>
//           <li><button href="/customer">Customer</button></li>
//           <li><button href="/server">Server</button></li>
//           <li><button href="/manager">Manager</button></li>
//         </ul>
//         <Route path="/" render={() => <h1>Welcome!</h1>} />
//         <Route render={() => <h1>404: page not found</h1>} />
//         </Router> */}
      
//         <p>{ingredients}</p>
//         <p>{orders}</p>
//     </div>
//   );
// }

// export default App;



// BELOW: FOR MENU
// import Options from './pages/Customer_Side/Options.jsx';

// function App() {
//   return (
//     <Options category = 'Burger' />
//   );
// }

// export default App;

// BELOW : FOR CUSTOMER
// import Customer_Categories from './pages/Customer_Side/Customer_Categories';
// function App() {
//   return ( <Customer_Categories />);
// }
// export default App;

import Options from './pages/Customer_Side/Options';
import ShoppingCart from './pages/Customer_Side/shoppingCart';

function App() {
  const [cartItems, setCartItems] = useState();

  return (
    <div className="App">
      <Options category='Burger' cartItems={cartItems}/>
      {/* <ShoppingCart cartItems={cartItems} setCartItems = {setCartItems}/> */}
    </div>
  );
}

export default App;