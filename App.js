import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components/native';
import BrowseView from './src/components/BrowseView';
import Login from './src/components/Login';
import SuccessNewDrop from './src/components/SuccessNewDrop';

const Stack = createStackNavigator()
const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{
                transitionSpec: {

                    open: TransitionSpecs.RevealFromBottomAndroidSpec,
                    close: TransitionSpecs.RevealFromBottomAndroidSpec
                },
            }} />
            <Stack.Screen name="BrowseView" component={BrowseView} options={{
                transitionSpec: {

                    open: TransitionSpecs.RevealFromBottomAndroidSpec,
                    close: TransitionSpecs.RevealFromBottomAndroidSpec
                },
            }} />
            <Stack.Screen name="Success" component={SuccessNewDrop} options={{
                transitionSpec: {

                    open: TransitionSpecs.RevealFromBottomAndroidSpec,
                    close: TransitionSpecs.RevealFromBottomAndroidSpec
                },
            }} />

        </Stack.Navigator>
    )
}
const SafeArea = styled(SafeAreaView)`
flex:1;
margin-top:${StatusBar && StatusBar.currentHeight}px`
function App() {
    return (
        <NavigationContainer>
            <SafeArea>
                <MyStack />
            </SafeArea>
        </NavigationContainer>
    )
}

export default App