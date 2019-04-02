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
import { hideEditableCard } from "../../actions/workspaceCard";
import WorkspaceNewNoteContent from "../WorkspaceNewNoteContent/WorkspaceNewNoteContent";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const WorkspaceEditNoteDialog = ({
  editableCardShown,
  hideEditableCard: hideEditableCardDialog
}) => (
  <div>
    <Dialog
      fullWidth
      maxWidth="sm"
      open={editableCardShown !== undefined}
      TransitionComponent={Transition}
      onClose={() => hideEditableCardDialog()}
    >
      <DialogContent>
        <WorkspaceNewNoteContent />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => hideEditableCardDialog()}
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => hideEditableCardDialog()}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

WorkspaceEditNoteDialog.defaultProps = {
  editableCardShown: undefined
};

WorkspaceEditNoteDialog.propTypes = {
  editableCardShown: PropTypes.bool,
  hideEditableCard: PropTypes.func.isRequired
};

const mapStateToProps = ({ workspaceCard: { editableCardShown } }) => ({
  editableCardShown
});

const mapDispatchToProps = {
  hideEditableCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme({})(WorkspaceEditNoteDialog));
