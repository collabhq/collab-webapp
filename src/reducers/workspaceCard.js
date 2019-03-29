import {
  SHOW_EDITABLE_CARD,
  HIDE_EDITABLE_CARD
} from "../actions/workspaceCard";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_EDITABLE_CARD:
      return {
        ...state,
        editableCardShown: true
      };
    case HIDE_EDITABLE_CARD:
      return {
        ...state,
        editableCardShown: false
      };
    default:
      return state;
  }
};
