import './App.css';
import { useEffect, useState } from 'react';
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';
import Manager_Sales from './pages/Manager_Side/Manager_Sales';
import Manager_Employee from './pages/Manager_Side/Manager_Employee';
import PrivateRoute from './PrivateRoute';
import './pages/Manager_Side/manager.css';
import Login from './pages/Log_In/login';
import Signup from './pages/Log_In/signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Auth_context } from './pages/Log_In/auth_context';
function App() {

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
/*
  useEffect(() => {
    callAPIIngredients()
  }, [])

  useEffect(() => {
    callAPIOrders()
  }, [])
  
*/
  

  return (
    <div className="App">
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
                <Route exact path = "/server_side/inventory" element =  {<Manager_Inventory/>} />
                <Route exact path = "/server_side/employee" element =  {<Manager_Employee/>} />
                <Route exact path = "/server_side/sales" element =  {<Manager_Sales/>} />
            </Route>

          </Routes>
        </Auth_context>
      </BrowserRouter>
    
      

        
   {/* <Router>
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
      
       
    </div>
  );
}
// export default App;



// BELOW: FOR MENU
// import Menu2 from './pages/Menu_Side/Menu2';

// function App() {
//   return (
//     <Menu2 />
//   );
// }

// export default App;

// BELOW : FOR CUSTOMER
/*
import Options from './pages/Customer_Side/Options';
function App() {
  return ( <Options category='Burger' />);
}
*/
export default App;