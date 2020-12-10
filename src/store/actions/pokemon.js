export const listPokemonRequested = (page, limit) => ({
    type: 'LIST_POKEMON_REQUESTED',
    payload: { page, limit },
})

export const listPokemonSucceeded = (pokemonList) => ({
    type: 'LIST_POKEMON_SUCCEEDED',
    payload: { pokemonList },
})

export const listPokemonFailed = () =>({
    type: 'LIST_POKEMON_FAILED',
})

export const loadPokemonRequested = (name) => ({
    type: 'LOAD_POKEMON_REQUESTED',
    payload: { name },
})

export const loadPokemonSucceeded = (pokemon) => ({
    type: 'LOAD_POKEMON_SUCCEEDED',
    payload: { pokemon },
})

export const loadPokemonFailed = () =>({
    type: 'LOAD_POKEMON_FAILED',
})