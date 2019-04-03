/**
 * Action Types
 */
export const SHOW_CREATE_WORKSPACE_DIALOG = "SHOW_CREATE_WORKSPACE_DIALOG";
export const HIDE_CREATE_WORKSPACE_DIALOG = "HIDE_CREATE_WORKSPACE_DIALOG";

/**
 * Action Creators
 */
export const showCreateWorkspaceDialog = () => dispatch =>
  dispatch({ type: SHOW_CREATE_WORKSPACE_DIALOG });
export const hideCreateWorkspaceDialog = () => dispatch =>
  dispatch({ type: HIDE_CREATE_WORKSPACE_DIALOG });
