import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CreateWorkspaceDialog from "../CreateWorkspaceDialog/CreateWorkspaceDialog";
import { showCreateWorkspaceDialog } from "../../actions/landingPage";

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

const LandingPage = ({ showCreateWorkspaceDialog: showWorkspaceDialog }) => (
  <div>
    <AppBar position="static">Menu</AppBar>
    <Button
      variant="contained"
      color="primary"
      onClick={() => showWorkspaceDialog()}
    >
      Get Started
    </Button>
    <CreateWorkspaceDialog />
  </div>
);

LandingPage.propTypes = {
  showCreateWorkspaceDialog: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  showCreateWorkspaceDialog
};
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(LandingPage));
