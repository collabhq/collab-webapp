import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CreateWorkspaceDialog from "../CreateWorkspaceDialog/CreateWorkspaceDialog";
import { createWorkspace } from "../../actions/landingPage";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const LandingPage = ({ createWorkspace: createNewWorkspace }) => (
  <div>
    <AppBar position="static">Menu</AppBar>
    <Button
      variant="contained"
      color="primary"
      onClick={() => createNewWorkspace()}
    >
      Get Started
    </Button>
    <CreateWorkspaceDialog />
  </div>
);

LandingPage.propTypes = {
  createWorkspace: PropTypes.func.isRequired
};

const mapDispatchToProps = { createWorkspace };
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(LandingPage));
