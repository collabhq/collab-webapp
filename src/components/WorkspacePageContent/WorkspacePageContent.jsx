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
  const { classes, notes } = props;

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={24}>
        {notes.map(({ uuid, title, content }) => (
          <Grid item key={uuid} sm={6} md={4} lg={3}>
            <WorkspaceCard uuid={uuid} title={title} content={content} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
const mapStateToProps = ({ workspacePageContent: { notes } }) => ({ notes });

WorkspacePageContent.propTypes = {
  notes: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles, { withTheme: true })(WorkspacePageContent));
