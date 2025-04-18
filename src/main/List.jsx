import React from 'react'

export default function List(props) {
    // console.log(props.todos) //array
  return (
    <div>
        <ul className="list-group col-10">


            {
                props.todos.length > 0 ? props.todos.map((value, index) => (
                    <li style={{backgroundColor:"#d4de95", color:"black", fontWeight:"500", margin:"2px"}} className="list-group-item d-flex justify-content-between align-items-center" key={index}> 
                        {value}
                        <button className="btn btn-danger btn-sm" onClick={()=>props.removeTodo(index)}>Delete</button>
                    </li>
                    
                ))
                : <li style={{backgroundColor:"#d4de95", color:"black", fontWeight:"500"}} className="list-group-item">No Todos</li>
            }

          
        </ul>
    </div>
  )
}
