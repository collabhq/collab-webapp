import axios from "axios";
import { createWorkspaceURL, joinWorkspaceURL } from "./constants";
import {
  HIDE_CREATE_WORKSPACE_DIALOG,
  SHOW_CREATE_WORKSPACE_DIALOG
} from "./landingPage";
/**
 * Action Types
 */
export const SET_WORKSPACE_NAME = "SET_WORKSPACE_NAME";
export const SET_USERNAME = "SET_USERNAME";
export const SET_JOIN_WORKSPACE_UUID = "SET_JOIN_WORKSPACE_UUID";
export const CREATE_NEW_WORKSPACE = "CREATE_NEW_WORKSPACE";
export const JOIN_WORKSPACE = "JOIN_WORKSPACE";
export const SET_EXPIRY = "SET_EXPIRY";
/**
 * Action Creators
 */
export const setWorkspaceName = workspaceName => dispatch => {
  dispatch({ type: SET_WORKSPACE_NAME, payload: workspaceName });
};

export const setUsername = username => dispatch => {
  dispatch({ type: SET_USERNAME, payload: username });
};

export const setExpiry = expiry => dispatch => {
  dispatch({ type: SET_EXPIRY, payload: expiry });
};

export const setJoinWorkspaceUUID = workspaceUUID => dispatch => {
  dispatch({ type: SET_JOIN_WORKSPACE_UUID, payload: workspaceUUID });
  if (workspaceUUID !== null && workspaceUUID !== undefined) {
    dispatch({ type: SHOW_CREATE_WORKSPACE_DIALOG });
  } else {
    dispatch({ type: HIDE_CREATE_WORKSPACE_DIALOG });
  }
};

export const createNewWorkspace = navigateTo => (dispatch, getState) => {
  const {
    createWorkspaceDialog: { workspaceName, username, expiry }
  } = getState();
  axios
    .post(createWorkspaceURL, { workspaceName, username, expiry })
    // TODO: Handle network errors (status != 200)
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: CREATE_NEW_WORKSPACE,
        payload: {
          ...data,
          workspaceName,
          username,
          expiry
        }
      })
    )
    .then(() => dispatch({ type: HIDE_CREATE_WORKSPACE_DIALOG }))
    .then(() => navigateTo("workspace"))
    // TODO: Handle errors in a better way
    .catch(err => console.log(err));
};

export const joinUserToWorkspace = navigateTo => (dispatch, getState) => {
  const {
    createWorkspaceDialog: { joinWorkspaceUUID, username },
    workspacePage: { users }
  } = getState();
  axios
    .post(`${joinWorkspaceURL}/${joinWorkspaceUUID}`, { username })
    // TODO: Handle network errors (status != 200)
    .then(res => res.data)
    .then(data => {
      return {
        ...data,
        notes: data.notes.map(note => {
          // Generates avatar character
          const avatar = users
            .find(user => user.uuid === note.userUUID)
            .username.charAt(0)
            .toUpperCase();
          return { ...note, avatar };
        }),
        username
      };
    })
    .then(payload => dispatch({ type: JOIN_WORKSPACE, payload }))
    .then(() => dispatch({ type: HIDE_CREATE_WORKSPACE_DIALOG }))
    .then(() => navigateTo("workspace"))
    // TODO: Handle errors in a better way
    .catch(err => console.log(err));
};
