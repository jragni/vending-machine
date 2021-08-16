import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"


const VENDING_MACHINE_URL = "https://i.pinimg.com/originals/48/9a/8e/489a8e1e87fe141a1063ba60dc1b508f.jpg";
const SODA_URL = 'https://media.officedepot.com/images/t_large,f_auto/products/208206/Coca-Cola-Classic-Soda-12-Oz';
const CHIPS_URL = 'https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg';

function NavBar({ changeImage }) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        <p onClick={() => changeImage(VENDING_MACHINE_URL)}>Home</p>
      </NavLink>
      <NavLink exact to="/soda">
        <p onClick={() => changeImage(SODA_URL)}>Soda</p>
      </NavLink>
      <NavLink exact to="/chips">
        <p onClick={() => changeImage(CHIPS_URL)}>Chips</p>
      </NavLink>
      <NavLink exact to="/sardines">
        <p>Sardines</p>
      </NavLink>
    </nav>
  );
}

export default NavBar;
