import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";
import { hideCreateUserDialog } from "../../actions/workspacePage";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  text: {
    padding: theme.spacing.unit * 1.5
  },
  qrcode: {
    padding: theme.spacing.unit * 1.5
  }
});

const baseUrl = "https://puffnote.github.io/";

function AddUserDialog(props) {
  const {
    showCreateUserDialog,
    hideCreateUserDialog: hideUserDialog,
    theme,
    classes,
    workspaceUUID
  } = props;

  const linkText = {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.background.default
  };

  return (
    <div>
      <Dialog
        open={showCreateUserDialog}
        onClose={() => hideUserDialog()}
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Invite User</DialogTitle>
        <DialogContent>
          <Typography variant="body2" className={classes.text}>
            Use this unique link to invite user to workspace.
          </Typography>
          <Typography variant="body2" style={linkText} className={classes.text}>
            {baseUrl}
            {workspaceUUID}
          </Typography>
          <QRCode className={classes.qrcode} value={baseUrl + workspaceUUID} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => hideUserDialog()}
            variant="contained"
            color="secondary"
          >
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddUserDialog.defaultProps = {
  showCreateUserDialog: false
};

AddUserDialog.propTypes = {
  showCreateUserDialog: PropTypes.bool,
  hideCreateUserDialog: PropTypes.func.isRequired,
  workspaceUUID: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({
  workspacePage: { showCreateUserDialog, workspaceUUID }
}) => ({
  showCreateUserDialog,
  workspaceUUID
});

const mapDispatchToProps = {
  hideCreateUserDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AddUserDialog));
