import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CloudCircle from "@material-ui/icons/CloudCircle";
import { AppBar, Typography, Link, Toolbar } from "@material-ui/core";
import { WEBSITE_PRIVACY_URL, GITHUB_ORG_URL } from "../../actions/constants";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    backgroundColor: theme.palette.background.paper
  },
  appBarMain: {
    flexGrow: 0,
    width: "100%"
  },
  mainContent: {
    width: "100%"
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
  subtitle: {
    marginTop: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit * 3
  },
  footerText: {
    color: theme.palette.common.black,
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1
  },
  footerSubContent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  footerSubText: {
    color: theme.palette.secondary.main,
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class PrivacyPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
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
              <div className={classes.appBarRight} />
            </Toolbar>
          </AppBar>
        </div>

        <div className={classes.mainContent}>
          <div className={classes.subMainContent}>
            <Typography variant="h5" color="inherit">
              Cookie Declaration
            </Typography>
            <script
              id="CookieDeclaration"
              src="https://consent.cookiebot.com/22183745-e911-4700-8e51-eecbd220b50f/cd.js"
              type="text/javascript"
              async
            />
          </div>
        </div>
        <footer className={classes.footer}>
          <div className={classes.footerSubContent}>
            <Link
              color="inherit"
              href={WEBSITE_PRIVACY_URL}
              target="_blank"
              rel="noopener"
            >
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className={classes.footerSubText}
              >
                Privacy
              </Typography>
            </Link>
            <Link
              color="inherit"
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener"
            >
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className={classes.footerSubText}
              >
                Github
              </Typography>
            </Link>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className={classes.footerText}
            >
              © 2019 CollabHQ
            </Typography>
          </div>
        </footer>
      </div>
    );
  }
}

PrivacyPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  null
)(withStyles(styles, { withTheme: true })(PrivacyPage));
