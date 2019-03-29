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
import WorkspaceNewNoteExpansionPanel from "../WorkspaceNewNoteExpansionPanel/WorkspaceNewNoteExpansionPanel";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const EditableWorkspaceCard = ({
  editableCardShown,
  hideEditableCard: hideEditableCardDialog
}) => (
  <div>
    <Dialog
      fullWidth
      maxWidth="sm"
      open={editableCardShown}
      TransitionComponent={Transition}
      onClose={() => hideEditableCardDialog()}
    >
      <DialogContent>
        <WorkspaceNewNoteExpansionPanel />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => hideEditableCardDialog()} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => hideEditableCardDialog()} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

EditableWorkspaceCard.defaultProps = {
  editableCardShown: false
};

EditableWorkspaceCard.propTypes = {
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
)(withTheme({})(EditableWorkspaceCard));
