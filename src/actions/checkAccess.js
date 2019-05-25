export default function checkAccess(props) {
  const {
    workspacePage: { workspaceUUID }
  } = props.store.getState();

  if (workspaceUUID && workspaceUUID !== "") {
    return true;
  }
  return false;
}
