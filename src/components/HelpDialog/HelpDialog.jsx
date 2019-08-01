import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide
} from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";
import * as Showdown from "showdown";
import xssFilter from "showdown-xss-filter";
import ReactHtmlParser from "react-html-parser";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { hideHelpDialog } from "../../actions/helpDialog";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  dialog: {
    padding: theme.spacing.unit * 4
  }
});

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  extensions: [xssFilter]
});

const content = `

# Learn about Collab and its features

- Collab is a platform for sharing and collaborating with users **anonymously**. There is absolutely **no** sign-in or sign-up required.

- On the left, you'll find the sidebar. The sidebar is used for viewing the users in the workspace and to invite more people into it.

- In the centre, you will be able to see what you and all the other users have shared.

- In Collab, data exists in the form of cards. You and the others in this workspace can create and share cards.

- All of you can collaborate and create what you want, and you can see all the changes in **real-time**.

### Now that you get the idea, let's take a look at what all goes into a card

With the amazing help of Markdown, you can do **this**, *this*, or ~~this~~.

With support for embedded links and images, you can even do

![](https://collabhq.app/this.png)

Want to create lists?

- Doesn't

- Get

- Easier

- Than

- This

You can even share inline code.

It's extremely easy, and flexible, so create and share whatever you want :)

Click on **ADD** and get started now!

`;

const markdownashtml = converter.makeHtml(content);

const HelpDialog = ({ classes, showHelpDialog, hideHelp }) => (
  <div>
    {isMobileOnly ? (
      <Dialog
        fullScreen
        open={showHelpDialog}
        onClose={() => hideHelp()}
        TransitionComponent={Transition}
        aria-labelledby="help-dialog"
      >
        <DialogContent className={classes.dialog}>
          {ReactHtmlParser(markdownashtml)}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => hideHelp()}
            variant="contained"
            color="primary"
          >
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    ) : (
      <Dialog
        fullWidth
        maxWidth="lg"
        open={showHelpDialog}
        onClose={() => hideHelp()}
        TransitionComponent={Transition}
        aria-labelledby="help-dialog"
      >
        <DialogContent className={classes.dialog}>
          {ReactHtmlParser(markdownashtml)}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => hideHelp()}
            variant="contained"
            color="primary"
          >
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    )}
  </div>
);

HelpDialog.defaultProps = {
  showHelpDialog: true
};

HelpDialog.propTypes = {
  showHelpDialog: PropTypes.bool,
  hideHelp: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({ helpDialog: { showHelpDialog } }) => ({
  showHelpDialog
});

const mapDispatchToProps = {
  hideHelp: hideHelpDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(HelpDialog));
