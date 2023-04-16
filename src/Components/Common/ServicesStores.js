import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import Colour from '../utils/Colour';
import { fontPixel, heightPixel, widthPixel } from '../Dimensions';

const ServicesStores = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                // justifyContent: 'center',
                marginTop: "5%",
                width: heightPixel(130),
                marginHorizontal: 4,
                backgroundColor: Colour.White,
                elevation: 10,
                borderRadius: 10,

            }}>
            <View style={{ marginTop: -20, alignItems: 'center', justifyContent: 'center', }}>
                <Image
                    source={props.image}
                    style={{
                        width: widthPixel(115),
                        height: heightPixel(155),
                        resizeMode: 'contain',
                    }}
                />
            </View>

            <View style={{ marginHorizontal: 10, top: -20 }}>
                <Text
                    style={{
                        fontSize: fontPixel(17),
                        fontWeight: 'bold',
                        color: Colour.Black,
                    }}>
                    {props.title}
                </Text>
                <Text
                    style={{
                        fontSize: fontPixel(16),
                        fontWeight: 'bold',
                        color: Colour.Lightgrey,
                    }}>
                    {props.Subtitle}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ServicesStores;