import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../screen/Cart';
import Payment from '../../screen/Payment';
import OrderDetails from '../../screen/OrderDetails';

const Stack = createNativeStackNavigator();

function CartStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default CartStack;
