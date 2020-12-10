import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import {
    Container,
    LoadingBackground,
    Name,
    TypeContainer,
    Type,
    Number,
    StatContainer,
    Stat,
} from './styles';
import pokeball from '../../../assets/pokeball.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemonRequested } from '../../store/actions/pokemon';
import { selectColorByMainType, selectColorByType } from '../../utils';

export default function Pokemon({ route }) {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.pokemon.loading);
    const pokemonResponse = useSelector(state => state.pokemon.pokemon);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        if (route && route.params && route.params.name) {
            dispatch(loadPokemonRequested(route.params.name));
        }
    }, []);

    useEffect(() => {
        if (pokemonResponse && Object.keys(pokemonResponse).length > 0) {
            setPokemon(pokemonResponse);
        }
    }, [pokemonResponse]);

    return (
        <Container backgroundColor={selectColorByMainType(pokemon)}>
            {loading || !pokemon
                ? (
                    <LoadingBackground
                        source={pokeball}
                        resizeMode="contain"
                    >
                        <ActivityIndicator size="large" color="black"/>
                    </LoadingBackground>
                )
                : pokemon && (
                    <>
                        <Number>#{pokemon.id ? pokemon.id : ''}</Number>
                        <Name>
                            {pokemon.forms[0] && pokemon.forms[0].name
                                ? pokemon.forms[0].name
                                : ''
                            }
                        </Name>
                        <FlatList
                            data={pokemon.types ? pokemon.types : []}
                            renderItem={({ item }) =>
                                <TypeContainer backgroundColor={selectColorByType(item.type.name)}>
                                    <Type>{item.type && item.type.name ? item.type.name : ''}</Type>
                                </TypeContainer>
                            }
                            keyExtractor={item => item.type.name}
                            columnWrapperStyle={{flexWrap: 'wrap', paddingBottom: 10}}
                            numColumns={10}
                        />
                        <FlatList
                            data={pokemon.stats ? pokemon.stats : []}
                            renderItem={({ item }) =>
                                <StatContainer>
                                    <Stat>{item.stat && item.stat.name ? item.stat.name : '-'}</Stat>
                                    <Stat>{item.base_stat ? item.base_stat : '0'}</Stat>
                                </StatContainer>
                            }
                            keyExtractor={item => item.stat && item.stat.name ? item.stat.name : Math.random()}
                            columnWrapperStyle={{flexWrap: 'wrap', paddingBottom: 10}}
                            numColumns={10}
                            scrollEnabled={false}
                        />
                    </>
                )
            }
        </Container>
    );
}