import React from "react";
import SockJsClient from "react-stomp";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  upsertNote,
  removeNote,
  addNewUserToWorkspace
} from "../../actions/webSocketClient";
import { websocketURL, workspaceTopicURL } from "../../actions/constants";

const WebSocketClient = ({
  workspaceUUID,
  upsert,
  remove,
  addUserToWorkspace
}) => (
  <div>
    <SockJsClient
      url={websocketURL}
      topics={[`${workspaceTopicURL}/${workspaceUUID}`]}
      onMessage={message => {
        switch (message.type) {
          case "SAVE_NOTE":
            upsert(message.payload);
            break;
          case "DELETE_NOTE":
            remove(message.payload);
            break;
          case "USER":
            addUserToWorkspace(message.payload);
            break;
          default:
            break;
        }
      }}
      ref={client => {
        // eslint-disable-next-line no-undef
        window.socketClient = client;
      }}
    />
  </div>
);

WebSocketClient.propTypes = {
  workspaceUUID: PropTypes.string.isRequired,
  upsert: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  addUserToWorkspace: PropTypes.func.isRequired
};

const mapStateToProps = ({ workspacePage: { workspaceUUID } }) => ({
  workspaceUUID
});

const mapDispatchToProps = {
  upsert: upsertNote,
  remove: removeNote,
  addUserToWorkspace: addNewUserToWorkspace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebSocketClient);
