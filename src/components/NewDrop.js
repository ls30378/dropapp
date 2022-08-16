import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { FlatList, Modal, SafeAreaView, ScrollView, StatusBar, Switch, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
const TitleText = styled.Text`
font-family:"Poppins_400Regular";
font-size:20px;
text-align:center;
color:white;
`
const AddButton = styled(LinearGradient).attrs({
    colors: ['#2468E5', '#483BC0'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
})`
padding:20px;
border-radius:10px;
/* flex:1; */
font-family:'Poppins_400Regular';
box-shadow:4px 4px 4px white;
`;

const DropView = styled(LinearGradient).attrs({
    colors: ['rgba(74, 47, 67, 0.8)', 'rgba(24, 43, 62, 0.8)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
})`
flex-shrink:0 ;
padding:10px;
border-radius:10px;
flex:1;
font-family:'Poppins_400Regular';
`;

const SafeArea = styled(SafeAreaView)`
flex:1;
margin-top:${StatusBar && StatusBar.currentHeight + 10}px;
`

function NewDrop({ navigation, showDrop, setShowDrop }) {
    // const arr = Array.from(new Array(4));
    const thumbnails = [{
        id: 1,
        icon: 'md-logo-dropbox',
        color: 'blue'
    },
    {
        id: 2,
        icon: 'basket-sharp',
        color: 'brown'
    },
    {
        id: 3,
        icon: 'fast-food',
        color: 'tomato'
    },
    {
        id: 4,
        icon: 'pricetag',
        color: 'red'
    },
    {
        id: 5,
        icon: 'md-videocam',
        color: 'red'
    },
    {
        id: 6,
        icon: 'happy',
        color: 'green'
    },
    {
        id: 7,
        icon: 'musical-notes'
    },
    {
        id: 8,
        icon: 'md-logo-bitcoin',
        color: 'green'
    },
    ]
    const [selected, setSelected] = useState(1);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Modal animationType="slide" transparent={true} visible={showDrop} onRequestClose={() => setShowDrop(!showDrop)}>
            <SafeArea>

                <DropView>
                    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between', minHeight: 500 }}>

                        <View>
                            <TitleText style={{ fontFamily: "Poppins_400Regular" }}>New Drop</TitleText>
                            <Text style={{ color: 'white', textAlign: 'center' }}>You just drop new container to this locations, please customize it</Text>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ color: "white" }}>Add Thumbnail</Text>
                            <FlatList style={{ marginTop: 10, flexGrow: 0, }} horizontal={true} data={thumbnails} renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => setSelected(item.id)} style={{ backgroundColor: selected === item.id ? 'rgba(1,1,1,0.2)' : 'transparent', marginRight: 20, borderRadius: 10, height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}><Ionicons name={`${item.icon}`} size={40} color={selected === item.id ? item.color : 'white'} /></TouchableOpacity>} keyExtractor={(item, i) => i} />

                        </View>
                        <View style={{ color: 'white' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ color: 'white' }}>Protection</Text>
                                <Switch trackColor={{
                                    false: '#767577', true: '#81b0ff'
                                }}
                                    thumbColor={isEnabled ? 'rgba(74, 47, 67, 1)' : "#f4f3f4"}
                                    ios_backgroundColor='#3e3e3e'
                                    onValueChange={toggleSwitch}
                                    value={isEnabled} />
                            </View>
                            {isEnabled && <TextInput theme={{ colors: { text: 'white', } }} underlineColor='white' secureTextEntry={true} placeholderTextColor={'white'} style={{ backgroundColor: 'transparent', }} placeholder='Enter password' />}

                        </View>
                        <AddButton >
                            <TouchableOpacity onPress={() => navigation.navigate("Success")}><Text style={{ color: 'white', textAlign: 'center' }}>Add Drop</Text>
                            </TouchableOpacity>
                        </AddButton>
                    </ScrollView>
                </DropView>
            </SafeArea>
        </Modal>
    )
}

export default NewDrop