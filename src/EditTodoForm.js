import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm() {
  const [value, handleChange, reset] = useInputState("");
  return (
    <TextField
      value={value}
      onChange={handleChange}
      margin="normal"
      fullWidth
    />
  );
}

export default EditTodoForm;
