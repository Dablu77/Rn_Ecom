import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { fontPixel, widthPixel } from '../Dimensions';
import Colour from '../utils/Colour';


const MyHeader = props => {
    return (
        <SafeAreaView style={{}}>
            <View
                style={{
                    backgroundColor: Colour.White,
                    paddingHorizontal: '4%',
                    paddingVertical: 15,
                    marginTop: 35,
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity onPress={props.onPress}>
                            <FontAwesome5 name="angle-left" color={"#313232"} size={28} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: fontPixel(20),
                                color: Colour.Black,
                                paddingLeft: "5%"
                            }}>
                            {props.title}
                        </Text>
                    </View>
                    <TouchableOpacity style={{ borderRadius: 10, backgroundColor: Colour.Green, alignItems: 'center', justifyContent: "center", width: widthPixel(50) }}>
                        <Text style={{ color: Colour.White, fontWeight: '500' }}>{props.titletwo}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MyHeader;