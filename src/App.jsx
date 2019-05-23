import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import WorkspacePage from "./components/WorkspacePage/WorkspacePage";
import PrivacyPage from "./components/PrivacyPage/PrivacyPage";

const App = () => (
  <HashRouter>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/workspace" component={WorkspacePage} />
    <Route exact path="/privacy" component={PrivacyPage} />
  </HashRouter>
);

export default App;
