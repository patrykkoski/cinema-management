import React, { useState } from "react";
import RegistrationPresentational from "./presentational/RegistrationPresentational";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Registration = props => {
  const [userData, setUserData] = useState(null);

  const handleLogin = e => {
    setUserData({ ...userData, username: e.target.value });
  };

  const handlePassword = e => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleFirstname = e => {
    setUserData({ ...userData, firstname: e.target.value });
  };

  const handleLastname = e => {
    setUserData({ ...userData, lastname: e.target.value });
  };

  const handleEmail = e => {
    setUserData({ ...userData, email: e.target.value });
  };

  const validate = () => {
    if (!userData) {
      alert("Fields cannot be empty");
      return false;
    }
    if (!userData.username || userData.username.length < 5) {
      alert("Username must have at least 5 characters");
      return false;
    }
    if (!userData.password || userData.password.length < 5) {
      alert("Password must have at least 5 characters");
      return false;
    }
    if (!userData.firstname || userData.firstname.length < 2) {
      alert("Firstname must have at least 2 characters");
      return false;
    }
    if (!userData.lastname || userData.lastname.length < 2) {
      alert("Lastname must have at least 2 characters");
      return false;
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(userData.email)) {
      alert("Enter correct email");
      return false;
    }
    return true;
  };

  const register = e => {
    e.preventDefault();
    if (validate()) {
      props.onRegister(userData);
    }
  };

  return (
    <RegistrationPresentational
      handleLogin={handleLogin}
      handlePassword={handlePassword}
      handleFirstname={handleFirstname}
      handleLastname={handleLastname}
      handleEmail={handleEmail}
      register={register}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRegister: userData => dispatch(actions.register(userData))
  };
};

export default connect(null, mapDispatchToProps)(Registration);
