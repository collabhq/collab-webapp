import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import WorkspacePage from "./components/WorkspacePage/WorkspacePage";
import PrivacyPage from "./components/PrivacyPage/PrivacyPage";
import checkAccess from "./actions/checkAccess";

const App = props => (
  <HashRouter>
    <Route exact path="/" component={LandingPage} />
    <Route
      exact
      path="/workspace"
      render={() =>
        checkAccess(props) ? <WorkspacePage /> : <Redirect to="/" />
      }
    />
    <Route exact path="/privacy" component={PrivacyPage} />
    <Route component={LandingPage} />
  </HashRouter>
);

export default App;
