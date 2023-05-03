import './App.css';

// STYLING
// import './pages/Manager_Side/manager.css';

// MANAGER
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';
import Manager_Sales from './pages/Manager_Side/Manager_Sales';
import Manager_Employee from './pages/Manager_Side/Manager_Employee';

// MENU

// CUSTOMER
import {Customer_Categories} from './pages/Customer_Side/Customer_Categories';
import { Customer_Items } from './pages/Customer_Side/Customer_Items';
import {Custoemr_Upgrade} from './pages/Customer_Side/Customer_Upgrade';
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
      <div style={{height:100}}></div>
      <BrowserRouter>
        <Auth_context>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />

            <Route exact path = "/manager_side" element = {<PrivateRoute/>} > 
                <Route exact path = "" element =  {<Manager_Inventory/>} />
                <Route exact path = "/manager_side/employee" element =  {<Manager_Employee/>} />
                <Route exact path = "/manager_side/sales" element =  {<Manager_Sales/>} />
            </Route>

            <Route exact path = "/server_side" element = {<PrivateRoute/>} > 
                <Route exact path = "/server_side/categories" element =  {<Server_Categories/>} />
            </Route>

          </Routes>
        </Auth_context>
      </BrowserRouter>

    </div>
  );
}

export default App;