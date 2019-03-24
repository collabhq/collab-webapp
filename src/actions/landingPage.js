/**
 * Action Types
 */
export const CREATE_WORKSPACE = "CREATE_WORKSPACE";

/**
 * Action Creators
 */
export const createWorkspace = () => dispatch =>
  dispatch({ type: CREATE_WORKSPACE });
