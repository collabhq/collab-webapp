import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  FAB_CHECKED,
  FAB_HIDDEN,
  SHOW_CREATE_USER_DIALOG,
  HIDE_CREATE_USER_DIALOG
} from "../actions/workspacePage";

const initialState = {
  drawerOpen: false,
  fabClicked: false,
  showCreateUserDialog: false,
  // TODO: Change this along with service integration
  roomId: "abcdef"
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
    default:
      return state;
  }
};
