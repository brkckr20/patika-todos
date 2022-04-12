import { useState } from 'react'

const List = ({ contacts }) => {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        })
    })

    //console.log(filtered);

    return (
        <div>
            <input
                type="text"
                placeholder='Filter Contact'
                onChange={(e) => setFilterText(e.target.value)}
                value={filterText} />
            <ul className='list'>
                {
                    filtered.map((contact) => (
                        <li key={contact.phonenumber}>
                            <span>{contact.fullname}</span>
                            <span>{contact.phonenumber}</span>
                        </li>
                    ))
                }
            </ul>
            <p>Total Contact : {filtered.length}</p>
        </div>
    )
}

export default List