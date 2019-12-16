import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./UserPage.scss";

const UserPage = props => {
  return (
    <div className="user-page">
      <div className="user-page-content">
        <ul>
          <li>My tickets</li>
          <li>Change password</li>
          <li>Change email</li>
          <li onClick={props.onLogout}>Logout</li>
        </ul>
        <div className="user-page-info">
          <h2>My tickets</h2>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(null, mapDispatchToProps)(UserPage);
