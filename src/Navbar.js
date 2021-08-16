import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        <p> Home</p>
      </NavLink>
      <NavLink exact to="/soda">
        <p> Soda </p>
      </NavLink>
      <NavLink exact to="/chips">
        <p> Chips </p>
      </NavLink>
      <NavLink exact to="/sardines">
        <p>Sardines</p>
      </NavLink>
    </nav>
  );
}

export default NavBar;
