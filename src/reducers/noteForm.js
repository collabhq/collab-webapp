import { EDIT_NOTE } from "../actions/workspaceCard";
import { HIDE_NOTE_DIALOG } from "../actions/noteDialog";
import { UPDATE_NOTE, ADD_NOTE } from "../actions/workspacePageContent";
import { SET_TITLE, SET_CONTENT, SET_TAB } from "../actions/noteForm";

const initialState = {
  tab: "write"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_NOTE:
      return action.payload;
    case HIDE_NOTE_DIALOG:
    case ADD_NOTE:
    case UPDATE_NOTE:
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
    case SET_TAB:
      return {
        ...state,
        tab: action.payload
      };
    default:
      return state;
  }
};
