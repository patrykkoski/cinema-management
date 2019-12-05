import React from "react";
import Navigation from "./common/nav/Nav";
import Mainpage from "./main/components/Mainpage";
import Schedule from "./schedule/schedule";
import { connect } from "react-redux";
import Authentication from "./account/authentication/Authentication";
import { Route, Switch } from "react-router-dom";
import Spinner from "./common/spinner/Spinner";
import UserPage from "./account/userPage/UserPage";

const App = props => {
  let routes;
  if (!props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Mainpage}></Route>
        <Route path="/schedule" component={Schedule}></Route>
        <Route path="/account" component={UserPage}></Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Mainpage}></Route>
        <Route path="/schedule" component={Schedule}></Route>
        <Route path="/account" component={Authentication}></Route>
      </Switch>
    );
  }
  return (
    <div>
      {props.isLoading ? <Spinner /> : null}
      <Navigation />
      {routes}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    token: state.token,
    userRole: state.userRole,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(App);
