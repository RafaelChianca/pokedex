import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import PokemonListItem from './PokemonListItem';
import { Container, ListFooter, ListLabel } from './styles';
import api from '../../../services/api';
import { listPokemonRequested } from '../../../store/actions/pokemon';
import { useDispatch, useSelector } from 'react-redux';

export default function PokemonList() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.pokemon.loading);
    const pokemonListResponse = useSelector(state => state.pokemon.pokemonList);
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(0);
    const [maxLength, setMaxLength] = useState(-1);
    const limit = 20;

    useEffect(() => {
        return () => {
            setPokemonList([]);
            setPage(0);
        }
    }, []);

    useEffect(() => {
        dispatch(listPokemonRequested(page, limit));
    }, [page]);

    useEffect(() => {
        if (pokemonListResponse && pokemonListResponse && pokemonListResponse.results) {
            if (pokemonListResponse.count) {
                setMaxLength(pokemonListResponse.count);
            }
            if (page === 0) {
                setPokemonList(pokemonListResponse.results);
            } else {
                setPokemonList((l) => l.concat(pokemonListResponse.results));
            }
        }
    }, [pokemonListResponse]);

    function loadMore() {
        if (pokemonList.length > 0 && !loading) {
            if (maxLength === -1 || pokemonList.length < maxLength) {
                setPage((p) => p + 1);
            }
        }
    }

    return (
        <Container>
            <ListLabel>Pokedex</ListLabel>
            <FlatList
                data={pokemonList}
                renderItem={({ item }) =>
                    <PokemonListItem pokemon={item} />
                }
                keyExtractor={item => item.name}
                ListFooterComponent={
                    <ListFooter>
                        {loading &&
                            <ActivityIndicator size="large" color="black" />
                        }
                    </ListFooter>
                }
                maxToRenderPerBatch={20}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMore}
            />
        </Container>
    );
}
