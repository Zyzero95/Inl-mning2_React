import {React, useState, useEffect, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import PokemonService from '../../api/service/PokemonService'
import loadingBar from '../../images/loadingbar.gif'
import {UserContext} from '../../provider/UserProvider'

export const DataView=() => {
    const numberArray = [1, 10, 20, 30];
    const pokemonMap = numberArray.map(x => x * 2);
    const [pokemon, setPokemon] = useContext(UserContext)
    const [count, setCount] = useState(1);
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(() =>{
            {getPokemonNameFromPokemonAPI()}
    }, 5000);
        }, [count])
        

    const getPokemonNameFromPokemonAPI = async () => {
        const {data} = await PokemonService.getPokemonName(count)
        setPokemon(data)
        setLoading(false)
    }

    const buttons = () => {
        return <div>
            <button onClick={() => setCount(count + 1)}>Increment</button><br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    }

    const displayPokemonName = () => {
       if (!loading){
        if(pokemon || undefined){
            return <div>
                <h2>{(pokemon || undefined)?.name}</h2>
            </div>
        }
       }
       else{
           return <img className="loadingGif" src={loadingBar} alt={'Error..'} />
       }
    }

    return (
        <div>
            State: {location.state}
            {displayPokemonName()}
            {buttons()}
            <span className="pokemonArray">Array of numbers: {pokemonMap[0]}, {pokemonMap[1]}, {pokemonMap[2]}, {pokemonMap[3]}</span>
        </div>
    )
}
