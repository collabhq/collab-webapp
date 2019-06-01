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
  textMarginTop: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});
/* eslint-disable no-script-url */
// eslint-disable-next-line react/prefer-stateless-function
class TermsPage extends React.Component {
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
              Terms and Conditions for CollabHQ
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Introduction
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              These Website Terms and Conditions written on this webpage shall
              manage your use of our website, Collab accessible at
              https://collabhq.app.
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Terms and Conditions.
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              Minors or people below 18 years old are not allowed to use this
              Website.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Intellectual Property Rights
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              Other than the content you own, under these Terms, CollabHQ and/or
              its licensors own all the intellectual property rights and
              materials contained in this Website.
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              You are granted limited license only for purposes of viewing the
              material contained on this Website.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Restrictions
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              You are specifically restricted from all of the following:
            </Typography>

            <ul>
              <li>publishing any Website material in any other media;</li>
              <li>
                selling, sublicensing and/or otherwise commercializing any
                Website material;
              </li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>
                using this Website in any way that is or may be damaging to this
                Website;
              </li>
              <li>
                using this Website in any way that impacts user access to this
                Website;
              </li>
              <li>
                using this Website contrary to applicable laws and regulations,
                or in any way may cause harm to the Website, or to any person or
                business entity;
              </li>
              <li>
                engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website;
              </li>
              <li>
                using this Website to engage in any advertising or marketing.
              </li>
            </ul>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              Certain areas of this Website are restricted from being access by
              you and CollabHQ may further restrict access by you to any areas
              of this Website, at any time, in absolute discretion. Any user ID
              and password you may have for this Website are confidential and
              you must maintain confidentiality as well.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Your Content
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              In these Website Terms and Conditions, "Your Content" shall mean
              any audio, video text, images or other material you choose to
              display on this Website. By displaying Your Content, you grant
              CollabHQ a non-exclusive, worldwide irrevocable, sub licensable
              license to use, reproduce, adapt, publish, translate and
              distribute it in any and all media.
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              Your Content must be your own and must not be invading any
              third-party’s rights. CollabHQ reserves the right to remove any of
              Your Content from this Website at any time without notice.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Your Privacy
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              Please read Privacy Policy.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              No warranties
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              This Website is provided "as is," with all faults, and CollabHQ
              express no representations or warranties, of any kind related to
              this Website or the materials contained on this Website. Also,
              nothing contained on this Website shall be interpreted as advising
              you.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Limitation of liability
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              In no event shall CollabHQ, nor any of its creators, officers,
              directors and employees, shall be held liable for anything arising
              out of or in any way connected with your use of this Website
              whether such liability is under contract.  CollabHQ, including its
              creators, officers, directors and employees shall not be held
              liable for any indirect, consequential or special liability
              arising out of or in any way related to your use of this Website.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Indemnification
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              You hereby indemnify to the fullest extent CollabHQ from and
              against any and/or all liabilities, costs, demands, causes of
              action, damages and expenses arising in any way related to your
              breach of any of the provisions of these Terms.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Severability
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              If any provision of these Terms is found to be invalid under any
              applicable law, such provisions shall be deleted without affecting
              the remaining provisions herein.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Variation of Terms
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              CollabHQ is permitted to revise these Terms at any time as it sees
              fit, and by using this Website you are expected to review these
              Terms on a regular basis.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Assignment
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              The CollabHQ is allowed to assign, transfer, and subcontract its
              rights and/or obligations under these Terms without any
              notification. However, you are not allowed to assign, transfer, or
              subcontract any of your rights and/or obligations under these
              Terms.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Entire Agreement
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              These Terms constitute the entire agreement between CollabHQ and
              you in relation to your use of this Website, and supersede all
              prior agreements and understandings.
            </Typography>

            <Typography
              variant="h5"
              color="inherit"
              align="center"
              gutterBottom
              className={classes.textMarginTop}
            >
              Governing Law & Jurisdiction
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              align="center"
              gutterBottom
            >
              These Terms will be governed by and interpreted in accordance with
              the laws of India, and you submit to the non-exclusive
              jurisdiction of the state and federal courts located in India for
              the resolution of any disputes.
            </Typography>
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

TermsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  null
)(withStyles(styles, { withTheme: true })(TermsPage));
