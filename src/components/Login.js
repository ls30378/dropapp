import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts as usePoppins, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SafeArea = styled(SafeAreaView)`
flex:1;
padding:10px;
justify-content:space-evenly;
margin-top:${StatusBar && StatusBar.currentHeight}px`
const TitleText = styled.Text`
font-family:'Poppins_600SemiBold';
/* font-weight:bold; */
color:white;
font-size:50px;
text-align:center;
`
const LoginButton = styled(Button)`
border-radius:3px;
background-color:#5958D1;
color:white;
padding:10px;
margin-top:-10px;
/* zIndex:1; */
/* elevation:1; */
zIndex:1;
elevation:1;
`

const Input = styled(TextInput)`
/* border-radius:3px 3px 0 0; */
background-color:'#fff';
zIndex:2;
elevation:2;`


const GuestButton = styled(LinearGradient).attrs({
  colors: ['#2566E3', '#473ABF'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
padding:15px;
border-radius:3px;
font-family:'Poppins_400Regular';
`;
export default function Login({ navigation }) {
  let [fontsLoaded] = usePoppins({
    Poppins_400Regular,
  })
  let [boldLoaded] = usePoppins({
    Poppins_600SemiBold
  })

  if (!fontsLoaded && !boldLoaded) {
    return <AppLoading />
  }
  return (

    <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={require('../../assets/wallpaper.jpg')}>

      <SafeArea>
        <TitleText>Digicache</TitleText>
        <View>
          <Input style={{ backgroundColor: 'white' }} placeholder='Email'></Input>
          <Input style={{ backgroundColor: 'white', borderRadius: 5, border: 0, outline: 'none' }} secureTextEntry={true} placeholder='Password'></Input>
          <LoginButton labelStyle={{ color: "white", fontFamily: "Poppins_400Regular", paddingTop: 3 }}>Sign in</LoginButton>
          <Text style={{ color: 'white', textAlign: 'center' }}>or</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("BrowseView")}
          >

            <GuestButton ><Text style={{ fontFamily: 'Poppins_400Regular', textAlign: 'center', color: 'white' }}>Continue as guest</Text></GuestButton>
          </TouchableOpacity>
        </View>

        <ExpoStatusBar style="light" />

      </SafeArea>
    </ImageBackground>
  );
}

