import React from 'react'

const ToDoSummary = ({todos}) => {
  return (
    <div>
        <hr />
        <span>{ todos.length } {todos.length > 1 ? 'todos' : 'todo'}</span>
    </div>
  )
}

export default ToDoSummary