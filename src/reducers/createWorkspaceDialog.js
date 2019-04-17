import {
  SET_WORKSPACE_NAME,
  SET_USERNAME,
  SET_JOIN_WORKSPACE_UUID
} from "../actions/createWorkspaceDialog";
import { HIDE_CREATE_WORKSPACE_DIALOG } from "../actions/landingPage";

const intialState = {};
export default (state = intialState, action) => {
  switch (action.type) {
    case SET_WORKSPACE_NAME:
      return {
        ...state,
        workspaceName: action.payload
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case SET_JOIN_WORKSPACE_UUID:
      return {
        ...state,
        joinWorkspaceUUID: action.payload
      };
    case HIDE_CREATE_WORKSPACE_DIALOG:
      return intialState;
    default:
      return state;
  }
};
