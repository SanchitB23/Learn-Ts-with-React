import React, {useState} from "react";

const GuestList: React.FC = () => {

    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setName('')
        setGuests([...guests, name])
    }

    return (
        <div>
            <h3>
                GuestList
            </h3>
            <ul>
                {guests.map((guest) => {
                    return <li key={guest}>{guest}</li>
                })}
            </ul>
            <input value={name} onChange={(event) => {
                setName(event.target.value)
            }}/>
            <button onClick={onClick}>Add Guests</button>
        </div>
    )
}

export default GuestList
