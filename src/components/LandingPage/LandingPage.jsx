import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import scrollToComponent from "react-scroll-to-component";
import { isMobile } from "react-device-detect";
import CloudCircle from "@material-ui/icons/CloudCircle";
import {
  AppBar,
  Button,
  Typography,
  Link,
  Toolbar,
  Divider,
  Avatar,
  IconButton
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import EmailIcon from "@material-ui/icons/Email";
import TopIcon from "@material-ui/icons/KeyboardArrowUp";
import SecurityIcon from "@material-ui/icons/Security";
import PricingIcon from "@material-ui/icons/MoneyOff";
import CodeIcon from "@material-ui/icons/Code";
import LaunchIcon from "@material-ui/icons/Launch";
import TeamIcon from "@material-ui/icons/People";
import WorkspaceIcon from "@material-ui/icons/Devices";
import CreateWorkspaceDialog from "../CreateWorkspaceDialog/CreateWorkspaceDialog";
import { showCreateWorkspaceDialog } from "../../actions/landingPage";
import { setJoinWorkspaceUUID } from "../../actions/createWorkspaceDialog";
import {
  WEBSITE_PRIVACY_URL,
  GITHUB_ORG_URL,
  FEEDBACK_URL,
  KN_URL,
  SG_URL,
  KN_WEB_URL,
  SG_WEB_URL,
  WEBSITE_PUBLIC_URL,
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
    position: "fixed",
    zIndex: "100"
  },
  mainContent: {
    width: "100%"
  },
  subMainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap"
  },
  subSections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing.unit * 2,
    width: "75%"
  },
  overviewSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    width: "100%"
  },
  mainLogoSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    width: "100%",
    marginTop: "15%"
  },
  teamSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    width: "100%"
  },
  teamSubSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4
  },
  footer: {
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 0.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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
    alignItems: "center",
    flexWrap: "wrap"
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
    width: 150,
    margin: theme.spacing.unit * 2
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
  headerSubText: {
    color: theme.palette.secondary.main,
    textTransform: "none"
  },
  appBarCustom: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    boxShadow:
      "0px 0px 1px -4px rgba(0,0,0,0.2), 0px 0px 4px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  divider: {
    width: "100%",
    marginTop: "10%",
    marginBottom: "10%"
  },
  bigAvatar: {
    margin: theme.spacing.unit * 1,
    marginLeft: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 1.5,
    width: 100,
    height: 100
  },
  socialIcons: {
    color: theme.palette.primary.main
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
    const { classes, showWorkspaceDialog } = this.props;

    return (
      <div
        className={classes.root}
        ref={section => {
          this.Top = section;
        }}
      >
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
              <div className={classes.appBarRight}>
                <Button
                  color="secondary"
                  onClick={() => showWorkspaceDialog()}
                  className={classes.headerSubText}
                >
                  Get Started
                </Button>
                {isMobile === false ? (
                  <div className={classes.appBarRight}>
                    <Button
                      color="secondary"
                      onClick={() =>
                        scrollToComponent(this.Overview, {
                          offset: 0,
                          align: "middle",
                          duration: 750
                        })
                      }
                      className={classes.headerSubText}
                    >
                      Overview
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() =>
                        scrollToComponent(this.Privacy, {
                          offset: 0,
                          align: "middle",
                          duration: 750
                        })
                      }
                      className={classes.headerSubText}
                    >
                      Privacy
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() =>
                        scrollToComponent(this.Pricing, {
                          offset: 0,
                          align: "middle",
                          duration: 750
                        })
                      }
                      className={classes.headerSubText}
                    >
                      Pricing
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() =>
                        scrollToComponent(this.Contribute, {
                          offset: 0,
                          align: "middle",
                          duration: 750
                        })
                      }
                      className={classes.headerSubText}
                    >
                      Contribute
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() =>
                        scrollToComponent(this.Team, {
                          offset: 0,
                          align: "middle",
                          duration: 750
                        })
                      }
                      className={classes.headerSubText}
                    >
                      Team
                    </Button>
                  </div>
                ) : (
                  undefined
                )}
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.subMainContent}>
            <div className={classes.subSections}>
              <div className={classes.overviewSection}>
                <div className={classes.mainLogoSection}>
                  <CloudCircle className={classes.mainLogo} />
                </div>
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Collab
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Share data and collaborate anonymously, in real-time
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => showWorkspaceDialog()}
                  className={classes.getStartedButton}
                  size="large"
                >
                  Get Started
                </Button>
                <CreateWorkspaceDialog />
              </div>
              <div className={classes.overviewSection}>
                <Divider variant="middle" className={classes.divider} />
              </div>
              <div
                className={classes.overviewSection}
                ref={section => {
                  this.Overview = section;
                }}
              >
                <WorkspaceIcon className={classes.bigAvatar} />
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  One workspace
                </Typography>
              </div>
              <div className={classes.overviewSection}>
                <Typography variant="body1" color="inherit" align="center">
                  Share all your data in one place.
                </Typography>
                <Typography variant="body1" color="inherit" align="center">
                  Collaborate with your team in real-time.
                </Typography>
                <Typography variant="body1" color="inherit" align="center">
                  Access your workspace from any device or platform.
                </Typography>
              </div>
              <div className={classes.overviewSection}>
                <Divider variant="middle" className={classes.divider} />
              </div>
              <div
                className={classes.overviewSection}
                ref={section => {
                  this.Privacy = section;
                }}
              >
                <SecurityIcon className={classes.bigAvatar} />
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Privacy
                </Typography>
              </div>
              <div className={classes.overviewSection}>
                <Typography
                  variant="body1"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Your data does not remain online forever.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  No personally identifiable data is collected.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  No sign up or registration required.
                </Typography>
              </div>
              <div className={classes.overviewSection}>
                <Divider variant="middle" className={classes.divider} />
              </div>
              <div
                className={classes.overviewSection}
                ref={section => {
                  this.Pricing = section;
                }}
              >
                <PricingIcon className={classes.bigAvatar} />
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Pricing
                </Typography>
                <Typography
                  variant="h4"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Free on web, forever
                </Typography>
              </div>
              <div className={classes.overviewSection}>
                <Divider variant="middle" className={classes.divider} />
              </div>
              <div
                className={classes.overviewSection}
                ref={section => {
                  this.Contribute = section;
                }}
              >
                <CodeIcon className={classes.bigAvatar} />
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Contribute
                </Typography>
                <Typography
                  variant="h4"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  We believe in open source.
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Fork our work on github and contribute.
                </Typography>
                <Link
                  color="secondary"
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton color="secondary" aria-label="Github">
                    <LaunchIcon />
                  </IconButton>
                </Link>
              </div>
              <div className={classes.overviewSection}>
                <Divider variant="middle" className={classes.divider} />
              </div>
              <div
                className={classes.overviewSection}
                ref={section => {
                  this.Team = section;
                }}
              >
                <TeamIcon className={classes.bigAvatar} />
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Meet the team
                </Typography>
                <div className={classes.teamSection}>
                  <div className={classes.teamSubSection}>
                    <Avatar
                      alt="Karthik Narumanchi"
                      src="https://avatars0.githubusercontent.com/u/10250307?v=4"
                      className={classes.bigAvatar}
                    />
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      align="center"
                    >
                      Karthik Narumanchi
                    </Typography>

                    <div className={classes.teamSection}>
                      <Link
                        color="primary"
                        href={KN_WEB_URL}
                        target="_blank"
                        rel="noopener"
                      >
                        <IconButton color="primary" aria-label="Website">
                          <PublicIcon />
                        </IconButton>
                      </Link>
                      <Link
                        color="primary"
                        href={KN_URL}
                        target="_blank"
                        rel="noopener"
                      >
                        <IconButton color="primary" aria-label="Email">
                          <EmailIcon />
                        </IconButton>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.teamSubSection}>
                    <Avatar
                      alt="Sudesh Gutta"
                      src="https://avatars0.githubusercontent.com/u/7446138?s=400&v=4"
                      className={classes.bigAvatar}
                    />
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      align="center"
                    >
                      Sudesh Gutta
                    </Typography>

                    <div className={classes.teamSection}>
                      <Link
                        color="primary"
                        href={SG_WEB_URL}
                        target="_blank"
                        rel="noopener"
                      >
                        <IconButton color="primary" aria-label="Website">
                          <PublicIcon />
                        </IconButton>
                      </Link>
                      <Link
                        color="primary"
                        href={SG_URL}
                        target="_blank"
                        rel="noopener"
                      >
                        <IconButton color="primary" aria-label="Email">
                          <EmailIcon />
                        </IconButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={classes.footer}>
          <IconButton
            aria-label="Scroll-to-top"
            onClick={() =>
              scrollToComponent(this.Top, {
                offset: 0,
                align: "top",
                duration: 500
              })
            }
          >
            <TopIcon className={classes.socialIcons} />
          </IconButton>
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
