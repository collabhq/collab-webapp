import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../ui/theme/index";
import LandingPage from "../LandingPage/LandingPage";

const LandingPageThemeProvider = () => (
  <MuiThemeProvider theme={theme}>
    <LandingPage />
  </MuiThemeProvider>
);

export default LandingPageThemeProvider;
