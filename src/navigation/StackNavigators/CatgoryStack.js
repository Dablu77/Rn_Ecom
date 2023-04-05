import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catgoriys from '../../screen/Catgoriys';
import SubCatgoris from '../../screen/SubCatgoris';

const Stack = createNativeStackNavigator();

function CatgoryStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SubCatgoris"
                component={SubCatgoris}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Catgoriys"
                component={Catgoriys}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default CatgoryStack;
