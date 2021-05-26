import React, {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('')
    const {searchRepositories} = useActions()
    const {data, error, loading} = useTypeSelector((state) => state.repositories)


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        searchRepositories(term)
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input value={term} onChange={event => setTerm(event.target.value)}/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>loading...</h3>}
            {!error && !loading && data.map((name) => {
                return <div key={name}>{name}</div>
            })}
        </div>
    )
}

export default RepositoriesList
