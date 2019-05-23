import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import classNames from "classnames";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Grid
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import { editNote, deleteNote } from "../../actions/workspaceCard";

const styles = theme => ({
  card: {
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 300,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  mobileCard: {
    maxWidth: 225,
    minWidth: 225,
    maxHeight: 250,
    minHeight: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cardHeader: {
    marginBottom: 10
  },
  cardContent: {
    flexGrow: 1
  },
  editCard: {
    marginLeft: "auto"
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
});

const WorkspaceCard = ({
  classes,
  edit,
  delNote,
  uuid,
  avatar,
  title,
  content,
  userUUID,
  noteUserUUID
}) => {
  return (
    <div>
      <Card
        className={classNames(classes.card, {
          [classes.mobileCard]: isMobile
        })}
      >
        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.cardHeader}
          >
            <Avatar aria-label="Avatar" className={classes.avatar}>
              {avatar}
            </Avatar>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </Grid>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography noWrap>{content}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {noteUserUUID === userUUID ? (
            <IconButton onClick={() => delNote({ uuid })}>
              <DeleteIcon />
            </IconButton>
          ) : (
            undefined
          )}
          <IconButton
            onClick={() => edit({ uuid, avatar, title, content })}
            className={classes.editCard}
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

WorkspaceCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
  delNote: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  userUUID: PropTypes.string.isRequired,
  noteUserUUID: PropTypes.string.isRequired
};

const mapStateToProps = ({ workspacePage: { userUUID } }) => ({
  userUUID
});

const mapDispatchToProps = {
  edit: editNote,
  delNote: deleteNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(WorkspaceCard));
