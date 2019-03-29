import { combineReducers } from "redux";
import landingPage from "./landingPage";
import workspacePage from "./workspacePage";
import workspaceCard from "./workspaceCard";

export default combineReducers({
  landingPage,
  workspacePage,
  workspaceCard
});
