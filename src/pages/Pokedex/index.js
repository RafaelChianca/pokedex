import React from 'react';
import { Container } from './styles';
import PokemonList from '../../components/Lists/PokemonList/index';

export default function Pokedex() {

    return (
        <Container>
            <PokemonList />
        </Container>
    );
}
