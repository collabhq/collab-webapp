import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from "@material-ui/core";
import { withStyles, withTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { hideCreateWorkspaceDialog } from "../../actions/landingPage";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const CreateWorkspaceDialog = ({
  showCreateWorkspaceDialog,
  hideCreateWorkspaceDialog: hideWorkspaceDialog
}) => (
  <div>
    <Dialog
      open={showCreateWorkspaceDialog}
      onClose={() => hideWorkspaceDialog()}
      TransitionComponent={Transition}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Workspace</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a name for the workspace and your full name to get
          started.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="room_name"
          label="Workspace Name"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="user_name"
          label="User Full Name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => hideWorkspaceDialog()}
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Create Workspace
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

CreateWorkspaceDialog.defaultProps = {
  showCreateWorkspaceDialog: false
};

CreateWorkspaceDialog.propTypes = {
  showCreateWorkspaceDialog: PropTypes.bool,
  hideCreateWorkspaceDialog: PropTypes.func.isRequired
};

const mapStateToProps = ({ landingPage: { showCreateWorkspaceDialog } }) => ({
  showCreateWorkspaceDialog
});

const mapDispatchToProps = {
  hideCreateWorkspaceDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme({})(CreateWorkspaceDialog));
