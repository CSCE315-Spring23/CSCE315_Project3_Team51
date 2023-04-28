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
import { Manager_Inventory} from './pages/Manager_Side/Manager_Inventory.jsx';

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
      <header className="App-header">
        <h1>Example of accessing all the tables:</h1>
      </header>
             
        <p>{ingredients}</p>
        <p>{orders}</p>
    </div>
  );
}

export default App;
