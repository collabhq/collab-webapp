import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import WorkspaceCard from "../WorkspaceCard/WorkspaceCard";

const styles = theme => ({
  layout: {
    width: "auto",
    marginTop: theme.spacing.unit * 1,
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
});

function WorkspacePageContent(props) {
  const { classes, notes, selectedUser } = props;

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={24}>
        {notes.map(({ uuid, avatar, title, content, userUUID }) => {
          let output;
          if (selectedUser === userUUID || selectedUser === undefined) {
            output = (
              <Grid item key={uuid} sm={6} md={4} lg={3}>
                <WorkspaceCard
                  uuid={uuid}
                  avatar={avatar}
                  title={title}
                  content={content}
                />
              </Grid>
            );
          }
          return output;
        })}
      </Grid>
    </div>
  );
}
const mapStateToProps = ({
  workspacePageContent: { notes },
  workspacePage: { selectedUser }
}) => ({ notes, selectedUser });

WorkspacePageContent.defaultProps = {
  selectedUser: undefined
};

WorkspacePageContent.propTypes = {
  notes: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  selectedUser: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles, { withTheme: true })(WorkspacePageContent));
