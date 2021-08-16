import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from "react";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";
import NavBar from "./NavBar";
import "./VendingMachine.css";

const VENDING_MACHINE_URL = "https://i.pinimg.com/originals/48/9a/8e/489a8e1e87fe141a1063ba60dc1b508f.jpg";

function VendingMachine(props) {
  const [backgroundImage, setBackgroundImage] = useState(VENDING_MACHINE_URL);

  const styles = {
    backgroundImage: `url(${backgroundImage})`
  }

  function changeImage(url) {
    setBackgroundImage(url);
  }
  
  return (
    <div className="VendingMachine" style={styles}>
      <BrowserRouter>
      <NavBar changeImage={changeImage}/>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
