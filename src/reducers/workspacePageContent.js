import {
  SET_NOTES,
  UPDATE_NOTE,
  ADD_NOTE,
  DELETE_NOTE
} from "../actions/workspacePageContent";
import { JOIN_WORKSPACE } from "../actions/createWorkspaceDialog";

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
                uuid: action.payload.uuid,
                avatar: action.payload.avatar,
                title: action.payload.title,
                content: action.payload.content,
                userUUID: action.payload.userUUID
              }
            : note
        )
      };
    }
    case ADD_NOTE: {
      const note = {
        uuid: action.payload.uuid,
        avatar: action.payload.avatar,
        title: action.payload.title,
        content: action.payload.content,
        userUUID: action.payload.userUUID
      };
      return {
        ...state,
        notes: [...state.notes, note]
      };
    }
    case DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter(note => note.uuid !== action.payload.uuid)
      };
    }
    case JOIN_WORKSPACE: {
      return {
        ...state,
        notes: action.payload.notes.map(note => ({
          // TODO: Fix these keys mismatch between service and ui
          uuid: note.uuid,
          avatar: note.avatar,
          title: note.name,
          content: note.value,
          userUUID: note.userUUID
        }))
      };
    }
    default:
      return state;
  }
};
