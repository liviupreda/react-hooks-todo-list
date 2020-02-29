import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      {value}
      <TextField value={value} onChange={handleChange} />
    </Paper>
  );
}
