/**
 * Action Types
 */
export const SHOW_HELP_DIALOG = "SHOW_HELP_DIALOG";
export const HIDE_HELP_DIALOG = "HIDE_HELP_DIALOG";
/**
 * Action Creators
 */
export const showHelpDialog = () => dispatch =>
  dispatch({ type: SHOW_HELP_DIALOG });
export const hideHelpDialog = () => dispatch =>
  dispatch({ type: HIDE_HELP_DIALOG });
