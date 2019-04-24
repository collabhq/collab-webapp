/**
 * Action Types
 */
export const SET_NOTES = "SET_NOTES";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
/**
 * Action Creators
 */
export const setNotes = notes => dispatch =>
  dispatch({ type: SET_NOTES, payload: notes });
