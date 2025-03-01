import React from 'react';

const TodoItems = ({ todo, onDelete }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="text-wrap-container">
        <h4>
          <span>{todo.sno}</span>. {todo.title}
        </h4>
        <p>{todo.desc}</p>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
