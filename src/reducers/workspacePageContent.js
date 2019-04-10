import { SET_NOTES } from "../actions/workspacePageContent";
import { UPDATE_NOTE, ADD_NOTE } from "../actions/noteDialog";

const initialState = {
  notes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    case UPDATE_NOTE: {
      return {
        ...state,
        // TODO: Refactor might be required after service integration
        notes: state.notes.map(note =>
          note.uuid === action.payload.uuid
            ? {
                // TODO: Fix these keys mismatch between service and ui
                uuid: action.payload.uuid,
                avatar: "K",
                title: action.payload.name,
                content: action.payload.value
              }
            : note
        )
      };
    }
    case ADD_NOTE: {
      const note = {
        // TODO: Fix these keys mismatch between service and ui
        title: action.payload.name,
        content: action.payload.value,
        uuid: action.payload.uuid,
        // TODO: Refactor required. Values hardcoded
        avatar: "K"
      };
      return {
        ...state,
        notes: [...state.notes, note]
      };
    }
    default:
      return state;
  }
};
