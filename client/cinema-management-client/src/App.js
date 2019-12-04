import React from "react";
import Navigation from "./common/nav/Nav";
import Mainpage from "./main/components/Mainpage";
import Schedule from "./schedule/schedule";
import Authentication from "./account/authentication/Authentication";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Mainpage}></Route>
        <Route path="/schedule" component={Schedule}></Route>
        <Route path="/account" component={Authentication}></Route>
      </Switch>
    </div>
  );
};

export default App;
