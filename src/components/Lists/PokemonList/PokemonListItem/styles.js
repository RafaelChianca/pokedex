import styled from 'styled-components/native';

export const TouchableContainer = styled.TouchableOpacity`
    height: 100px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 10px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: red;
    flex-direction: row;
    justify-content: space-between;
`;

export const Background = styled.ImageBackground`
    height: 100px;
    width: 100px;
    justify-content: center;
    align-items: center;
`;


export const Number = styled.Text`
    color: black;
    font-size: 14px;
`;

export const Name = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const InfoContainer = styled.View`
    flex-direction: column;
    flex: 1;
    padding-left: 10px;
    padding: 10px;
`;