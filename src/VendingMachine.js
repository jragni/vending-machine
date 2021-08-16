import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from ".Chips";

function VendingMachine(props) {
  return (
    <div className="VendingMachine">
      <NavLink>
      <BrowserRouter>
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
