import React from "react";
import "./RegistrationPresentational.scss";

const RegistrationPresentational = props => {
  return (
    <div className="registration">
      <form className="forms-wrapper">
        <input
          type="text"
          placeholder="Login"
          onChange={props.handleLogin}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={props.handlePassword}
        ></input>
        <br />
        <input
          type="text"
          placeholder="First name"
          onChange={props.handleFirstname}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Last name"
          onChange={props.handleLastname}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Email"
          onChange={props.handleEmail}
        ></input>
        <br />
        <button type="submit" onClick={props.register}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegistrationPresentational;
