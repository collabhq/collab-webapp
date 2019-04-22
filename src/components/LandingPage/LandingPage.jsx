import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CloudCircle from "@material-ui/icons/CloudCircle";
import {
  AppBar,
  Button,
  Typography,
  Link,
  CssBaseline,
  Toolbar
} from "@material-ui/core";
import CreateWorkspaceDialog from "../CreateWorkspaceDialog/CreateWorkspaceDialog";
import { showCreateWorkspaceDialog } from "../../actions/landingPage";
import { setJoinWorkspaceUUID } from "../../actions/createWorkspaceDialog";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: "100vh",
    backgroundColor: theme.palette.background.paper
  },
  appBarMain: {
    flexGrow: 0,
    width: "100%"
  },
  mainContent: {
    width: "100%",
    marginBottom: "10%"
  },
  subMainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  footer: {
    flexGrow: 0,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 0.5
  },
  appBar: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  },
  appBarLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  appBarRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  mainLogo: {
    width: 150,
    height: 150
  },
  subtitle: {
    marginTop: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit * 3
  },
  getStartedButton: {
    width: 150
  },
  footerText: {
    color: theme.palette.common.black
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends React.Component {
  componentDidMount() {
    const {
      joinWorkspace,
      location: { search }
    } = this.props;
    const workspaceUUID = new URLSearchParams(search).get("join");
    joinWorkspace(workspaceUUID);
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.appBarMain}>
            <AppBar position="static">
              <Toolbar className={classes.appBar}>
                <div className={classes.appBarLeft}>
                  <CloudCircle className={classes.icon} />
                  <Typography variant="h6" color="inherit" noWrap>
                    Collab
                  </Typography>
                </div>
                <div className={classes.appBarRight}>
                  <Link
                    color="inherit"
                    href="https://www.github.com/collabhq"
                    target="_blank"
                    rel="noopener"
                  >
                    <Typography variant="h6" color="inherit" noWrap>
                      Github
                    </Typography>
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
          </div>

          <div className={classes.mainContent}>
            <div className={classes.subMainContent}>
              <CloudCircle className={classes.mainLogo} color="primary" />
              <Typography variant="h4" color="inherit">
                Collab
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
                color="secondary"
                onClick
                className={classes.getStartedButton}
              >
                Coming Soon!
              </Button>
              <CreateWorkspaceDialog />
            </div>
          </div>
          <footer className={classes.footer}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className={classes.footerText}
            >
              Collab © 2019
            </Typography>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

LandingPage.propTypes = {
  showWorkspaceDialog: PropTypes.func.isRequired,
  joinWorkspace: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  location: PropTypes.object
};

const mapDispatchToProps = {
  showWorkspaceDialog: showCreateWorkspaceDialog,
  joinWorkspace: setJoinWorkspaceUUID
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LandingPage));
