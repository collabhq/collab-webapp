import { SHOW_DRAWER, HIDE_DRAWER } from "../actions/workspacePage";

const initialState = {
  drawerOpen: false
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
    default:
      return state;
  }
};
