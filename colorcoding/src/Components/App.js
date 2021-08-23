import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import React,{ useState,useEffect } from "react"

//Imported hooks from react-router dom and react. Created console.log of Fetch API request to
//possibly place in state variable. 

function App() {
  const fetchAPI="http://localhost:3000/userList"
  const [userList, setUserList] =useState([])

  useEffect(() => {
    fetch(fetchAPI)
    .then(r => r.json())
    .then(uList => console.log(uList))
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
      </header>
    </div>
  );
}

export default App;
