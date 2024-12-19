import React, { useState } from 'react'

export default function Input(props) {
  const [todo,settodo]=useState("")

  const changeInput=(event)=>{
    // console.log(event.target.value)
    settodo(event.target.value) //addtodo

  }

  const submitt=(event)=>{
    event.preventDefault()
    // console.log("form submit fired")
    props.addTodo(todo)

    settodo("") // it means when i hit add todo input will be blank

  }

  return (
    <div>
        <form className="row g-3 mt-5" onSubmit={submitt}>

        <div className="col-10">
        <input type="text" className="form-control" placeholder='Enter Your Task'

          value={todo}
          onChange={changeInput}
        
        />
        </div>

        <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">Add</button>
        </div>

        </form>
    </div>
  )
}
