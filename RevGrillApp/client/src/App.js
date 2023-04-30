import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './pages/Manager_Side/Manager_Employee';
import './pages/Manager_Side/Manager_Inventory';
import './pages/Manager_Side/Manager_Sales';
import { Manager_Employee } from './pages/Manager_Side/Manager_Employee';
import { Manager_Inventory } from './pages/Manager_Side/Manager_Inventory';
import {Manager_Sales} from './pages/Manager_Side/Manager_Sales';
import './pages/Manager_Side/manager.css';

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
      <Manager_Inventory></Manager_Inventory>
      <Manager_Employee></Manager_Employee>
      <Manager_Sales></Manager_Sales>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>What are you doing here today?</h1>
        
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
      </header>
             
        <p>{ingredients}</p>
        <p>{orders}</p>
    </div>
  );
}

export default App;