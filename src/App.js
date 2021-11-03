import "./App.css";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go with the flow",
      desc: "hello description of title 1",
    },
  ]);

  const onDelete = (todo) => {
    console.log("delete");
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    const myTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <div className="d-flex container">
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
