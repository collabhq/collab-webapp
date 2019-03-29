import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import { showEditableCard } from "../../actions/workspaceCard";
import EditableWorkspaceCard from "../EditableWorkspaceCard/EditableWorkspaceCard";

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

function WorkspaceCard(props) {
  const {
    classes,
    theme,
    editableCardShown,
    showEditableCard: showEditableCardDialog
  } = props;

  const handleEditableCardDialog = () => {
    if (!editableCardShown) {
      showEditableCardDialog();
    }
  };

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
              R
            </Avatar>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Typography gutterBottom variant="h5" component="h2">
            Title
          </Typography>
          <Typography component="p">
            This is random text. This is random text. This is random text. This
            is random text. This is random text. This is random text. This is
            random text. This is random text.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => handleEditableCardDialog()}
            className={classes.editCard}
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
      <EditableWorkspaceCard />
    </div>
  );
}

WorkspaceCard.defaultProps = {
  editableCardShown: false
};

WorkspaceCard.propTypes = {
  editableCardShown: PropTypes.bool,
  showEditableCard: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({ workspaceCard: { editableCardShown } }) => ({
  editableCardShown
});

const mapDispatchToProps = {
  showEditableCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(WorkspaceCard));
