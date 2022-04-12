import React, { useState } from 'react'

const AddToDo = ({addToDo }) => {

    const [todoAdd, setToDoAdd] = useState('')

    const formOnSubmit = (e) => {
        e.preventDefault();
        addToDo(todoAdd);
        setToDoAdd('');
    }

    const inputOnChange = (e) => {
        setToDoAdd(e.target.value);
    }


    return (
        <>
            <form onSubmit={formOnSubmit}>
                <input type="checkbox" />
                <input type="text" placeholder='to do gir' value={todoAdd} onChange={inputOnChange} />
            </form>
        </>
    )
}

export default AddToDo