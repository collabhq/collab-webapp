import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  FAB_CHECKED,
  FAB_HIDDEN,
  SHOW_CREATE_USER_DIALOG,
  HIDE_CREATE_USER_DIALOG
} from "../actions/workspacePage";

import {
  CREATE_NEW_WORKSPACE,
  JOIN_WORKSPACE
} from "../actions/createWorkspaceDialog";

const initialState = {
  drawerOpen: false,
  fabClicked: false,
  showCreateUserDialog: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {
        ...state,
        drawerOpen: true
      };
    case HIDE_DRAWER:
      return {
        ...state,
        drawerOpen: false
      };
    case FAB_CHECKED:
      return {
        ...state,
        fabClicked: !state.fabClicked
      };
    case FAB_HIDDEN:
      return {
        ...state,
        fabClicked: false
      };
    case SHOW_CREATE_USER_DIALOG:
      return {
        ...state,
        showCreateUserDialog: true
      };
    case HIDE_CREATE_USER_DIALOG:
      return {
        ...state,
        showCreateUserDialog: false
      };
    case CREATE_NEW_WORKSPACE:
    case JOIN_WORKSPACE:
      return {
        ...state,
        workspaceUUID: action.payload.workspaceUUID,
        userUUID: action.payload.userUUID,
        workspaceName: action.payload.workspaceName,
        username: action.payload.username
      };
    default:
      return state;
  }
};
