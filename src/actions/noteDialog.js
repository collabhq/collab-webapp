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
