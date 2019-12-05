import React from "react";
import { NavLink } from "react-router-dom";
import "./Authentication.scss";

const AuthenticationPresentational = props => {
  return (
    <React.Fragment>
      <div className="forms-wrapper">
        <form>
          <h2>Log in</h2>
          <input
            type="text"
            placeholder="Login"
            onChange={props.handleLoginValue}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={props.handlePasswordValue}
          ></input>
          <br />
          <button type="submit" onClick={props.handleSubmit}>
            Log in
          </button>
        </form>
        <p>Don't have account?</p>
        <NavLink to="/register">Sign up</NavLink>
      </div>
    </React.Fragment>
  );
};

export default AuthenticationPresentational;
