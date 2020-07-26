export const localServerURL = ""; // Empty or http://localhost:5000
export const localBaseJoinURL = ""; // Empty or http://localhost:3000/#/?join=
export const serverURL =
  localServerURL || "https://collab-service.herokuapp.com";
export const baseJoinUrl = localBaseJoinURL || "https://collabhq.app/#/?join=";
export const createWorkspaceURL = `${serverURL}/workspace`;
export const joinWorkspaceURL = `${serverURL}/workspace`;
export const websocketURL = `${serverURL}/collabsocket`;
export const noteQueueURL = "/app/note/workspace";
export const workspaceQueueURL = "/app/workspace/";
export const workspaceTopicURL = "/topic/workspace";
export const ADD_NOTE_OPERATION = "ADD";
export const EDIT_NOTE_OPERATION = "EDIT";
export const DELETE_NOTE_OPERATION = "DELETE";
export const WEBSITE_PUBLIC_URL = "https://collabhq.app/#/";
export const WEBSITE_PRIVACY_URL = `${WEBSITE_PUBLIC_URL}privacy`;
export const WEBSITE_TERMS_URL = `${WEBSITE_PUBLIC_URL}terms`;
export const GITHUB_ORG_URL = "https://github.com/collabhq";
export const FEEDBACK_URL = "mailto:support@collabhq.app";
export const KN_URL = "mailto:karthik@collabhq.app";
export const SG_URL = "mailto:sudesh@collabhq.app";
export const KN_WEB_URL = "https://kn.fyi";
export const SG_WEB_URL = "https://github.com/sudeshgutta";
export const KN_IMG_URL = "https://kn.fyi/profile.jpg";
export const SG_IMG_URL =
  "https://avatars0.githubusercontent.com/u/7446138?s=400&v=4";
