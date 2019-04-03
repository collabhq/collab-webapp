import { EDIT_NOTE } from "../actions/workspaceCard";
import {
  HIDE_NOTE_DIALOG,
  SAVE_NOTE_DIALOG_CONTENT
} from "../actions/noteDialog";
import { SET_TITLE, SET_CONTENT } from "../actions/noteForm";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_NOTE:
      return action.payload;
    case HIDE_NOTE_DIALOG:
    case SAVE_NOTE_DIALOG_CONTENT:
      return initialState;
    case SET_TITLE:
      return {
        ...state,
        note: {
          ...state.note,
          title: action.payload
        }
      };
    case SET_CONTENT:
      return {
        ...state,
        note: {
          ...state.note,
          content: action.payload
        }
      };
    default:
      return state;
  }
};
