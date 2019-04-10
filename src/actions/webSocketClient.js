import { ADD_NOTE, UPDATE_NOTE } from "./noteDialog";
/**
 * Action Types
 */
export const UPSERT_NOTE = "UPSERT_NOTE";
/**
 * Action Creators
 */
export const upsertNote = note => (dispatch, getState) => {
  const {
    workspacePageContent: { notes }
  } = getState();

  if (
    notes.find(existingNote => existingNote.uuid === note.uuid) !== undefined
  ) {
    dispatch({ type: UPDATE_NOTE, payload: note });
  } else {
    dispatch({ type: ADD_NOTE, payload: note });
  }
};
