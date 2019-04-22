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
  Slide,
  Input,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select
} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { hideCreateWorkspaceDialog } from "../../actions/landingPage";
import {
  createNewWorkspace,
  joinUserToWorkspace,
  setWorkspaceName,
  setUsername,
  setExpiry
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
  setExpiryTime,
  workspaceName,
  username,
  expiry,
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
        {joinWorkspaceUUID === null ? (
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="expiry-label-placeholder">
              Expires After
            </InputLabel>
            <Select
              value={expiry}
              onChange={evt => {
                setExpiryTime(evt.target.value);
              }}
              input={<Input name="expiry" id="expiry-label-placeholder" />}
              displayEmpty
              name="expiry"
            >
              <MenuItem value="HOUR1">1 Hour</MenuItem>
              <MenuItem value="HOUR12">12 Hours</MenuItem>
              <MenuItem value="HOUR24">1 Day</MenuItem>
              <MenuItem value="HOUR48">2 Days</MenuItem>
            </Select>
            <FormHelperText>Data will be purged after this time</FormHelperText>
          </FormControl>
        ) : (
          undefined
        )}
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
  expiry: "HOUR1",
  joinWorkspaceUUID: null
};

CreateWorkspaceDialog.propTypes = {
  showCreateWorkspaceDialog: PropTypes.bool,
  hideWorkspaceDialog: PropTypes.func.isRequired,
  newWorkspace: PropTypes.func.isRequired,
  joinWorkspace: PropTypes.func.isRequired,
  newWorkspaceName: PropTypes.func.isRequired,
  newUsername: PropTypes.func.isRequired,
  setExpiryTime: PropTypes.func.isRequired,
  workspaceName: PropTypes.string,
  username: PropTypes.string,
  expiry: PropTypes.string,
  joinWorkspaceUUID: PropTypes.string,
  history: PropTypes.object.isRequired
};

const mapStateToProps = ({
  landingPage: { showCreateWorkspaceDialog },
  createWorkspaceDialog: { workspaceName, username, expiry, joinWorkspaceUUID }
}) => ({
  showCreateWorkspaceDialog,
  workspaceName,
  username,
  expiry,
  joinWorkspaceUUID
});

const mapDispatchToProps = {
  hideWorkspaceDialog: hideCreateWorkspaceDialog,
  newWorkspace: createNewWorkspace,
  joinWorkspace: joinUserToWorkspace,
  newWorkspaceName: setWorkspaceName,
  newUsername: setUsername,
  setExpiryTime: setExpiry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme({})(withRouter(CreateWorkspaceDialog)));
