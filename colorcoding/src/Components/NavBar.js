import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">Login Page</NavLink>
      <NavLink to="/game">Game</NavLink>
      <NavLink to="/leaderboard">LeaderBoard</NavLink>
    </div>
  );
}

export default NavBar;
