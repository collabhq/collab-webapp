import { DELETE_WORKSPACE } from "../actions/deleteWorkspaceDialog";

export default (state = { showDeleteWorkspaceDialog: false }, action) => {
  switch (action.type) {
    case DELETE_WORKSPACE:
      return {
        ...state,
        showDeleteWorkspaceDialog: true
      };
    default:
      return state;
  }
};
