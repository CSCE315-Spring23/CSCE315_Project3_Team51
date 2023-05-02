import './App.css';
import { useEffect, useState } from 'react'
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';
import Manager_Employee from './pages/Manager_Side/Manager_Employee';
import PrivateRoute from './PrivateRoute';
import './pages/Manager_Side/manager.css';
import Login from './pages/Log_In/login';
import Signup from './pages/Log_In/signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Auth_context } from './pages/Log_In/auth_context';
function App() {

  const [ingredients, setIngredients] = useState('No data - Ingredients')
  const [orders, setOrders] = useState('No data - Orders')

  const callAPIIngredients = () => {
    fetch("http://localhost:9000/users")
      .then(r => r.text())
      .then(resp => {
        setIngredients(resp)
      });
  }

  const callAPIOrders = () => {
    fetch("http://localhost:9000/orders")
      .then(r => r.text())
      .then(resp => {
        setOrders(resp)
      });
  }

  useEffect(() => {
    callAPIIngredients()
  }, [])

  useEffect(() => {
    callAPIOrders()
  }, [])
  

  

  return (
    <div className="App">
      <BrowserRouter>
        <Auth_context>
          <Routes>
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/manager_side" element = {<Manager_Inventory/>} > 
                <Route path = "/manager_side/employee" element =  {<Manager_Employee/>} />
            </Route>
          </Routes>
        </Auth_context>
      </BrowserRouter>
    
      
       
        
        {/* <Router>
        <ul>
          <li><button href="/">Main</button></li>
          <li><button href="/menu">Menu</button></li>
          <li><button href="/customer">Customer</button></li>
          <li><button href="/server">Server</button></li>
          <li><button href="/manager">Manager</button></li>
        </ul>
        <Route path="/" render={() => <h1>Welcome!</h1>} />
        <Route render={() => <h1>404: page not found</h1>} />
        </Router> */}
      
       
    </div>
  );
}

export default App;



// BELOW: FOR MENU
//import Menu from './pages/Menu_Side/Menu';

// function App() {
//   return (
//     <Menu />
//   );
// }

// export default App;
