/**
 * Action Types
 */
export const SHOW_DRAWER = "SHOW_DRAWER";
export const HIDE_DRAWER = "HIDE_DRAWER";

export const FAB_CHECKED = "FAB_CHECKED";
export const FAB_HIDDEN = "FAB_HIDDEN";

/**
 * Action Creators
 */
export const showDrawer = () => dispatch => dispatch({ type: SHOW_DRAWER });
export const hideDrawer = () => dispatch => dispatch({ type: HIDE_DRAWER });

export const fabChecked = () => dispatch => dispatch({ type: FAB_CHECKED });
export const fabHidden = () => dispatch => dispatch({ type: FAB_HIDDEN });
