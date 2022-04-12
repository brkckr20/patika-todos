import React, { useEffect, useState } from 'react'
const initialFormValue = { fullname: '', phonenumber: '' }
const Form = ({ addContacts, contacts }) => {
    const [form, setForm] = useState(initialFormValue)

    //form alanlarının temizlenmesi işlemi
    useEffect(() => {
        setForm(initialFormValue)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === '' || form.phonenumber === '') {
            return false
        }
        addContacts([...contacts, form])
        //console.log(form);
        //setForm(initialFormValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    name='fullname'
                    placeholder='Fullname'
                    onChange={onChangeInput}
                    value={form.fullname}
                />
            </div>
            <div>
                <input
                    type="text"
                    name='phonenumber'
                    placeholder='Phone Number'
                    onChange={onChangeInput}
                    value={form.phonenumber}
                />
            </div>
            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form