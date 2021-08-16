import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from "react";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";
import NavBar from "./NavBar";
import "./VendingMachine.css";
import Home from "./Home";

/// node

function VendingMachine(props) {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
