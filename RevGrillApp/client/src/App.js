import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
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

  const callAPI = () => {
    fetch("http://localhost:9000/newroute")
      .then(r => r.text())
      .then(resp => {
        setHello(resp)
      });
  }

  const callAPI2 = () => {
    fetch("http://localhost:9000/users")
      .then(r => r.text())
      .then(resp => {
        setHello2(resp)
      });
  }

  useEffect(() => {
    callAPI()
  }, [])

  useEffect(() => {
    callAPI2()
  }, [])
  

  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;
