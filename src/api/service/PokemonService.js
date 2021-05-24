import http from '../service/PokemonAPI'

const getPokemonName = (number) => {
    return http.get(`pokemon/${number}`)
}

export default {
    getPokemonName
}