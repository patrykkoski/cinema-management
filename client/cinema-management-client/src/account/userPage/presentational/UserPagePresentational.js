import React from "react";
import "./UserPage.scss";

const UserPagePresentational = props => {
  return (
    <div className="user-page">
      <div className="user-page-content">
        <ul>
          <li onClick={() => props.changePage(0)}>My tickets</li>
          <li onClick={() => props.changePage(1)}>Change password</li>
          <li onClick={props.onLogout}>Logout</li>
        </ul>
        <div className="user-page-info">{props.renderSection}</div>
      </div>
    </div>
  );
};

export default UserPagePresentational;
