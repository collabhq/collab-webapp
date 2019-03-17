import React from "react";
import { HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <HashRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </HashRouter>
);

export default App;
