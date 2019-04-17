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
import { withTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { hideCreateWorkspaceDialog } from "../../actions/landingPage";
import {
  createNewWorkspace,
  joinUserToWorkspace,
  setWorkspaceName,
  setUsername
} from "../../actions/createWorkspaceDialog";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const CreateWorkspaceDialog = ({
  showCreateWorkspaceDialog,
  hideWorkspaceDialog,
  newWorkspace,
  joinWorkspace,
  newWorkspaceName,
  newUsername,
  workspaceName,
  username,
  joinWorkspaceUUID,
  history
}) => (
  <div>
    <Dialog
      open={showCreateWorkspaceDialog}
      onClose={() => hideWorkspaceDialog()}
      TransitionComponent={Transition}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {joinWorkspaceUUID === null ? "New Workspace" : "Join Workspace"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter
          {joinWorkspaceUUID === null ? " a name for the workspace and " : " "}
          your full name to get started.
        </DialogContentText>
        {joinWorkspaceUUID === null ? (
          <TextField
            autoFocus
            margin="dense"
            id="room_name"
            label="Workspace Name"
            type="text"
            variant="outlined"
            fullWidth
            value={workspaceName}
            onChange={evt => {
              newWorkspaceName(evt.target.value);
            }}
          />
        ) : (
          undefined
        )}
        <TextField
          margin="dense"
          id="user_name"
          label="User Full Name"
          type="text"
          variant="outlined"
          fullWidth
          value={username}
          onChange={evt => newUsername(evt.target.value)}
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (joinWorkspaceUUID === null) {
              newWorkspace(history.push);
            } else {
              joinWorkspace(history.push);
            }
          }}
        >
          {joinWorkspaceUUID === null ? "Create Workspace" : "Join"}
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

CreateWorkspaceDialog.defaultProps = {
  showCreateWorkspaceDialog: false,
  workspaceName: "",
  username: "",
  joinWorkspaceUUID: null
};

CreateWorkspaceDialog.propTypes = {
  showCreateWorkspaceDialog: PropTypes.bool,
  hideWorkspaceDialog: PropTypes.func.isRequired,
  newWorkspace: PropTypes.func.isRequired,
  joinWorkspace: PropTypes.func.isRequired,
  newWorkspaceName: PropTypes.func.isRequired,
  newUsername: PropTypes.func.isRequired,
  workspaceName: PropTypes.string,
  username: PropTypes.string,
  joinWorkspaceUUID: PropTypes.string,
  history: PropTypes.object.isRequired
};

const mapStateToProps = ({
  landingPage: { showCreateWorkspaceDialog },
  createWorkspaceDialog: { workspaceName, username, joinWorkspaceUUID }
}) => ({
  showCreateWorkspaceDialog,
  workspaceName,
  username,
  joinWorkspaceUUID
});

const mapDispatchToProps = {
  hideWorkspaceDialog: hideCreateWorkspaceDialog,
  newWorkspace: createNewWorkspace,
  joinWorkspace: joinUserToWorkspace,
  newWorkspaceName: setWorkspaceName,
  newUsername: setUsername
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme({})(withRouter(CreateWorkspaceDialog)));
