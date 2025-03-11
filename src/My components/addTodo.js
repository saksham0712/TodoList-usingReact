import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [Title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [isPriority, setIsPriority] = useState(false); // Added checkbox state

    const submit = (e) => {
        e.preventDefault();
        if (!Title) {
            alert("Title cannot be empty");
        } else {
            addTodo(Title, desc, isPriority ? 'high' : 'normal'); // Include priority in addTodo call
            setTitle("");
            setDesc("");
            setIsPriority(false); // Reset checkbox
        }
    };

    return (
        <div className="mb-3 addcontainer">
            <h3>Add a Todo</h3>
            <form onSubmit={submit} className="d-flex gap-3 align-items-end">
                {/* Priority Checkbox */}
                <div className="flex-grow-1/2 d-flex flex-column align-items-center gap-2">
                <label htmlFor="priority" className="form-label bg-transparent">Priority</label>
<div>

                    <input 
                        type="checkbox" 
                        checked={isPriority} 
                        placeholder='high'
                        onChange={() => setIsPriority(!isPriority)} 
                        id="priority"
                        />
                <label htmlFor="priority" className="form-label bg-transparent px-1 py-0">High</label>
                        </div>
                </div>

                {/* Title Input */}
                <div className="flex flex-grow-1">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input 
                        type="text" 
                        value={Title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control bg-transparent text-light" 
                        id="title" 
                    />
                </div>

                {/* Description Input */}
                <div className="flex flex-grow-1">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control bg-transparent text-light" 
                        id="desc" 
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success btn-sm p-2">Add Todo</button>
            </form>
        </div>
    );
};
