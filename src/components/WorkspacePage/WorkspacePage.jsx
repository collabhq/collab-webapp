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
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Paper,
  Slide
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AddIcon from "@material-ui/icons/Add";
import WorkspacePageContent from "../WorkspacePageContent/WorkspacePageContent";
import {
  showDrawer,
  hideDrawer,
  fabChecked,
  fabHidden
} from "../../actions/workspacePage";
import NoteForm from "../NoteForm/NoteForm";
import NoteDialog from "../NoteDialog/NoteDialog";
import { editNote } from "../../actions/workspaceCard";

const drawerWidth = 240;

const styles = theme => ({
  page: {
    height: "-webkit-fill-available"
  },
  root: {
    display: "flex"
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
    marginLeft: 12,
    marginRight: 36
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
    padding: "0 8px",
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
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
  },
  fabExtendedIcon: {
    marginRight: theme.spacing.unit
  },
  newNote: {
    position: "fixed",
    top: "auto",
    left: "auto",
    right: "12.5%",
    bottom: "12.5%",
    width: "75%",
    height: "75%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    zIndex: theme.zIndex.drawer + 2,
    padding: theme.spacing.unit * 2
  },
  newNotePaper: {}
});

const users = ["Alex", "Price", "John", "Jim"];
const noteCategories = ["Favorite Notes", "All Notes"];

function WorkspacePage(props) {
  const { classes, theme, drawerOpen, fabClicked, newNote } = props;
  const colorWhite = {
    color: theme.palette.primary.contrastText
  };
  return (
    <div className={classes.page}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: drawerOpen
          })}
        >
          <Toolbar disableGutters={!drawerOpen}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => props.showDrawer()}
              className={classNames(classes.menuButton, {
                [classes.hide]: drawerOpen
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              My Workspace
            </Typography>
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
            <Typography variant="h5" style={colorWhite}>
              puffnote
            </Typography>
            <IconButton style={colorWhite} onClick={() => props.hideDrawer()}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {noteCategories.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={colorWhite}>
                  {index % 2 === 0 ? <FavoriteIcon /> : <AppsIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" style={colorWhite}>
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {users.map(text => (
              <ListItem button key={text}>
                <ListItemIcon style={colorWhite}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" style={colorWhite}>
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <ListItem button key="Settings">
            <ListItemIcon style={colorWhite}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" style={colorWhite}>
                  Settings
                </Typography>
              }
            />
          </ListItem>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <WorkspacePageContent notes />
        </main>
      </div>
      <div className={classes.fabDiv}>
        <Fab
          color="primary"
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
    </div>
  );
}

WorkspacePage.propTypes = {
  showDrawer: PropTypes.func.isRequired,
  hideDrawer: PropTypes.func.isRequired,
  fabChecked: PropTypes.func.isRequired,
  fabHidden: PropTypes.func.isRequired,
  newNote: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  fabClicked: PropTypes.bool.isRequired
};

const mapStateToProps = ({ workspacePage: { drawerOpen, fabClicked } }) => ({
  drawerOpen,
  fabClicked
});

const mapDispatchToProps = {
  showDrawer,
  hideDrawer,
  fabChecked,
  fabHidden,
  newNote: editNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(WorkspacePage));
