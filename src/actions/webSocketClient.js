import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "./workspacePageContent";
import { NEW_USER_JOINED_WORKSPACE } from "./workspacePage";
import { DELETE_WORKSPACE } from "./deleteWorkspaceDialog";
/**
 * Action Types
 */
export const UPSERT_NOTE = "UPSERT_NOTE";
/**
 * Action Creators
 */
export const upsertNote = note => (dispatch, getState) => {
  const {
    workspacePageContent: { notes },
    workspacePage: { users }
  } = getState();
  // Generates avatar character
  const avatar = users
    .find(user => user.uuid === note.userUUID)
    .username.charAt(0)
    .toUpperCase();

  if (
    notes.find(existingNote => existingNote.uuid === note.uuid) !== undefined
  ) {
    dispatch({ type: UPDATE_NOTE, payload: { ...note, avatar } });
  } else {
    dispatch({ type: ADD_NOTE, payload: { ...note, avatar } });
  }
};

export const removeNote = note => (dispatch, getState) => {
  const {
    workspacePageContent: { notes }
  } = getState();

  if (
    notes.find(existingNote => existingNote.uuid === note.uuid) !== undefined
  ) {
    dispatch({ type: DELETE_NOTE, payload: { ...note } });
  }
};

export const addNewUserToWorkspace = user => dispatch => {
  dispatch({ type: NEW_USER_JOINED_WORKSPACE, payload: user });
};

export const removeWorkspace = deletedWorkspaceUUID => (dispatch, getState) => {
  const {
    workspacePage: { workspaceUUID }
  } = getState();

  if (workspaceUUID === deletedWorkspaceUUID) {
    dispatch({ type: DELETE_WORKSPACE });
  }
};
