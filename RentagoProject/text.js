import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AllTask from './'

const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="GoogleMapSearch"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right', // Set the animation option
            }}
        >
            <Stack.Screen name="Test" component={Test} />

        </Stack.Navigator>
    </NavigationContainer>
    );
};