import React, { useState } from 'react'
import Input from './Input'
import List from './List'

export default function () {

  const [todos,settodos]=useState([])
  // console.log(todos);

  const addTodo=(value)=>{
    // console.log("data coming from input",value)
    //  todos.push(value)

    settodos([...todos,value]);
  };

  const removeTodo=(index)=>{
    // remove the todo at the specified index

    const updatedTodos = todos.filter((_,i)=> i!== index);
    settodos(updatedTodos);

  };
  return (
    <div className='container'>
      <Input addTodo={addTodo}/>
      <List todos={todos} removeTodo={removeTodo}/>
    </div>
  )
}
