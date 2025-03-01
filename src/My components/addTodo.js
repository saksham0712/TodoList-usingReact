import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [Title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!Title || !desc) {
            alert("Title or description cannot be empty");
        } else {
            addTodo(Title, desc);
            setTitle("");
            setDesc("");
        }
    };

    return (
        <div className="mb-3 addcontainer">
            <h3>Add a Todo</h3>
            <form onSubmit={submit} className="d-flex gap-3 align-items-end">
                <div className="flex-grow-1">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input 
                        type="text" 
                        value={Title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control bg-transparent text-light" 
                        id="title" 
                    />
                </div>
                <div className="flex-grow-1">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control bg-transparent text-light" 
                        id="desc" 
                    />
                </div>
                <button type="submit" className="btn btn-success btn-sm p-2">Add Todo</button>
            </form>
        </div>
    );
};
