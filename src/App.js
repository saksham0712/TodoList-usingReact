
import './App.css';

import Header from './My components/Header.js';
import {ToDos} from "./My components/Todos.js";

import {Footer} from "./My components/Footer.js";
import {AddTodo} from "./My components/addTodo.js";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
initTodo=[]
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  
  const onDelete = (todo) => {
    console.log('i am delete', todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

const addTodo = (Title, desc) => {
  let sno;
  if(todos.length == 0){
    sno = 1;
  } else {
    sno = todos[todos.length-1].sno+1;

  }
  console.log('i am addding the function',sno, Title, desc)
  const myTodo = {
    sno: sno,
    title: Title,
    desc: desc
  }
  setTodos([...todos, myTodo])
  console.log(myTodo)

}

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
    <body>
  
    
      
   {/* <Header title = "ToDos " searchbar = {false}/> */}
   <AddTodo addTodo={addTodo}/>
   <ToDos todos = {todos} onDelete = {onDelete}/>
   <Footer/>
  



    </body>


  );
}

export default App;
