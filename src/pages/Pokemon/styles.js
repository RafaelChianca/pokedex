import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.backgroundColor
        ? props.backgroundColor
        : 'white'
    };
    padding: 20px;
`;

export const LoadingBackground = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Number = styled.Text`
    color: black;
    font-size: 22px;
    font-weight: bold;
`;

export const Name = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const TypeContainer = styled.View`
    background-color: ${props => props.backgroundColor};
    width: 80px;
    height: 30px;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
`;

export const Type = styled.Text`
    color: white;
    font-size: 18px;
`;

export const StatContainer = styled.View`
    width: 100%;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-style: solid;
    border-bottom-width: 2px;
`;

export const Stat = styled.Text`
    color: black;
    font-size: 18px;
`;