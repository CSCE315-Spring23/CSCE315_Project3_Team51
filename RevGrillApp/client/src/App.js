import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './pages/Manager_Side/Manager_Employee'
import { Manager_Employee } from './pages/Manager_Side/Manager_Employee';
import './pages/Manager_Side/manager.css';

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
      <Manager_Employee></Manager_Employee>
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
        <p>{hello}</p>
        <p>{hello2}</p>
        
      </header>
    </div>
  );
}

export default App;
