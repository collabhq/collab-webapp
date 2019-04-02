/**
 * Action Types
 */
export const SET_NOTES = "SET_NOTES";

/**
 * Action Creators
 */
export const setNotes = notes => dispatch =>
  dispatch({ type: SET_NOTES, payload: notes });
