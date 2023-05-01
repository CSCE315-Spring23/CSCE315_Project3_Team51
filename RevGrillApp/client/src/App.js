import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
<<<<<<< HEAD
import Manager_Inventory from './pages/Manager_Side/Manager_Inventory';

import './pages/Manager_Side/manager.css';

function App() {

  const [ingredients, setIngredients] = useState('No data - Ingredients')
  const [orders, setOrders] = useState('No data - Orders')

  const callAPIIngredients = () => {
=======
import Signup from './pages/Log_In/signup'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './pages/Manager_Side/Manager_Employee'
import { Manager_Employee } from './pages/Manager_Side/Manager_Employee';
import { Manager_Inventory } from './pages/Manager_Side/Manager_Inventory';
import './pages/Manager_Side/manager.css';
import Login from './pages/Log_In/login';

function App() {

  const [hello, setHello] = useState('No data')
  const [hello2, setHello2] = useState('No data2')
/*
  const callAPI = () => {
    fetch("http://localhost:9000/newroute")
      .then(r => r.text())
      .then(resp => {
        setHello(resp)
      });
  }

  const callAPI2 = () => {
>>>>>>> auth
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
<<<<<<< HEAD
  

  

  return (
    <div className="App">
      <Manager_Inventory></Manager_Inventory>
      
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
      
        <p>{ingredients}</p>
        <p>{orders}</p>
=======
  */

  return (
    <div className="App">
      
        <Login/>
        
      
>>>>>>> auth
    </div>
  );
}

export default App;
