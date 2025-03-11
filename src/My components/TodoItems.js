import React from 'react';

const TodoItems = ({ todo, onDelete }) => {
  console.log(todo)
  return (
    <div 
      className={`d-flex justify-content-between p-2 ${todo.isPriority === 'high' ? 'border border-danger' : ''}`}
      style={{ borderRadius: '8px' }} // Optional for better styling
    >
      <div className="text-wrap-container">
        <h4>
          <span>{todo.sno}</span>. {todo.title}
        </h4>
        <p>{todo.desc}</p>
        {/* <p>
          <strong>Priority:</strong> {todo.priority}
        </p> */}
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
