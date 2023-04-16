import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTow from '../../screen/HomeTow';
import HomeScreen from '../../screen/HomeScreen';
import ProductInfo2 from '../../screen/ProductInfo2';
import StoresScreen from '../../screen/StoresScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="StoresScreen"
                component={StoresScreen}
                options={{ headerShown: false }}
            />
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
            <Stack.Screen
                name="Product info"
                component={ProductInfo2}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;
