import React, { Component, NavLink } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="navbar">
            <li>
              <NavLink exact to="/" activeClassName="activeLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/nba" activeClassName="activeLink">
                NBA
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/nfl" activeClassName="activeLink">
                NFL
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/mlb" activeClassName="activeLink">
                MLB
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
