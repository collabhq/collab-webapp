import React from "react";
import SockJsClient from "react-stomp";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { upsertNote } from "../../actions/webSocketClient";
import { websocketURL, workspaceTopicURL } from "../../actions/constants";

const WebSocketClient = ({ workspaceUUID, upsert }) => (
  <div>
    <SockJsClient
      url={websocketURL}
      topics={[`${workspaceTopicURL}/${workspaceUUID}`]}
      onMessage={note => {
        upsert(note);
      }}
      ref={client => {
        window.socketClient = client;
      }}
    />
  </div>
);

WebSocketClient.propTypes = {
  workspaceUUID: PropTypes.string.isRequired,
  upsert: PropTypes.func.isRequired
};

const mapStateToProps = ({ workspacePage: { workspaceUUID } }) => ({
  workspaceUUID
});

const mapDispatchToProps = {
  upsert: upsertNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebSocketClient);
