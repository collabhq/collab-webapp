import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CloudCircle from "@material-ui/icons/CloudCircle";
import { AppBar, Button, Typography, Link } from "@material-ui/core";
import CreateWorkspaceDialog from "../CreateWorkspaceDialog/CreateWorkspaceDialog";
import { showCreateWorkspaceDialog } from "../../actions/landingPage";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: theme.spacing.unit * 1.2
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    marginLeft: 10
  },
  logoText: {
    marginLeft: 5
  },
  github: {
    marginRight: 15
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100 // !important -> fix this
  },
  largeLogo: {
    width: 150,
    height: 150
  },
  largeLogoText: {},
  subtitle: {
    marginTop: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit * 3
  },
  getStartedButton: {
    width: 150
  },
  bottomBar: {
    display: "flex",
    top: "auto",
    bottom: 0,
    padding: theme.spacing.unit * 1.2
  }
});

const LandingPage = ({
  showCreateWorkspaceDialog: showWorkspaceDialog,
  classes
}) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.logoContainer}>
        <CloudCircle fontSize="large" className={classes.logo} />
        <Typography variant="h6" color="inherit" className={classes.logoText}>
          Puffnote
        </Typography>
      </div>
      <Link
        color="inherit"
        href="https://www.github.com/puffnote"
        target="_blank"
        className={classes.github}
      >
        Github
      </Link>
    </AppBar>
    <div className={classes.contentContainer}>
      <CloudCircle className={classes.largeLogo} color="primary" />
      <Typography
        variant="h4"
        color="inherit"
        className={classes.largeLogoText}
      >
        Puffnote
      </Typography>
      <Typography
        variant="subtitle1"
        color="inherit"
        className={classes.subtitle}
      >
        Collaborate and share data in real-time
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => showWorkspaceDialog()}
        className={classes.getStartedButton}
      >
        Get Started
      </Button>
    </div>
    <AppBar position="fixed" className={classes.bottomBar}>
      <p />
    </AppBar>
    <CreateWorkspaceDialog />
  </div>
);

LandingPage.propTypes = {
  showCreateWorkspaceDialog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  showCreateWorkspaceDialog
};
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LandingPage));
