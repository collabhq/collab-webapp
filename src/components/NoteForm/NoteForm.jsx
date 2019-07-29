import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactMde, { commands } from "react-mde";
import * as Showdown from "showdown";
import xssFilter from "showdown-xss-filter";
import { isMobileOnly } from "react-device-detect";
import "../../ui/styles/react-mde/react-mde-all.css";

import { setTitle, setContent, setTab } from "../../actions/noteForm";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 1.5
  }
});

const NoteForm = ({
  classes,
  note,
  setNoteTitle,
  setNoteContent,
  tab,
  setTabValue
}) => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
    extensions: [xssFilter]
  });
  const allCommands = [
    {
      commands: [
        commands.headerCommand,
        commands.boldCommand,
        commands.italicCommand,
        commands.strikeThroughCommand
      ]
    },
    {
      commands: [
        commands.linkCommand,
        commands.codeCommand,
        commands.quoteCommand,
        commands.imageCommand
      ]
    },
    {
      commands: [commands.unorderedListCommand]
    }
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="inherit">
        {note.uuid === undefined ? "New Card" : "Edit Card"}
      </Typography>
      <form className={classes.form} autoComplete="off">
        <TextField
          id="standard-title"
          label="Title"
          required
          variant="outlined"
          margin="normal"
          fullWidth
          value={note.title}
          onChange={event => setNoteTitle(event.target.value)}
        />
        {isMobileOnly === false ? (
          <ReactMde
            value={note.content}
            onChange={val => setNoteContent(val)}
            selectedTab={tab}
            onTabChange={val => setTabValue(val)}
            loadingPreview="Rendering Markdown"
            commands={allCommands}
            minEditorHeight={720}
            minPreviewHeight={720}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        ) : (
          <ReactMde
            value={note.content}
            onChange={val => setNoteContent(val)}
            selectedTab={tab}
            onTabChange={val => setTabValue(val)}
            loadingPreview="Rendering Markdown"
            commands={allCommands}
            minEditorHeight={360}
            minPreviewHeight={360}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        )}
      </form>
    </div>
  );
};

const mapStateToProps = ({ noteForm: { note, tab } }) => ({ note, tab });
const mapDispatchToProps = {
  setNoteTitle: setTitle,
  setNoteContent: setContent,
  setTabValue: setTab
};

NoteForm.defaultProps = {
  note: {
    title: "",
    content: ""
  }
};

NoteForm.propTypes = {
  setNoteTitle: PropTypes.func.isRequired,
  setNoteContent: PropTypes.func.isRequired,
  setTabValue: PropTypes.func.isRequired,
  note: PropTypes.object,
  tab: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(NoteForm));
