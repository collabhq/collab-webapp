import React from "react";
import { connect } from "react-redux";
import { withTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { hideDeleteWorkspaceDialog } from "../../actions/deleteWorkspaceDialog";

const DeleteWorkspaceDialog = ({
  history,
  showDeleteWorkspaceDialog,
  hide
}) => (
  <div>
    <Dialog
      open={showDeleteWorkspaceDialog}
      aria-labelledby="Deleted Workspace"
      aria-describedby="Notify user about workspace deletion"
    >
      <DialogTitle>Workspace deleted</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your workspace has either been deleted by its owner or has expired.
          All workspace data has been erased.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            history.push("/");
            hide();
          }}
          color="secondary"
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

DeleteWorkspaceDialog.defaultProps = {
  showDeleteWorkspaceDialog: false
};

DeleteWorkspaceDialog.propTypes = {
  showDeleteWorkspaceDialog: PropTypes.bool,
  hide: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = ({
  deleteWorkspaceDialog: { showDeleteWorkspaceDialog }
}) => ({
  showDeleteWorkspaceDialog
});

const mapDispatchToProps = { hide: hideDeleteWorkspaceDialog };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme({})(withRouter(DeleteWorkspaceDialog)));
