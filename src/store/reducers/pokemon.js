const INITIAL_STATE = {
    error: false,
    loading: false,
    pokemonList: [],
    pokemon: [],
}

function pokemon (state = INITIAL_STATE, action) {

    switch(action.type){

        case 'LIST_POKEMON_REQUESTED':
            return {...state, loading: true }
        case 'LIST_POKEMON_SUCCEEDED':
            return {...state, error: false, loading: false, pokemonList: action.payload.pokemonList }
        case 'LIST_POKEMON_FAILED':
            return {...state, error: true, loading: false }
        case 'LOAD_POKEMON_REQUESTED':
            return {...state, loading: true }
        case 'LOAD_POKEMON_SUCCEEDED':
            return {...state, error: false, loading: false, pokemon: action.payload.pokemon }
        case 'LOAD_POKEMON_FAILED':
            return {...state, error: true, loading: false }
        case 'CLEAR_ALL_POKEMON':
            return INITIAL_STATE
        default:
            return state;
    }
}

export default pokemon;
