import React, { useState } from 'react'
import Input from './Input'
import List from './List'

export default function () {

  const [todos,settodos]=useState([])
  console.log(todos)

  const addTodo=(value)=>{
    // console.log("data coming from input",value)
    //  todos.push(value)

    settodos([...todos,value])
  }
  return (
    <div className='container'>
      <Input addTodo={addTodo}/>
      <List todos={todos}/>        

        
    </div>
  )
}
