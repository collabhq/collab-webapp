import { SET_NOTES } from "../actions/workspacePageContent";

const initialState = {
  // TODO: Remove these default values and load an empty notes array
  notes: [
    {
      uuid: "1",
      title: "New Note",
      content:
        "This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text. This is random text"
    },
    {
      uuid: "2",
      title: "New Note",
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
    default:
      return state;
  }
};
