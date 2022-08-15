import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewDrop from './NewDrop';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
const TouchText = styled.Text`
flex:1;`
const SafeArea = styled(SafeAreaView)`
flex:1;
margin-top: ${StatusBar && StatusBar.height}px;
`
function BrowseView({ navigation }) {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [openModal, setOpenModal] = useState(false);
    return (

        <Camera style={{ flex: 1 }} type={CameraType.back}>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 20 }}>
                <NewDrop navigation={navigation} showDrop={openModal} setShowDrop={setOpenModal} />

                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 80,
                    width: 80,
                    borderRadius: 80,
                    borderWidth: 8,
                    borderColor: '#0072F6',
                    backgroundColor: "rgba(255,255,255,0.3)"
                }} onPress={() => setOpenModal(true)}>
                    <Ionicons name="md-logo-dropbox" size={40} color="#0072F6" />
                </TouchableOpacity>
            </View>

        </Camera>
    )
}
export default BrowseView