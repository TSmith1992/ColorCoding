
import "./App.css";
import React, { useState, useEffect, NavLink, Switch } from "react";
import LoginPage from "./Components/LoginPage";
import StatsPage from "./Components/StatsPage";
import RulesBox from "./Components/RulesBox";
import WinBox from "./Components/WinBox";
import LoginPage from './Components/LoginPage';
import GamePage from './Components/GamePage';

function App() {
  const fetchAPI = "http://localhost:3000/userList";
  const [userList, setUserList] = useState([]);
  const [defaultLogin, setDefaultLogin] = useState({
    userName: "",
    profilePic: "",
    winArray: [],
  });

  //Initial GET request
  useEffect(() => {
    fetch(fetchAPI)
      .then((r) => r.json())
      .then((uList) => setUserList(uList));
  }, []);

  //function to handle submission of new profile
  function handleSubmit(e) {
    //upon submission, user can be redirected to game page
    //did not keep e.prevenDefault() because page would be redirected to gaming page anyway
    if (!defaultLogin.userName || !defaultLogin.profilePic) {
      alert("Please complete all fields to play");
    }else {
      fetch(fetchAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultLogin),
      })
        .then((r) => r.json())
        .then((data) => console.log("POSTed"));
        e.preventDefault()
    }
  }

  //function to create new profile
  function onAddNewUser(e) {
    const name = e.target.name;
    let value = e.target.value;
    setDefaultLogin({ ...defaultLogin, [name]: value });
  }

  return (
    <div className="App">

      <LoginPage />
      <GamePage />

      <LoginPage
        onAddNewUser={onAddNewUser}
        defaultLogin={defaultLogin}
        handleSubmit={handleSubmit}
      />
      <StatsPage userList={userList} />
      <RulesBox defaultLogin={defaultLogin} />
      <WinBox defaultLogin={defaultLogin}/>
    </div>
  );
}

export default App;
