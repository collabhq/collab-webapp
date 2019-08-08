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
  Grid,
  Zoom,
  Tooltip
} from "@material-ui/core";
// import BookmarkIcon from "@material-ui/icons/Bookmark";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExportIcon from "@material-ui/icons/CloudDownload";
import * as Showdown from "showdown";
import xssFilter from "showdown-xss-filter";
import ReactHtmlParser from "react-html-parser";
import fileDownload from "js-file-download";
import { withStyles } from "@material-ui/core/styles";
import { editNote, deleteNote } from "../../actions/workspaceCard";

const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  mobileCard: {
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
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
    extensions: [xssFilter]
  });
  const markdownashtml = converter.makeHtml(content);
  const fileName = title ? `${title}.md` : "Collab-Note.md";
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
            {/* <IconButton>
              <BookmarkIcon />
            </IconButton> */}
          </Grid>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography component="span">
            {ReactHtmlParser(markdownashtml)}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {noteUserUUID === userUUID ? (
            <Tooltip
              disableFocusListener
              TransitionComponent={Zoom}
              title="Delete Card"
            >
              <IconButton onClick={() => delNote({ uuid })}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            undefined
          )}
          <Tooltip
            disableFocusListener
            TransitionComponent={Zoom}
            title="Edit Card"
          >
            <IconButton onClick={() => edit({ uuid, avatar, title, content })}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            disableFocusListener
            TransitionComponent={Zoom}
            title="Download as Markdown"
          >
            <IconButton onClick={() => fileDownload(content, fileName)}>
              <ExportIcon />
            </IconButton>
          </Tooltip>
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
