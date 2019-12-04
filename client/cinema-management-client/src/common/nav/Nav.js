import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <NavLink to="/">MAIN PAGE</NavLink>
        <NavLink to="/schedule">SCHEDULE</NavLink>
        <NavLink to="/account">ACCOUNT</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
