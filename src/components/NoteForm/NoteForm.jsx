import React from "react";
import { InputBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

const NoteForm = ({ classes, note }) => {
  return (
    <div className={classes.root}>
      <InputBase
        id="note-title"
        className={classes.textField}
        placeholder="Title"
        fullWidth
        value={note.title}
      />
      <InputBase
        id="note-value"
        multiline
        className={classes.textField}
        placeholder="Note"
        fullWidth
        maxheight="50%"
        value={note.content}
      />
    </div>
  );
};

const mapStateToProps = ({ noteForm: { note } }) => ({
  note
});

NoteForm.defaultProps = {
  note: {}
};

NoteForm.propTypes = {
  note: PropTypes.object,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles, { withTheme: true })(NoteForm));
