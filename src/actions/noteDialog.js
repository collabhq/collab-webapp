/**
 * Action Types
 */
export const SHOW_NOTE_DIALOG = "SHOW_NOTE_DIALOG";
export const HIDE_NOTE_DIALOG = "HIDE_NOTE_DIALOG";
export const SAVE_NOTE_DIALOG_CONTENT = "SAVE_NOTE_DIALOG_CONTENT";
export const ADD_NOTE = "ADD_NOTE";
/**
 * Action Creators
 */
export const hideNoteDialog = () => dispatch =>
  dispatch({ type: HIDE_NOTE_DIALOG });

export const saveDialogContent = () => (dispatch, getState) => {
  const {
    noteForm: { note }
  } = getState();
  // TODO: Handle validation
  if (note !== undefined) {
    if (note.uuid === undefined) dispatch({ type: ADD_NOTE, payload: note });
    else dispatch({ type: SAVE_NOTE_DIALOG_CONTENT, payload: note });
  }
};
