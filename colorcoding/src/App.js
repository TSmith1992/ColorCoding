//Component Tree:
// App
//  |---LoginPage , GamePage , StatsPage
//                     |- GameWindow,                GameInput,                     GameLog
//                         |- RulesBox, WinBox         |-ColorGrid, ComboEntry

import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StatsPage from "./Components/StatsPage";
import GamePage from "./Components/GamePage";
import NavBar from "./Components/NavBar";

function App() {
  const fetchAPI = "http://localhost:3000/userList";
  const [userList, setUserList] = useState([]);
  const [player, setPlayer] = useState({
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
    if (!player.userName || !player.profilePic) {
      alert("Please complete all fields to play");
    } else {
      fetch(fetchAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      })
        .then((r) => r.json())
        .then((data) => console.log("POSTed"));
      //e.preventDefault();
      <Redirect to="/game"/>
    }
  }

  //function to create new profile
  function onAddNewUser(e) {
    const name = e.target.name;
    let value = e.target.value;
    setPlayer({ ...player, [name]: value });
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/leaderboard">
          <StatsPage userList={userList} />
        </Route>
        <Route path="/game">
          <GamePage player={player} />
        </Route>
        <Route path="/">
          <LoginPage
            onAddNewUser={onAddNewUser}
            player={player}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
