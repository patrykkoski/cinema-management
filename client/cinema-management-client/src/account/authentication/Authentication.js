import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Authentication = props => {
  return (
    <div>
      <input type="text" placeholder="Login"></input>
      <input type="text" placeholder="Password"></input>
      <button type="submit" onClick={props.onLogin}>
        Log in
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    token: state.token,
    userRole: state.userRole
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(actions.authStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
