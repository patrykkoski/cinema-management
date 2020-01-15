import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import axios from "axios";
import UserPagePresentational from "./presentational/UserPagePresentational";

const UserPage = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = e => {
    e.preventDefault();
    axios.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
    axios.get("http://localhost:8080/current").then(response => {
      let name = response.data.username;
      axios
        .post("http://localhost:8080/user/changePassword", {
          userName: name,
          oldPassword: oldPassword,
          newPassword: newPassword
        })
        .then(response => {
          setNewPassword("");
          setOldPassword("");
          alert("Password changed");
        })
        .catch(err => {
          alert("Something was wrong");
        });
    });
  };

  const handleOldPassword = e => {
    setOldPassword(e.target.value);
  };

  const handleNewPassword = e => {
    setNewPassword(e.target.value);
  };

  let renderSection;
  let ticketsSection = <div>bileciki</div>;
  let passwordSection = (
    <div>
      <h2>Change password</h2>
      <form>
        <input
          type="password"
          placeholder="Enter your current password"
          onChange={handleOldPassword}
          value={oldPassword}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter your new password"
          onChange={handleNewPassword}
          value={newPassword}
        ></input>
        <br />
        <button onClick={changePassword}>Change password</button>
      </form>
    </div>
  );

  switch (currentPage) {
    case 0:
      renderSection = ticketsSection;
      break;
    case 1:
      renderSection = passwordSection;
      break;
    default:
      break;
  }

  const changePage = num => {
    setCurrentPage(num);
  };

  return (
    <UserPagePresentational
      changePage={changePage}
      onLogout={props.onLogout}
      renderSection={renderSection}
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
