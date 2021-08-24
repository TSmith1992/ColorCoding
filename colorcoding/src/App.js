import "./App.css";
import React, { useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage";
import StatsPage from "./Components/StatsPage";
import RulesBox from "./Components/RulesBox";

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
    } else if (
      userList.filter((player) => player.userName === defaultLogin.userName)
    ) {
      alert("This name has already been taken. Please choose another");
    } else if (
      userList.filter((player) => player.profilePic === defaultLogin.profilePic)
    ) {
      alert("This picture is already in use. Please choose another");
    } else {
      fetch(fetchAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultLogin),
      })
        .then((r) => r.json())
        .then((data) => console.log("POSTed"));
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
      <LoginPage
        onAddNewUser={onAddNewUser}
        defaultLogin={defaultLogin}
        handleSubmit={handleSubmit}
      />
      <StatsPage userList={userList} />
      <RulesBox defaultLogin={defaultLogin} />
    </div>
  );
}

export default App;
