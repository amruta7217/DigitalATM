import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Screen/Login/Login";
import Transaction from "./Screen/Transaction/Transaction";
import History from "./Screen/History/History";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/history" component={History} />
        </Switch>
      </div>
    );
  }
}

export default App;
