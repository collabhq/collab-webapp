import {
  SHOW_EDITABLE_CARD,
  HIDE_EDITABLE_CARD
} from "../actions/workspaceCard";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_EDITABLE_CARD:
      return {
        ...state,
        editableCardShown: action.payload.uuid
      };
    case HIDE_EDITABLE_CARD:
      return {
        ...state,
        editableCardShown: undefined
      };
    default:
      return state;
  }
};
