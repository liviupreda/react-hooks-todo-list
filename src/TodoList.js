import React from "react";
import Paper from "@material-ui/core/Paper";

export default function TodoList(props) {
  return (
    <Paper>
      {props.todos.map((todo, i) => (
        <li key={i}>{todo.task}</li>
      ))}
    </Paper>
  );
}
