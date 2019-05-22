/**
 * Action Types
 */
export const SHOW_DRAWER = "SHOW_DRAWER";
export const HIDE_DRAWER = "HIDE_DRAWER";

export const FAB_CHECKED = "FAB_CHECKED";
export const FAB_HIDDEN = "FAB_HIDDEN";

export const SHOW_CREATE_USER_DIALOG = "SHOW_CREATE_USER_DIALOG";
export const HIDE_CREATE_USER_DIALOG = "HIDE_CREATE_USER_DIALOG";

export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const NEW_USER_JOINED_WORKSPACE = "NEW_USER_JOINED_WORKSPACE";

/**
 * Action Creators
 */
export const showDrawer = () => dispatch => dispatch({ type: SHOW_DRAWER });
export const hideDrawer = () => dispatch => dispatch({ type: HIDE_DRAWER });

export const fabChecked = () => dispatch => dispatch({ type: FAB_CHECKED });
export const fabHidden = () => dispatch => dispatch({ type: FAB_HIDDEN });

export const showCreateUserDialog = () => dispatch =>
  dispatch({ type: SHOW_CREATE_USER_DIALOG });
export const hideCreateUserDialog = () => dispatch =>
  dispatch({ type: HIDE_CREATE_USER_DIALOG });

export const setSelectedUser = uuid => dispatch =>
  dispatch({ type: SET_SELECTED_USER, payload: uuid });
