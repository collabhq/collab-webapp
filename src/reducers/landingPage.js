import { CREATE_WORKSPACE } from "../actions/landingPage";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return {
        ...state,
        showCreateWorkspaceDialog: true
      };
    default:
      return state;
  }
};
