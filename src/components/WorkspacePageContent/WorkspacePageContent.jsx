import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function WorkspacePageContent(props) {
  const { classes, theme } = props;

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={24}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={4} lg={3}>
            <WorkspaceCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

WorkspacePageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WorkspacePageContent);
