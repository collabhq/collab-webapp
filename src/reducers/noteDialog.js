import {
  SHOW_NOTE_DIALOG,
  HIDE_NOTE_DIALOG,
  SAVE_NOTE_DIALOG_CONTENT
} from "../actions/noteDialog";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_NOTE_DIALOG:
      return {
        ...state,
        open: true
      };
    case HIDE_NOTE_DIALOG:
    case SAVE_NOTE_DIALOG_CONTENT:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};
