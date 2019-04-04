import { SET_NOTES } from "../actions/workspacePageContent";
import { SAVE_NOTE_DIALOG_CONTENT, ADD_NOTE } from "../actions/noteDialog";

const initialState = {
  // TODO: Remove these default values and load an empty notes array
  notes: [
    {
      uuid: "1",
      avatar: "R",
      title: "New Note1",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "2",
      avatar: "R",
      title: "New Note2",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "3",
      avatar: "R",
      title: "New Note1",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "4",
      avatar: "R",
      title: "New Note2",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "5",
      avatar: "R",
      title: "New Note1",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "6",
      avatar: "R",
      title: "New Note2",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "7",
      avatar: "R",
      title: "New Note1",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "8",
      avatar: "R",
      title: "New Note2",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "9",
      avatar: "R",
      title: "New Note1",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "10",
      avatar: "R",
      title: "New Note2",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    case SAVE_NOTE_DIALOG_CONTENT: {
      return {
        ...state,
        // TODO: Refactor might be required after service integration
        notes: state.notes.map(note =>
          note.uuid === action.payload.uuid ? action.payload : note
        )
      };
    }
    case ADD_NOTE: {
      // TODO: Refactor required. Temporarily adding note. Values hardcoded.
      // TODO: Refactor required, dont add to state, send title and content and user uuid to endpoint
      const note = {
        title: action.payload.title ? action.payload.title : "Hello",
        content: action.payload.content ? action.payload.content : "ABCDEF",
        uuid: Math.random() * 10,
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
