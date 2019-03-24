import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { hideCreateWorkspaceDialog } from "../../actions/landingPage";

const CreateWorkspaceDialog = ({
  showCreateWorkspaceDialog,
  hideCreateWorkspaceDialog: hideWorkspaceDialog
}) => (
  <div>
    <Dialog
      open={showCreateWorkspaceDialog}
      onClose={() => hideWorkspaceDialog()}
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
        <Button onClick={() => hideWorkspaceDialog()} color="secondary">
          Cancel
        </Button>
        <Button color="primary">Create Workspace</Button>
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
)(withStyles({})(CreateWorkspaceDialog));
