import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <div key={i}>
            <Todo
              id={todo.id}
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}
