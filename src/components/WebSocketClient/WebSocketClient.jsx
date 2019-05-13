import React from "react";
import SockJsClient from "react-stomp";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  upsertNote,
  removeNote,
  addNewUserToWorkspace,
  removeWorkspace
} from "../../actions/webSocketClient";
import { websocketURL, workspaceTopicURL } from "../../actions/constants";

const WebSocketClient = ({
  workspaceUUID,
  upsert,
  remove,
  addUserToWorkspace,
  workspaceRemoved,
  jwt,
  history
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
          case "DELETE_WORKSPACE":
            workspaceRemoved(message.payload, history.push);
            break;
          default:
            break;
        }
      }}
      ref={client => {
        // eslint-disable-next-line no-undef
        window.socketClient = client;
      }}
      headers={{ Authorization: `Bearer ${jwt}` }}
    />
  </div>
);

WebSocketClient.propTypes = {
  workspaceUUID: PropTypes.string.isRequired,
  upsert: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  addUserToWorkspace: PropTypes.func.isRequired,
  jwt: PropTypes.string.isRequired,
  workspaceRemoved: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = ({ workspacePage: { workspaceUUID, jwt } }) => ({
  workspaceUUID,
  jwt
});

const mapDispatchToProps = {
  upsert: upsertNote,
  remove: removeNote,
  addUserToWorkspace: addNewUserToWorkspace,
  workspaceRemoved: removeWorkspace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WebSocketClient));
