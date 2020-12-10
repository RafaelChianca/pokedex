import React from 'react';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import api from './services/api';

test('renders pokedex properly', () => {
    expect(<Pokedex />).toBeDefined();
})

test('renders pokemon page properly', () => {
    expect(<Pokemon />).toBeDefined();
})

test('fetches pokemon list correctly', () => {
    api
    .get(`/pokemon/?limit=${20}&offset=${0}`)
    .then((response) => {
        expect(response.data.results.length).toBe(20);
    })
})

test('fetches pokemon correctly', () => {
    const pokeID = 22;
    api
    .get(`/pokemon/${22}/`)
    .then((response) => {
        expect(response.data.id).toBe(pokeID);
    })
})