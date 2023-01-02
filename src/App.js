// import logo from './logo.svg';
import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, {useState} from 'react';
import {useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){

    initTodo = [ ];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }

  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    console.log("deletd", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, descr)=>{
    console.log("I am adding this todo", title, descr);
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno+1;
  }
    const myTodo ={
      sno:sno,
      title:title,
      descr:descr
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  
  
  const [todos, setTodos] = useState(initTodo);
  // localStorage.setItem("todos",JSON.stringify(todos));
   useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   }, [todos])


 
  
  return (
    <>
  
    {/* <Header title="MyTodosList" />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/> */}

    <BrowserRouter>
    <Header title="MyTodosList" searchBar={false} />
      <Routes>
        <Route exact path="/" element={
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>
        } />
        <Route exact path="about/*" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
