import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink exact to="/" activeClassName="activeLink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/nba" activeClassName="activeLink">
          NBA
        </NavLink>
      </li>
      <li>
        <NavLink to="/nfl" activeClassName="activeLink">
          NFL
        </NavLink>
      </li>
      <li>
        <NavLink to="/mlb" activeClassName="activeLink">
          MLB
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
