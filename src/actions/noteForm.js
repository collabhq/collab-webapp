/**
 * Action Types
 */
export const SET_TITLE = "SET_TITLE";
export const SET_CONTENT = "SET_CONTENT";
export const SET_TAB = "SET_TAB";

/**
 * Action Creators
 */
export const setTitle = title => dispatch =>
  dispatch({ type: SET_TITLE, payload: title });

export const setContent = content => dispatch =>
  dispatch({ type: SET_CONTENT, payload: content });

export const setTab = tab => dispatch =>
  dispatch({ type: SET_TAB, payload: tab });
