import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Avatar,
  Link,
  Tooltip,
  Zoom
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import BookmarkIcon from "@material-ui/icons/Bookmark";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
// import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import AppsIcon from "@material-ui/icons/Apps";
import AddIcon from "@material-ui/icons/Add";
import WorkspacePageContent from "../WorkspacePageContent/WorkspacePageContent";
import WebSocketClient from "../WebSocketClient/WebSocketClient";
import DeleteWorkspaceDialog from "../DeleteWorkspaceDialog/DeleteWorkspaceDialog";
import HelpDialog from "../HelpDialog/HelpDialog";
import {
  showDrawer,
  hideDrawer,
  fabChecked,
  fabHidden,
  showCreateUserDialog,
  setSelectedUser
} from "../../actions/workspacePage";
import NoteDialog from "../NoteDialog/NoteDialog";
import { editNote } from "../../actions/workspaceCard";
import AddUserDialog from "../AddUserDialog/AddUserDialog";
import { WEBSITE_PUBLIC_URL } from "../../actions/constants";
import { showHelpDialog } from "../../actions/helpDialog";

const drawerWidth = 240;

const styles = theme => ({
  page: {
    height: "100%",
    backgroundColor: theme.palette.background.paper
  },
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: theme.spacing.unit * 0.5,
    marginRight: theme.spacing.unit * 0.5
  },
  addUserButton: {
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: theme.spacing.unit * 1.5
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.primary.main
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    },
    backgroundColor: theme.palette.primary.main
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "0",
    paddingRight: "0",
    ...theme.mixins.toolbar
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  fabDiv: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
    bottom: theme.spacing.unit * 4,
    alignItems: "center"
  },
  fab: {
    zIndex: theme.zIndex.drawer + 2,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
  },
  fabExtendedIcon: {
    marginRight: theme.spacing.unit
  },
  avatar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    width: 25,
    height: 25,
    fontSize: "inherit"
  },
  helpbutton: {
    marginLeft: "auto",
    marginRight: theme.spacing.unit * 1
  },
  helpicon: {
    width: 30,
    height: 30
  },
  drawerFooter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%"
  },
  drawerFooterIcons: {
    width: 20,
    height: 20
  },
  toolbarLeftMargin: {
    marginLeft: "18px"
  },
  workspaceNameText: {
    paddingLeft: "24px"
  }
});

function WorkspacePage(props) {
  const {
    classes,
    theme,
    drawerOpen,
    showCreateUserDialog: showUserDialog,
    workspaceName,
    users,
    selectUser,
    showHelp
  } = props;
  const colorWhite = {
    color: theme.palette.primary.contrastText
  };
  const colorActions = {
    color: theme.palette.common.white
  };
  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1]
    }
  }))(Tooltip);
  return (
    <div className={classes.page}>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: drawerOpen
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => props.showDrawer()}
              className={classNames(classes.menuButton, {
                [classes.hide]: drawerOpen
              })}
            >
              <MenuIcon style={colorActions} />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.workspaceNameText}
            >
              {workspaceName}
            </Typography>
            <LightTooltip
              disableFocusListener
              TransitionComponent={Zoom}
              title="Help"
              className={classes.helpbutton}
            >
              <IconButton style={colorActions} onClick={() => showHelp()}>
                <HelpIcon aria-label="Help" className={classes.helpicon} />
              </IconButton>
            </LightTooltip>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: drawerOpen,
              [classes.drawerClose]: !drawerOpen
            })
          }}
          open={drawerOpen}
        >
          <div className={classes.toolbar}>
            <Link href={WEBSITE_PUBLIC_URL} target="_blank" rel="noopener">
              <Typography
                variant="h5"
                style={colorWhite}
                className={classes.toolbarLeftMargin}
              >
                Collab
              </Typography>
            </Link>
            <IconButton style={colorActions} onClick={() => props.hideDrawer()}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider light />
          <List>
            {/* <ListItem button key={0}>
              <ListItemIcon style={colorWhite}>
                <BookmarkIcon style={colorSecondary} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" style={colorWhite}>
                    {"Bookmarked Cards"}
                  </Typography>
                }
              />
            </ListItem> */}
            <ListItem button key={1} onClick={() => selectUser(undefined)}>
              <LightTooltip
                disableFocusListener
                TransitionComponent={Zoom}
                title="All Cards"
              >
                <ListItemIcon style={colorWhite}>
                  <AppsIcon style={colorActions} />
                </ListItemIcon>
              </LightTooltip>
              <ListItemText
                primary={
                  <Typography variant="body1" style={colorWhite}>
                    {"All Cards"}
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Divider light />
          <List>
            <ListItem onClick={() => showUserDialog()} button key="Settings">
              <LightTooltip
                disableFocusListener
                TransitionComponent={Zoom}
                title="Add User to Workspace"
              >
                <ListItemIcon
                  onClick={() => showUserDialog()}
                  style={colorActions}
                >
                  <PersonAddIcon />
                </ListItemIcon>
              </LightTooltip>
              <ListItemText
                primary={
                  <Typography variant="body1" style={colorWhite}>
                    Add User
                  </Typography>
                }
              />
            </ListItem>
            {users.map(({ uuid, username }) => (
              <ListItem button key={uuid} onClick={() => selectUser(uuid)}>
                <LightTooltip
                  disableFocusListener
                  TransitionComponent={Zoom}
                  title={`${username}'s Cards`}
                >
                  <ListItemIcon>
                    <Avatar aria-label="Avatar" className={classes.avatar}>
                      {username.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemIcon>
                </LightTooltip>
                <ListItemText
                  primary={
                    <Typography variant="body1" style={colorWhite}>
                      {username}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          {/* <Divider light />
          <ListItem button key="Settings">
            <ListItemIcon style={colorSecondary}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" style={colorWhite}>
                  Settings
                </Typography>
              }
            />
          </ListItem> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <WorkspacePageContent notes />
        </main>
      </div>
      <div className={classes.fabDiv}>
        <Fab
          color="secondary"
          variant="extended"
          aria-label="Add"
          className={classes.fab}
          onClick={() => props.newNote()}
        >
          <AddIcon className={classes.fabExtendedIcon} />
          Add
        </Fab>
      </div>
      <NoteDialog />
      <AddUserDialog />
      <WebSocketClient />
      <DeleteWorkspaceDialog />
      <HelpDialog />
    </div>
  );
}

WorkspacePage.defaultProps = {
  workspaceName: "My Workspace"
};

WorkspacePage.propTypes = {
  showDrawer: PropTypes.func.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  fabChecked: PropTypes.func.isRequired,
  fabHidden: PropTypes.func.isRequired,
  newNote: PropTypes.func.isRequired,
  showCreateUserDialog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  fabClicked: PropTypes.bool.isRequired,
  workspaceName: PropTypes.string,
  users: PropTypes.arrayOf(String).isRequired,
  selectUser: PropTypes.func.isRequired,
  showHelp: PropTypes.func.isRequired
};

const mapStateToProps = ({
  workspacePage: { drawerOpen, fabClicked, workspaceName, users }
}) => ({
  drawerOpen,
  fabClicked,
  workspaceName,
  users
});

const mapDispatchToProps = {
  showDrawer,
  hideDrawer,
  fabChecked,
  fabHidden,
  newNote: editNote,
  showCreateUserDialog,
  selectUser: setSelectedUser,
  showHelp: showHelpDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(WorkspacePage));
