import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screen/Splash';
import BottomNavigator from '../BottomNavigator';
import Location from '../../screen/Location';
import Login from '../../screen/Login';
import Otp from '../../screen/Otp';
import OrderTracking from '../../screen/OrderTracking';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTracking}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default AuthStack;
