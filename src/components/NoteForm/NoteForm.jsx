import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setTitle, setContent } from "../../actions/noteForm";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 1.5
  }
});

const NoteForm = ({ classes, note, title, content }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5" color="inherit">
        New Note
      </Typography>
      <form className={classes.form} noValidate={false} autoComplete="off">
        <TextField
          id="standard-title"
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth
          value={note.title}
          onChange={event => title(event.target.value)}
        />
        <TextField
          id="standard-multiline-content"
          multiline
          rows="4"
          label="Note"
          autoFocus
          required
          maxheight="50%"
          variant="outlined"
          margin="normal"
          fullWidth
          value={note.content}
          onChange={event => content(event.target.value)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ noteForm: { note } }) => ({ note });
const mapDispatchToProps = { title: setTitle, content: setContent };

NoteForm.defaultProps = {
  note: {
    title: "",
    content: ""
  }
};

NoteForm.propTypes = {
  title: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
  note: PropTypes.object,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(NoteForm));
