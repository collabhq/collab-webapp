import {
  noteQueueURL,
  EDIT_NOTE_OPERATION,
  ADD_NOTE_OPERATION
} from "./constants";
/**
 * Action Types
 */
export const SHOW_NOTE_DIALOG = "SHOW_NOTE_DIALOG";
export const HIDE_NOTE_DIALOG = "HIDE_NOTE_DIALOG";
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
  const noteUUID = note !== undefined ? note.uuid : undefined;
  const noteName = note !== undefined ? note.title : "New Card";
  const noteValue = note !== undefined ? note.content : "";

  const noteOperation = {
    workspaceUUID,
    userUUID,
    noteUUID,
    noteName,
    noteValue,
    noteOperation:
      noteUUID === undefined ? ADD_NOTE_OPERATION : EDIT_NOTE_OPERATION
  };

  // eslint-disable-next-line no-undef
  window.socketClient.sendMessage(
    `${noteQueueURL}/${workspaceUUID}`,
    JSON.stringify(noteOperation)
  );
};
