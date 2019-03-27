import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../ui/theme/index";
import WorkspacePage from "../WorkspacePage/WorkspacePage";

const WorkspacePageThemeProvider = () => (
  <MuiThemeProvider theme={theme}>
    <WorkspacePage />
  </MuiThemeProvider>
);

export default WorkspacePageThemeProvider;
