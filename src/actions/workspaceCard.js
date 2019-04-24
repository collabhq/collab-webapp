/**
 * Action Types
 */
import { SHOW_NOTE_DIALOG } from "./noteDialog";
import { DELETE_NOTE_OPERATION, noteTopicURL } from "./constants";

export const EDIT_NOTE = "EDIT_NOTE";

/**
 * Action Creators
 */
export const editNote = note => dispatch => {
  dispatch({ type: EDIT_NOTE, payload: { note } });
  dispatch({ type: SHOW_NOTE_DIALOG });
};

export const deleteNote = note => (_, getState) => {
  const {
    workspacePage: { workspaceUUID, userUUID }
  } = getState();
  const noteOperation = {
    workspaceUUID,
    userUUID,
    noteUUID: note.uuid,
    noteOperation: DELETE_NOTE_OPERATION
  };

  // eslint-disable-next-line no-undef
  window.socketClient.sendMessage(
    `${noteTopicURL}/${workspaceUUID}`,
    JSON.stringify(noteOperation)
  );
};
