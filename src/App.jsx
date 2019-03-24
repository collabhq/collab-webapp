import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => (
  <HashRouter>
    <LandingPage />
  </HashRouter>
);

export default App;
