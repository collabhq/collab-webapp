import axios from "axios";
import { createWorkspaceURL } from "./constants";
import { HIDE_CREATE_WORKSPACE_DIALOG } from "./landingPage";
/**
 * Action Types
 */
export const SET_WORKSPACE_NAME = "SET_WORKSPACE_NAME";
export const SET_USERNAME = "SET_USERNAME";
export const CREATE_NEW_WORKSPACE = "CREATE_NEW_WORKSPACE";
/**
 * Action Creators
 */
export const setWorkspaceName = workspaceName => dispatch => {
  dispatch({ type: SET_WORKSPACE_NAME, payload: workspaceName });
};

export const setUsername = username => dispatch => {
  dispatch({ type: SET_USERNAME, payload: username });
};

export const createNewWorkspace = navigateTo => (dispatch, getState) => {
  const {
    createWorkspaceDialog: { workspaceName, username }
  } = getState();
  axios
    .post(createWorkspaceURL, { workspaceName, username })
    // TODO: Handle network errors (status != 200)
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: CREATE_NEW_WORKSPACE,
        payload: {
          ...data,
          workspaceName,
          username
        }
      })
    )
    .then(() => dispatch({ type: HIDE_CREATE_WORKSPACE_DIALOG }))
    .then(() => navigateTo("workspace"))
    // TODO: Handle errors in a better way
    .catch(err => console.log(err));
};
