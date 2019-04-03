/**
 * Action Types
 */
export const SHOW_DRAWER = "SHOW_DRAWER";
export const HIDE_DRAWER = "HIDE_DRAWER";

/**
 * Action Creators
 */
export const showDrawer = () => dispatch => dispatch({ type: SHOW_DRAWER });
export const hideDrawer = () => dispatch => dispatch({ type: HIDE_DRAWER });
