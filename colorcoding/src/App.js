//Component Tree:
// App
//  |---LoginPage ,         GamePage ,           StatsPage
//                             |- GameWindow,                GameInput,                     GameLog
//                                   |- RulesBox, WinBox         |-ColorGrid, ComboEntry

import "./App.css";
import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StatsPage from "./Components/StatsPage";
import GamePage from "./Components/GamePage";
import NavBar from "./Components/NavBar";

function App() {
  const fetchAPI = "http://localhost:3000/userList";
  const [leaderList, setLeaderlist] = useState([])
  const [updateLeaderBoard, setUpdateLeaderBoard] = useState(false)
  const [player, setPlayer] = useState({
    userName: "",
    profilePic: "",
    winArray: [],
  });
  const [loginButton, setLoginButton] = useState("Create New Profile");
  const history = useHistory();


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
        .then((data) => {
          console.log("POSTed");
          setPlayer(data);
        });
      setLoginButton("Head to the Game page!");
      e.preventDefault();
      alert(
        "Remember: Leaving the game page will DELETE your progress, so stay there until you CRACK THE CODE!"
      );
      history.push("/game");
    }
  }

  //function to create new profile

  function onAddNewUser(e) {
    const name = e.target.name;
    let value = e.target.value;
    setPlayer({ ...player, [name]: value });
  }

  //the function postWin should take in the user data and a game win object. It should then post it to the server

  function postWin(winObject, user = player) {
    winObject.id = user.winArray.length + 1;
    let newWinArray = [...user.winArray, winObject];
    fetch(`${fetchAPI}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ winArray: newWinArray }),
    })
      .then((r) => r.json())
      .then(setUpdateLeaderBoard(!updateLeaderBoard));
  }

  //initializes update of leaderboard

  if(updateLeaderBoard){fetch(fetchAPI)
    .then((r) => r.json())
    .then((leaderList) => setLeaderlist(leaderList));}

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/leaderboard">
          <StatsPage leaderList={leaderList} />
        </Route>
        <Route path="/game">
          <GamePage player={player} postWin={postWin} fetchAPI={fetchAPI}/>
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
