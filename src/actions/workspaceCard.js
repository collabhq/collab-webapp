/**
 * Action Types
 */
export const SHOW_EDITABLE_CARD = "SHOW_EDITABLE_CARD";
export const HIDE_EDITABLE_CARD = "HIDE_EDITABLE_CARD";

/**
 * Action Creators
 */
export const showEditableCard = () => dispatch =>
  dispatch({ type: SHOW_EDITABLE_CARD });
export const hideEditableCard = () => dispatch =>
  dispatch({ type: HIDE_EDITABLE_CARD });
