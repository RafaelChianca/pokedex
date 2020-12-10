import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Pokedex from './pages/Pokedex/index';
import Pokemon from './pages/Pokemon/index';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Pokedex"
                screenOptions={{
                    headerShown: false,
                    headerTintColor: '#FFF'
                }}
            >
                <Stack.Screen name="Pokedex" component={Pokedex} />
                <Stack.Screen name="Pokemon" component={Pokemon} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;