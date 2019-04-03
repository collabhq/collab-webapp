/**
 * Action Types
 */
export const SHOW_NOTE_DIALOG = "SHOW_NOTE_DIALOG";
export const HIDE_NOTE_DIALOG = "HIDE_NOTE_DIALOG";
export const SAVE_NOTE_DIALOG_CONTENT = "SAVE_NOTE_DIALOG_CONTENT";
/**
 * Action Creators
 */
export const hideNoteDialog = () => dispatch =>
  dispatch({ type: HIDE_NOTE_DIALOG });

export const saveDialogContent = () => (dispatch, getState) => {
  const {
    noteForm: { note }
  } = getState();
  dispatch({ type: SAVE_NOTE_DIALOG_CONTENT, payload: note });
};
