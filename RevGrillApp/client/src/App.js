import './App.css';

// STYLING
// import './pages/Manager_Side/manager.css';

// MANAGER
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';
import Manager_Sales from './pages/Manager_Side/Manager_Sales';
import Manager_Employee from './pages/Manager_Side/Manager_Employee';

// MENU
import Menu from './pages/Menu_Side/Menu';
import Menu2 from './pages/Menu_Side/Menu2';

// CUSTOMER
import Customer from './pages/Customer_Side/Customer';
import {Customer_Categories} from './pages/Customer_Side/Customer_Categories';
import { Customer_Items } from './pages/Customer_Side/Customer_Items';
import {Customer_Upgrade} from './pages/Customer_Side/Customer_Upgrade';
import { Customer_OrderSuccess } from './pages/Customer_Side/Customer_OrderSuccess';
import {Customer_Confirm} from  './pages/Customer_Side/Customer_Confirm';


//SERVER
import Server_Categories from './pages/Server_Side/Server_Categories';

// LOGIN
import Login from './pages/Log_In/login';
import Signup from './pages/Log_In/signup';

// HOME
import Home from './pages/Home/Home';

// ROUTING
import PrivateRoute from './PrivateRoute';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Auth_context } from './pages/Log_In/auth_context';


function App() {

  return (
    <div className="App">
      <div style={{height:75}}></div>
      <BrowserRouter>
        <Auth_context>
          <Routes>

            <Route path = "/" element = {<Home/>} />
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />

            <Route exact path = "/manager_side"  > 
                <Route exact path = "" element =  {<Manager_Inventory/>} />
                <Route exact path = "/manager_side/employee" element =  {<Manager_Employee/>} />
                <Route exact path = "/manager_side/sales" element =  {<Manager_Sales/>} />
            </Route>

            <Route exact path = "/server_side"  > 
                <Route exact path = "/server_side/server_categories" element =  {<Server_Categories/>} />
            </Route>

            <Route exact path = "/customer_side"  >
                <Route exact path = "" element =  {<Customer/>} /> 
                <Route exact path = "/customer_side/categories" element =  {<Customer_Categories/>} />
            </Route>

            <Route exact path = "/customer_side" element = {<Customer/>} > </Route>

            <Route exact path = "/menu_side" element = {<Menu/>} > 
                <Route exact path = "/menu_side2" element = {<Menu2/>} > </Route>
            </Route>
          </Routes>
        </Auth_context>
      </BrowserRouter>
      <div style={{height:100}}></div>
    </div>
  );
}

//element = {<PrivateRoute/>}

export default App;