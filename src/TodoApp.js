import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
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
  const [todos, setTodos] = useState(initialTodos);
  // Will use addTodo to handle TodoForm submit
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    // use todoId to filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    // call setTodos with new Todos array
    setTodos(updatedTodos);
  };

  useEffect(() => {
    document.title = "React Hooks Todo List";
  }, []);

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
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

// -- TodoApp
//   -- TodoForm
//   -- TodoList
//     -- TodoItem

// Todo:
// id, task (content of the todo), completed (true/ false)
