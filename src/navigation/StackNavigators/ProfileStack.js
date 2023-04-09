import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screen/Profile';
import ProfileSignUpScreen from '../../screen/ProfileSignUpScreen';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProfileSignUpScreen"
                component={ProfileSignUpScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default ProfileStack;
