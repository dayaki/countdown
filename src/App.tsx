import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Display from "./Display";
import Scheduler from "./Scheduler";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Display name="Dayo here" />
        </Route>
        <Route path="/scheduler">
          <Scheduler />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
