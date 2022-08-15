import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { Text } from 'react-native';
import 'react-native-gesture-handler';
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
function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default App