import {
  SHOW_CREATE_WORKSPACE_DIALOG,
  HIDE_CREATE_WORKSPACE_DIALOG
} from "../actions/landingPage";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_CREATE_WORKSPACE_DIALOG:
      return {
        ...state,
        showCreateWorkspaceDialog: true
      };
    case HIDE_CREATE_WORKSPACE_DIALOG:
      return {
        ...state,
        showCreateWorkspaceDialog: false
      };
    default:
      return state;
  }
};
