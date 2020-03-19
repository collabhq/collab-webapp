import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Timer from "react-compound-timer";

const getTimerValue = (expiry, createdAt) => {
  let expiryDate = 0;
  const millisecondsPerHour = 3600000;
  switch (expiry) {
    case "HOUR1":
      expiryDate = createdAt + millisecondsPerHour;
      break;
    case "HOUR12":
      expiryDate = createdAt + millisecondsPerHour * 12;
      break;
    case "HOUR24":
      expiryDate = createdAt + millisecondsPerHour * 24;
      break;
    case "HOUR48":
      expiryDate = createdAt + millisecondsPerHour * 48;
      break;
    default:
      break;
  }
  return expiryDate - new Date().getTime();
};

const WorkspaceTimer = ({ expiry, createdAt }) => (
  <Timer
    initialTime={getTimerValue(expiry, createdAt)}
    direction="backward"
    formatValue={value => `${value < 10 ? `0${value}` : value}`}
    lastUnit="h"
  >
    <Timer.Hours />
    {"h "}
    <Timer.Minutes />
    {"m "}
  </Timer>
);

WorkspaceTimer.propTypes = {
  expiry: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired
};

const mapStateToProps = ({ workspacePage: { createdAt, expiry } }) => ({
  expiry,
  createdAt
});

export default connect(
  mapStateToProps,
  null
)(withStyles(null, { withTheme: true })(WorkspaceTimer));
