import React, {useEffect, useRef, useState} from "react";


const users = [
    {name: 'Sarah', age: 20},
    {name: 'Sara', age: 20},
    {name: 'Sarh', age: 20},
    {name: 'Saah', age: 20},
]


const UserSearch: React.FC = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }

    return <div>
        User Search
        <input ref={inputRef} value={name} onChange={(event) => {
            setName(event.target.value)
        }}/>

        <button onClick={onClick}>Find User</button>
        <div>
            {user?.name}
            {user?.age}
        </div>
    </div>
}

export default UserSearch
