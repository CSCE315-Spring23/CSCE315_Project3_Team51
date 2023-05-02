import './App.css';

// STYLING
import './pages/Manager_Side/manager.css';

// MANAGER
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';
import Manager_Sales from './pages/Manager_Side/Manager_Sales';
import Manager_Employee from './pages/Manager_Side/Manager_Employee';

// MENU

// CUSTOMER

//SERVER
import Server_Categories from './pages/Server_Side/Server_Categories';

// LOGIN
import Login from './pages/Log_In/login';
import Signup from './pages/Log_In/signup';

// ROUTING
import PrivateRoute from './PrivateRoute';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Auth_context } from './pages/Log_In/auth_context';



function App() {

  return (
    <div className="App">
      <div style={{height:100}}></div>
      <BrowserRouter>
        <Auth_context>
          <Routes>
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route exact path = "/manager_side" element = {<PrivateRoute/>} > 
                <Route exact path = "/manager_side/inventory" element =  {<Manager_Inventory/>} />
                <Route exact path = "/manager_side/employee" element =  {<Manager_Employee/>} />
                <Route exact path = "/manager_side/sales" element =  {<Manager_Sales/>} />
            </Route>

            <Route exact path = "/server_side" element = {<PrivateRoute/>} > 
                <Route exact path = "/server_side/categories" element =  {<Server_Categories/>} />
                <Route exact path = "/server_side/employee" element =  {<Manager_Employee/>} />
                <Route exact path = "/server_side/sales" element =  {<Manager_Sales/>} />
            </Route>

          </Routes>
        </Auth_context>
      </BrowserRouter>
     
    </div>
  );
}


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

// import Options from './pages/Customer_Side/Options';
// import ShoppingCart from './pages/Customer_Side/shoppingCart';

// function App() {
//   const [cartItems, setCartItems] = useState();

//   return (
//     <div className="App">
//       <Options category='Burger' cartItems={cartItems}/>
//       {/* <ShoppingCart cartItems={cartItems} setCartItems = {setCartItems}/> */}
//     </div>
//   );
// }
// export default App;

export default App;

