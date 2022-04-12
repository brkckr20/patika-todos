import React, { useState } from 'react'

const ToDoLists = ({ todos, deleteToDo }) => {

    const [isInputDisabled,setIsInputDisabled] = useState(false); 

    const onDeleteTodo = (id) => {
        deleteToDo(id)
    }
    //  console.log(todos);
    return (
        <div className='mt15px' >
            <ul className='pl0px'>
                {
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            onClick={(e) => {
                                setIsInputDisabled(true)
                            }}
                            className="todolist mb5px">

                            <input
                                type="text"
                                value={todo.todoName}
                                disabled={isInputDisabled ? true : ''}
                                onChange={() => {
                                    console.log(todo.id)
                                }}

                            />
                            <button onClick={() => onDeleteTodo(todo.id)}>Sil</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoLists