function selectColorByMainType(pokemon) {
    let type = 'none';

    if (pokemon && pokemon.types[0] && pokemon.types[0].type) {
        type = pokemon.types[0].type.name;
    }

    switch (type.toLowerCase()) {
        case 'ice':
        case 'flying':
        case 'water':
            return' rgb(92, 172, 243)';
        case 'grass':
        case 'bug':
            return 'rgb(141, 213, 120)';
        case 'fire':
            return 'rgb(253, 166, 94)';
        case 'fighting':
            return 'rgb(233, 76, 114)';
        case 'electric':
            return' rgb(241, 202, 95)';
        case 'rock':
        case 'ground':
            return 'rgb(245, 133, 87)';
        case 'ghost':
        case 'psychic':
        case 'fairy':
        case 'dark':
        case 'poison':
            return 'rgb(186, 113, 218)';
        default:
            return 'lightgray';
    }
}

function selectColorByType(type) {
    switch (type.toLowerCase()) {
        case 'ice':
        case 'flying':
        case 'water':
            return' rgb(78, 146, 215)';
        case 'grass':
        case 'bug':
            return 'rgb(144, 177, 65)';
        case 'fire':
            return 'rgb(251, 125, 51)';
        case 'fighting':
            return 'rgb(220, 72, 108)';
        case 'electric':
            return' rgb(215, 192, 64)';
        case 'rock':
        case 'ground':
            return 'rgb(203, 111, 72)';
        case 'ghost':
        case 'psychic':
        case 'fairy':
        case 'dark':
        case 'poison':
            return 'rgb(164, 86, 201)';
        default:
            return 'darkgray';
    }
}

export {
    selectColorByMainType,
    selectColorByType
}