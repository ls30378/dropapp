import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
const DropView = styled(LinearGradient).attrs({
    colors: ['rgba(74, 47, 67, 1)', 'rgba(24, 43, 62, 1)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
})`
flex-shrink:0 ;
padding:10px;
border-radius:10px;
flex:1;
font-family:'Poppins_400Regular';
justify-content:center ;
align-items:center ;
`;
function SuccessNewDrop({ navigation }) {
    return (
        <DropView>
            <Text style={{ color: 'white', textAlign: 'center' }}>Congrats! You just added a new drop!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </DropView>
    )
}

export default SuccessNewDrop