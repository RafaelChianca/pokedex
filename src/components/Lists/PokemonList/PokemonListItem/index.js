import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    TouchableContainer,
    Container,
    InfoContainer,
    Name,
    Number,
    Background,
} from './styles';
import pokeball from '../../../../../assets/pokeball.png';

export default function PokemonListItem({ pokemon }) {

    const navigation = useNavigation();

    function inspectPokemon() {
        navigation.navigate('Pokemon', {name: pokemon.name});
    }

    return (
        <TouchableContainer onPress={inspectPokemon}>
            <Container>
                {pokemon &&
                    <>
                        <InfoContainer>
                            <Number>{'#'+`${pokemon.url.split('pokemon/')[1].split('/')[0]}`}</Number>
                            <Name>{pokemon.name}</Name>
                        </InfoContainer>
                        <Background source={pokeball} />
                    </>
                }
            </Container>
        </TouchableContainer>
    );
}
