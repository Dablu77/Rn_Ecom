import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colour from '../utils/Colour';

const MyButton = props => {
    return (
        <View>
            <View style={{ marginVertical: 20 }}>
                <TouchableOpacity
                    onPress={props.onPress}
                    style={{
                        paddingVertical: 13,
                        backgroundColor: Colour.Orange,
                        alignItems: 'center',
                        marginHorizontal: 20,
                        borderRadius: 10,
                    }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyButton;
