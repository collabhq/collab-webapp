/**
 * Action Types
 */
export const DELETE_WORKSPACE = "DELETE_WORKSPACE";
export const RESET_STATE = "RESET_STATE";
/**
 * Action Creators
 */
export const hideDeleteWorkspaceDialog = () => dispatch =>
  dispatch({ type: RESET_STATE });
