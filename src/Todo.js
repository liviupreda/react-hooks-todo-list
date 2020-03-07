import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed }) {
  return (
    <ListItem>
      {/* tabindex of -1 => the control does not receive focus when using the tab key. */}
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText>{task}</ListItemText>
    </ListItem>
  );
}

export default Todo;
