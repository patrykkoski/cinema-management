import React from "react";
import Navigation from "./common/nav/Nav";
import Mainpage from "./main/components/Mainpage";
import Schedule from "./schedule/schedule";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Mainpage}></Route>
        <Route path="/schedule" component={Schedule}></Route>
      </Switch>
    </div>
  );
};

export default App;
