import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  FAB_CHECKED,
  FAB_HIDDEN
} from "../actions/workspacePage";

const initialState = {
  drawerOpen: false,
  fabClicked: false
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
    default:
      return state;
  }
};
