import React from 'react'

export default function List(props) {
    console.log(props.todos) //array
  return (
    <div>
        <ul className="list-group col-10">


            {
                props.todos.length > 0 ? props.todos.map((value, index) => (
                    <li className="list-group-item" key={index}>
                        {value}
                    </li>
                ))
                : <li className="list-group-item">No Todos</li>
            }

          
        </ul>
    </div>
  )
}
