import React from "react";
import { InputBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function WorkspaceNewNoteContent(props) {
  const { classes, theme } = props;
  return (
    <div className={classes.root}>
      <InputBase
        id="note-title"
        className={classes.textField}
        placeholder="Title"
        fullWidth
      />
      <InputBase
        id="note-value"
        multiline
        className={classes.textField}
        placeholder="Note"
        fullWidth
        maxHeight="50%"
      />
    </div>
  );
}

WorkspaceNewNoteContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WorkspaceNewNoteContent);
