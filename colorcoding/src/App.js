//Component Tree:
// App
//  |---LoginPage ,         GamePage ,           StatsPage
//                             |- GameWindow,                GameInput,                     GameLog
//                                   |- RulesBox, WinBox         |-ColorGrid, ComboEntry

import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
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
  const [loginButton, setLoginButton] = useState("Create New Profile!")
  const history = useHistory();

  //Initial GET request
  useEffect(() => {
    fetch(fetchAPI)
      .then((r) => r.json())
      .then((uList) => setUserList(uList));
  }, []);

  //function to handle submission of new profile. Upon submission, user will be redirected to game page
  function handleSubmit(e) {
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
        setLoginButton("Head to the Game page!")
        alert('Remember: Leaving the game page will DELETE your progress, so stay there until you CRACK THE CODE!')
        history.push("/game")
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
            loginButton={loginButton}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
