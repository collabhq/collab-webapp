import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const CreateWorkspaceDialog = ({ showCreateWorkspaceDialog }) => (
  <div>
    <Dialog open={showCreateWorkspaceDialog}>
      <p>Dialog</p>
    </Dialog>
  </div>
);

CreateWorkspaceDialog.defaultProps = {
  showCreateWorkspaceDialog: false
};

CreateWorkspaceDialog.propTypes = {
  showCreateWorkspaceDialog: PropTypes.bool
};

const mapStateToProps = ({ landingPage: { showCreateWorkspaceDialog } }) => ({
  showCreateWorkspaceDialog
});
export default connect(mapStateToProps)(withStyles({})(CreateWorkspaceDialog));
