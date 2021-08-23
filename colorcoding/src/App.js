import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import React,{ useState,useEffect } from "react"
import LoginPage from './Components/LoginPage';
import GamePage from './Components/GamePage';

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
      <LoginPage />
      <GamePage />
    </div>
  );
}

export default App;
