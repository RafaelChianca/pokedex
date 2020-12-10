import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, TouchableOpacity, View } from 'react-native';
import PokemonListItem from './PokemonListItem';
import { Container, ListFooter, ListLabel } from './styles';
import api from '../../../services/api';

export default function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(0);
    const [maxLength, setMaxLength] = useState(-1);
    const [loading, setLoading] = useState(false);
    const limit = 20;

    useEffect(() => {
        return () => {
            setPokemonList([]);
            setPage(0);
        }
    }, []);

    useEffect(() => {
        loadPokemonList(page, limit);
    }, [page]);

    function loadMore() {
        if (pokemonList.length > 0 && !loading) {
            if (maxLength === -1 || pokemonList.length < maxLength) {
                setPage((p) => p + 1);
            }
        }
    }

    async function loadPokemonList(page, limit) {
        try {
            setLoading(true);
            api
            .get(`/pokemon/?limit=${limit}&offset=${page*limit}`)
            .then((response) => {
                if (response && response.data && response.data.results) {
                    if (response.data.count) {
                        setMaxLength(response.data.count);
                    }
                    if (page === 0) {
                        setPokemonList(response.data.results);
                    } else {
                        setPokemonList((l) => l.concat(response.data.results));
                    }
                }
            })
        } catch (error) {
            Alert.alert('Error loading list!', error);
        } finally {
            setLoading(false);
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
