import React from 'react'
import TodoItems from './TodoItems.js';

export const ToDos = (props) => {

  let myStyle = {
    minHeight : "70vh",
    // screenY: "auto"

}
  return (
    <div className='container overflow-auto my-3' style={myStyle}>
      <h3 className='my-3'>ToDos List</h3>
      {props.todos.lenght===0 ? <h3>"No todos to show"</h3> :
      props.todos.map((todo)=>{
        return (
          <>
           <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })
    }
      </div>
  )
}

