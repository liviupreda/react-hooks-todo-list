import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Todo One", completed: false },
    { id: 2, task: "Todo Two", completed: true },
    { id: 3, task: "Todo Three", completed: false }
  ];
  const [todos, setTodos] = useState([]);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">Todos With Hooks</Typography>
        </ToolBar>
      </AppBar>
    </Paper>
  );
}

// -- TodoApp
//   -- TodoForm
//   -- TodoList
//     -- TodoItem

// Todo:
// id, task (content of the todo), completed (true/ false)
