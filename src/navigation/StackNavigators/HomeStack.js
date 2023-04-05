import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTow from '../../screen/HomeTow';
import HomeScreen from '../../screen/HomeScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeTow"
                component={HomeTow}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default HomeStack;
