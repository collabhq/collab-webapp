import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import landingPage from "./landingPage";
import workspacePage from "./workspacePage";
import workspaceCard from "./workspaceCard";
import workspacePageContent from "./workspacePageContent";
import noteDialog from "./noteDialog";
import noteForm from "./noteForm";
import createWorkspaceDialog from "./createWorkspaceDialog";
import webSocketClient from "./webSocketClient";
import { CREATE_NEW_WORKSPACE } from "../actions/createWorkspaceDialog";

const appReducer = combineReducers({
  landingPage,
  workspacePage,
  workspaceCard,
  workspacePageContent,
  noteDialog,
  noteForm,
  createWorkspaceDialog,
  webSocketClient
});

export default (state, action) => {
  if (action.type === CREATE_NEW_WORKSPACE) {
    storage.removeItem("persist:root");
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};
