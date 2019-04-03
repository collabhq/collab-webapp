/**
 * Action Types
 */
import { SHOW_NOTE_DIALOG } from "./noteDialog";

export const EDIT_NOTE = "EDIT_NOTE";

/**
 * Action Creators
 */
export const editNote = note => dispatch => {
  dispatch({ type: EDIT_NOTE, payload: { note } });
  dispatch({ type: SHOW_NOTE_DIALOG });
};
