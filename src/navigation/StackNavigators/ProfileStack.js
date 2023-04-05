import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screen/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default ProfileStack;
