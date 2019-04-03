import { EDIT_NOTE } from "../actions/workspaceCard";
import { HIDE_NOTE_DIALOG } from "../actions/noteDialog";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_NOTE:
      return action.payload;
    case HIDE_NOTE_DIALOG:
      return initialState;
    default:
      return state;
  }
};
