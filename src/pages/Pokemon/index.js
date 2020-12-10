import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import api from '../../services/api';
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

export default function Pokemon({ route }) {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (route && route.params && route.params.name) {
            loadPokemon(route.params.name);
        }
    }, []);

    async function loadPokemon(name) {
        try {
            setLoading(true);
            api
            .get(`/pokemon/${name}/`)
            .then((response) => {
                setPokemon(response.data);
            })
        } catch (error) {
            Alert.alert('Erro ao carregar pokemon!', error);
        } finally {
            setLoading(false);
        }
    }

    function selectColorByMainType() {
        let type = 'none';

        if (pokemon) {
            type = pokemon.types[0].type.name;
        }

        switch (type.toLowerCase()) {
            case 'ice':
            case 'flying':
            case 'water':
                return' rgb(92, 172, 243)';
                break;
            case 'grass':
            case 'bug':
                return 'rgb(141, 213, 120)';
                break;
            case 'fire':
                return 'rgb(253, 166, 94)';
                break;
            case 'fighting':
                return 'rgb(233, 76, 114)';
                break;
            case 'electric':
                return' rgb(241, 202, 95)';
                break;
            case 'rock':
            case 'ground':
                return 'rgb(245, 133, 87)';
                break;
            case 'ghost':
            case 'psychic':
            case 'fairy':
            case 'dark':
            case 'poison':
                return 'rgb(186, 113, 218)';
                break;
            default:
                return 'lightgray';
                break;
        }
    }

    function selectColorByType(type) {
        switch (type.toLowerCase()) {
            case 'ice':
            case 'flying':
            case 'water':
                return' rgb(78, 146, 215)';
                break;
            case 'grass':
            case 'bug':
                return 'rgb(144, 177, 65)';
                break;
            case 'fire':
                return 'rgb(251, 125, 51)';
                break;
            case 'fighting':
                return 'rgb(220, 72, 108)';
                break;
            case 'electric':
                return' rgb(215, 192, 64)';
                break;
            case 'rock':
            case 'ground':
                return 'rgb(203, 111, 72)';
                break;
            case 'ghost':
            case 'psychic':
            case 'fairy':
            case 'dark':
            case 'poison':
                return 'rgb(164, 86, 201)';
                break;
            default:
                return 'darkgray';
                break;
        }
    }

    return (
        <Container backgroundColor={selectColorByMainType}>
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
                        <Number>#{pokemon.id}</Number>
                        <Name>{pokemon.forms[0].name}</Name>
                        <FlatList
                            data={pokemon.types}
                            renderItem={({ item }) =>
                                <TypeContainer backgroundColor={selectColorByType(item.type.name)}>
                                    <Type>{item.type.name}</Type>
                                </TypeContainer>
                            }
                            keyExtractor={item => item.type.name}
                            columnWrapperStyle={{flexWrap: 'wrap', paddingBottom: 10}}
                            numColumns={10}
                        />
                        <FlatList
                            data={pokemon.stats}
                            renderItem={({ item, index }) =>
                                <StatContainer>
                                    <Stat>{item.stat.name}</Stat>
                                    <Stat>{item.base_stat}</Stat>
                                </StatContainer>
                            }
                            keyExtractor={item => item.stat.name}
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