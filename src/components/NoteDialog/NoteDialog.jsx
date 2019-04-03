import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide
} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { hideNoteDialog, saveDialogContent } from "../../actions/noteDialog";
import NoteForm from "../NoteForm/NoteForm";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const NoteDialog = ({ open, hide, save }) => (
  <div>
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      TransitionComponent={Transition}
      onClose={() => hide()}
    >
      <DialogContent>
        <NoteForm />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => hide()} variant="contained" color="secondary">
          Cancel
        </Button>
        <Button onClick={() => save()} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

NoteDialog.defaultProps = {
  open: false
};

NoteDialog.propTypes = {
  open: PropTypes.bool,
  hide: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
};

const mapStateToProps = ({ noteDialog: { open } }) => ({
  open
});

const mapDispatchToProps = {
  hide: hideNoteDialog,
  save: saveDialogContent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme({})(NoteDialog));
