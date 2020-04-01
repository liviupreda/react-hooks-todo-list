import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ textContent }) {
  return <TextField value="is editing" label="Edit Todo" />;
}

export default EditTodoForm;
