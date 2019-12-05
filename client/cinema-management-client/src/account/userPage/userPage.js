import React from "react";
import "./UserPage.scss";

const UserPage = props => {
  return (
    <div className="user-page">
      <div className="user-page-content">
        <ul>
          <li>My tickets</li>
          <li>Change password</li>
          <li>Change email</li>
        </ul>
        <div className="user-page-info">
          <h2>My tickets</h2>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
