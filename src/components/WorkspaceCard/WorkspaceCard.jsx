import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Grid
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import { editNote } from "../../actions/workspaceCard";

const styles = theme => ({
  card: {
    maxWidth: 400
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

const WorkspaceCard = ({ classes, edit, uuid, avatar, title, content }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.cardHeader}
          >
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {avatar}
            </Avatar>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{content}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton>
            <DeleteIcon />
          </IconButton>
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
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  edit: editNote
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(WorkspaceCard));
