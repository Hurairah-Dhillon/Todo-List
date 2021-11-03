import React, {useState} from 'react';
import '../App.css';

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit= (e) => {
    e.preventDefault();
    props.addTodo(title, desc);
    alert('Post created successfully');
    setTitle('');
    setDesc('');
  }

  return (
    <div className="newpost">
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Todo title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>desc</label>
          <input
            type="text"
            value={desc}
            className="form-control"
            onChange={(e)=> setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
