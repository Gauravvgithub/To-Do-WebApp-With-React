import React, { useState } from 'react'
import Input from './Input'
import List from './List'

export default function () {

  const [todos,settodos]=useState([])
  // console.log(todos);

  const addTodo=(value)=>{
    // console.log("data coming from input",value)
    //  todos.push(value)

    if(value===""){
      return alert("Add Todo");
    }else{
      settodos([...todos,value])
    }
  };

  const removeTodo=(index)=>{
    // remove the todo at the specified index

    const updatedTodos = todos.filter((_,i)=> i!== index);
    settodos(updatedTodos);

  };
  return (
    <div className='container' style={{backgroundColor:"#3d4127"}}>
      <h1 style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        color:"#fff",
        backgroundColor:"#636b2f",
        border:"dashed",
        borderRadius:"50px"
      }}>Todo App</h1>
      <Input addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo}/>
    </div>
  )
}
