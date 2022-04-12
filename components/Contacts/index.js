import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'

import './styles.css'
const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname: 'Mehmet',
            phonenumber: 1234
        },
        {
            fullname: 'Nazlı',
            phonenumber: 43321
        }
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List
                contacts={contacts}
            />
            <Form
                addContacts={setContacts}
                contacts={contacts}
            />
        </div>
    )
}

export default Contacts