import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPageThemeProvider from "./components/ThemeProviders/LandingPageThemeProvider";
import WorkspacePageThemeProvider from "./components/ThemeProviders/WorkspacePageThemeProvider";

const App = () => (
  <HashRouter>
    <Route exact path="/" component={LandingPageThemeProvider} />
    <Route exact path="/workspace" component={WorkspacePageThemeProvider} />
  </HashRouter>
);

export default App;
