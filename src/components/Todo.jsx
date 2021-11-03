import React from "react";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className="shadow p-2 mb-3 bg-white rounded">
      <h4>Task Title: {todo.title}</h4>
      <p> TaskID: {todo.sno} </p>
      <p> Discription:  {todo.desc} </p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
