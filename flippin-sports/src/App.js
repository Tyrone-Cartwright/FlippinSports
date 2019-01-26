import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

import NBATeams from './components/NBAteams/nbateams';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <NBATeams />
        </header>
      </div>
    );
  }
}

export default App;
