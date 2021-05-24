import React, {useState, createContext} from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({children}) =>{
    const [pokemon, setPokemon] = useState(undefined)

    return(
        <UserContext.Provider value={[pokemon, setPokemon]}>{children}</UserContext.Provider>
    )
}