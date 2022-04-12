import React, { useState } from 'react'
import AddToDo from './AddToDo'
import ToDoLists from './ToDoLists'
import ToDoSummary from './ToDoSummary'

const Main = () => {

    const [todos, setToDos] = useState(
        [
            {
                id: 1,
                todoName: "Kodlama yap",
                completed: false
            },
            {
                id: 2,
                todoName: "Ders çalış",
                completed: true
            }
        ]
    )

    const addToDo = (todoName) => {
        setToDos([...todos, { id: todos.length + 10, todoName: todoName, completed: false }])
    }

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setToDos(filteredTodos)
    }


    return (
        <div>
            <h1>todos</h1>
            <AddToDo todos={todos} addToDo={addToDo} />
            <ToDoLists todos={todos} deleteToDo={deleteTodo} />
            <ToDoSummary todos={todos}/>
        </div>
    )
}

export default Main