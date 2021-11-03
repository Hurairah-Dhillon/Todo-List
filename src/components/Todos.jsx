import React from "react";
import { Todo } from "./Todo";
import '../App.css';
export const Todos = (props) => {
  return (
    <div className="list ml-auto">
      {props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
      })}
    </div>
  );
};
