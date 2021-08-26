import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink className="navlink" activeClassName="navlink-active" exact to="/">Login Page</NavLink>
      <NavLink className="navlink" activeClassName="navlink-active" to="/game">Game</NavLink>
      <NavLink className="navlink" activeClassName="navlink-active" to="/leaderboard">LeaderBoard</NavLink>
    </div>
  );
}

export default NavBar;
