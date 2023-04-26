import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Signup from './pages/Log_In/signup'
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{hello}</p>
        <p>{hello2}</p>
        <Signup/>
        
      </header>
    </div>
  );
}

export default App;
