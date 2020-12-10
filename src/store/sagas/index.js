import { Alert } from 'react-native';
import { call, all, put, takeLatest } from 'redux-saga/effects'
import api from '../../services/api';
import * as PokemonActions from '../actions/pokemon';
// worker Saga: will be fired on LIST_POKEMON_REQUESTED actions

function* listPokemon(action) {
    
    try{
        const page = action.payload.page;    
        const limit = action.payload.limit;
        
        const pokemonList = yield call(api.get, `/pokemon/?limit=${limit}&offset=${page*limit}`);
        yield put(PokemonActions.listPokemonSucceeded(pokemonList.data));
    }catch(err){
        Alert.alert("Error loading pokemon list!", err.message);
        yield put(PokemonActions.listPokemonFailed());
    }
}

function* loadPokemon(action) {
    
    try{
        const name = action.payload.name;    
        
        const pokemon = yield call(api.get, `/pokemon/${name}/`);
        yield put(PokemonActions.loadPokemonSucceeded(pokemon.data));
    }catch(err){
        Alert.alert("Error loading pokemon!", err.message);
        yield put(PokemonActions.loadPokemonFailed());
    }
}

/*
  Does not allow concurrent fetches of pokemon. If "LIST_POKEMON_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    return yield all([
        takeLatest("LIST_POKEMON_REQUESTED", listPokemon),
        takeLatest("LOAD_POKEMON_REQUESTED", loadPokemon),
    ]);
}

export default mySaga;