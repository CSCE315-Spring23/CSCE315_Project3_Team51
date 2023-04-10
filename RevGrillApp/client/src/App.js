import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [hello, setHello] = useState('No data')

  const callAPI = () => {
    fetch("http://localhost:9000/newroute")
      .then(r => r.text())
      .then(resp => {
        setHello(resp)
      });
  }

  useEffect(() => {
    callAPI()
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
      </header>
    </div>
  );
}

export default App;
