import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import AuthenticationPresentational from "./presentational/AuthenticationPresentational";

const Authentication = props => {
  const [loginValue, setLoginValue] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginValue = e => {
    setLoginValue(e.target.value);
  };
  const handlePasswordValue = e => {
    setLoginPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onAuth(loginValue, loginPassword);
  };

  return (
    <div className="authentication">
      <AuthenticationPresentational
        handleLoginValue={handleLoginValue}
        handlePasswordValue={handlePasswordValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (login, password) => dispatch(actions.auth(login, password))
  };
};

export default connect(null, mapDispatchToProps)(Authentication);
