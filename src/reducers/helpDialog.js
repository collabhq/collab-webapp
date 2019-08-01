import { SHOW_HELP_DIALOG, HIDE_HELP_DIALOG } from "../actions/helpDialog";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_HELP_DIALOG:
      return {
        ...state,
        showHelpDialog: true
      };
    case HIDE_HELP_DIALOG:
      return {
        ...state,
        showHelpDialog: false
      };
    default:
      return state;
  }
};
