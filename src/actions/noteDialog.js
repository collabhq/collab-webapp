import {
  noteTopicURL,
  EDIT_NOTE_OPERATION,
  ADD_NOTE_OPERATION
} from "./constants";
/**
 * Action Types
 */
export const SHOW_NOTE_DIALOG = "SHOW_NOTE_DIALOG";
export const HIDE_NOTE_DIALOG = "HIDE_NOTE_DIALOG";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
/**
 * Action Creators
 */
export const hideNoteDialog = () => dispatch =>
  dispatch({ type: HIDE_NOTE_DIALOG });

export const saveDialogContent = () => (_, getState) => {
  const {
    noteForm: { note },
    workspacePage: { workspaceUUID, userUUID }
  } = getState();
  const noteOperation = {
    workspaceUUID,
    userUUID,
    noteUUID: note.uuid,
    noteName: note.title,
    noteValue: note.content,
    noteOperation:
      note.uuid === undefined ? ADD_NOTE_OPERATION : EDIT_NOTE_OPERATION
  };

  window.socketClient.sendMessage(
    `${noteTopicURL}/${workspaceUUID}`,
    JSON.stringify(noteOperation)
  );
};
