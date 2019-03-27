import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import WorkspacePage from "./components/WorkspacePage/WorkspacePage";

const App = () => (
  <HashRouter>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/workspace" component={WorkspacePage} />
  </HashRouter>
);

export default App;
