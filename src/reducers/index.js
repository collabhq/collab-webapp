import { combineReducers } from "redux";
import landingPage from "./landingPage";
import workspacePage from "./workspacePage";
import workspaceCard from "./workspaceCard";
import workspacePageContent from "./workspacePageContent";
import noteDialog from "./noteDialog";
import noteForm from "./noteForm";

export default combineReducers({
  landingPage,
  workspacePage,
  workspaceCard,
  workspacePageContent,
  noteDialog,
  noteForm
});
