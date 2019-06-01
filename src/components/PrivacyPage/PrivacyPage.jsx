import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CloudCircle from "@material-ui/icons/CloudCircle";
import {
  AppBar,
  Typography,
  Link,
  Toolbar,
  IconButton
} from "@material-ui/core";
import {
  WEBSITE_PRIVACY_URL,
  GITHUB_ORG_URL,
  WEBSITE_PUBLIC_URL,
  FEEDBACK_URL,
  WEBSITE_TERMS_URL
} from "../../actions/constants";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: "auto",
    backgroundColor: theme.palette.background.paper
  },
  appBarMain: {
    flexGrow: 0,
    width: "100%",
    zIndex: "100"
  },
  appBarCustom: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    boxShadow: "1"
  },
  mainContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: "5%"
  },
  subMainContent: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: theme.spacing.unit * 1
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
  },
  CookieDeclarationType: {
    margin: "12px 0 12px 0",
    padding: "8px 8px 0 8px",
    border: "1px solid #333333",
    verticalAlign: "top"
  },

  CookieDeclarationTypeHeader: {
    fontWeight: "bold"
  },

  CookieDeclarationTypeDescription: {
    margin: "2px 0 16px 0"
  },

  CookieDeclarationTable: {
    tableLayout: "fixed",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: "0",
    margin: "0 0 18px 0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    verticalAlign: "baseline"
  },

  CookieDeclarationTableHeader: {
    fontWeight: "bold",
    borderBottom: "1px solid #777777",
    textAlign: "left",
    padding: "4px"
  },

  CookieDeclarationTableCell: {
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    borderBottom: "1px solid #777777",
    verticalAlign: "top",
    padding: "4px 4px 5px 4px"
  },
  textMarginTop: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});
/* eslint-disable no-script-url */
// eslint-disable-next-line react/prefer-stateless-function
class PrivacyPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appBarMain}>
          <AppBar position="static" className={classes.appBarCustom}>
            <Toolbar className={classes.appBar}>
              <div className={classes.appBarLeft}>
                <Link href={WEBSITE_PUBLIC_URL} rel="noopener">
                  <IconButton color="primary" aria-label="Homepage">
                    <CloudCircle />
                  </IconButton>
                </Link>
                <Link href={WEBSITE_PUBLIC_URL} rel="noopener">
                  <Typography variant="h5" color="inherit" noWrap>
                    Collab
                  </Typography>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.subMainContent}>
            <Typography
              variant="h4"
              color="inherit"
              align="center"
              gutterBottom
            >
              Cookies Declaration
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              This website uses cookies. We use cookies to analyse our traffic.
              We also share information about your use of our site with our
              analytics partners who may combine it with other information that
              you’ve provided to them or that they’ve collected from your use of
              their services. You consent to our cookies if you continue to use
              our website.
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              This site uses different types of cookies. Some cookies are placed
              by third party services that appear on our pages.
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              You can at any time change or withdraw your consent from the
              Cookie Declaration on our website in our Privacy Policy.
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              Your consent applies to the following domains: collabhq.app
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Manage your consent
            </Typography>
            <Link color="secondary" href={"javascript:CookieConsent.renew();"}>
              <Typography
                color="secondary"
                variant="subtitle1"
                align="center"
                gutterBottom
              >
                Change your consent
              </Typography>
            </Link>
            <Link
              color="secondary"
              href={
                "javascript:CookieConsent.withdraw();javascript:CookieConsent.renew();"
              }
            >
              <Typography
                color="secondary"
                variant="subtitle1"
                align="center"
                gutterBottom
              >
                Withdraw your consent
              </Typography>
            </Link>

            <div className={classes.CookieDeclarationType} lang="en" dir="ltr">
              <p className={classes.CookieDeclarationTypeHeader}>Necessary</p>
              <p className={classes.CookieDeclarationTypeDescription}>
                Necessary cookies help make a website usable by enabling basic
                functions like page navigation and access to secure areas of the
                website. The website cannot function properly without these
                cookies.
              </p>
              <table className={classes.CookieDeclarationTable}>
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Provider
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Purpose
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Expiry
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.CookieDeclarationTableCell}>
                      CookieConsent
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      collabhq.app
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      Stores the user's cookie consent state for the current
                      domain
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      1 year
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      HTTP Cookie
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={classes.CookieDeclarationType} lang="en" dir="ltr">
              <p className={classes.CookieDeclarationTypeHeader}>
                Unclassified
              </p>
              <p className={classes.CookieDeclarationTypeDescription}>
                Unclassified cookies are cookies that we are in the process of
                classifying, together with the providers of individual cookies.
              </p>
              <table className={classes.CookieDeclarationTable}>
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Provider
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Purpose
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Expiry
                    </th>
                    <th
                      scope="col"
                      className={classes.CookieDeclarationTableHeader}
                      dir="ltr"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.CookieDeclarationTableCell}>
                      persist:root
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      collabhq.app
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      Stores the application business logic state
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      Persistent
                    </td>
                    <td className={classes.CookieDeclarationTableCell}>
                      HTML Local Storage
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className={classes.footer}>
          <div className={classes.footerSubContent}>
            <Link
              color="secondary"
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
              color="secondary"
              href={WEBSITE_TERMS_URL}
              target="_blank"
              rel="noopener"
            >
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className={classes.footerSubText}
              >
                Terms
              </Typography>
            </Link>
            <Link
              color="secondary"
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
            <Link
              color="secondary"
              href={FEEDBACK_URL}
              target="_blank"
              rel="noopener"
            >
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className={classes.footerSubText}
              >
                Feedback
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
