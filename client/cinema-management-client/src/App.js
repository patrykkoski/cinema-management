import React, { useEffect } from "react";
import Navigation from "./common/nav/Nav";
import Mainpage from "./main/components/Mainpage";
import Schedule from "./schedule/schedule";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Authentication from "./account/authentication/Authentication";
import { Route, Switch } from "react-router-dom";
import Spinner from "./common/spinner/Spinner";
import UserPage from "./account/userPage/UserPage";

const App = props => {
  useEffect(() => {
    props.onAuthCheckState(localStorage.getItem("token"));
  }, []);

  let routes;
  if (props.isAuthenticated) {
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

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheckState: token => dispatch(actions.authCheckState(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
