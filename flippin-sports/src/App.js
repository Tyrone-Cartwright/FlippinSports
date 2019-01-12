import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <h2>there</h2>
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
