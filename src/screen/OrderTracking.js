import MyHeader from '../Components/Common/MyHeader'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps';
import Colour from '../Components/utils/Colour';
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function OrderTracking({ navigation }) {
    const [text, setText] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyHeader
                title={"Order Tracking"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            <ScrollView>

                <View style={{
                    marginTop: 10,
                    height: heightPixel(530),
                    backgroundColor: '#fff',
                    elevation: 10,
                    borderRadius: 5,
                    overflow: 'hidden',
                    marginHorizontal: 10,
                }}>
                    <MapView

                        style={StyleSheet.absoluteFill}
                        initialRegion={{
                            latitude: 28.5355,
                            longitude: 77.391,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', paddingVertical: "3%", backgroundColor: Colour.Crimson, marginHorizontal: 15, borderRadius: 7, marginTop: "8%" }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: heightPixel(40), backgroundColor: Colour.Orange, width: widthPixel(40), borderRadius: 10 }}>
                        <Ionicons name="ios-time-outline" color={Colour.White} size={22} />

                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: fontPixel(18), color: Colour.Black, fontWeight: '500' }}>Delivery time</Text>
                        <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>10 minutes</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', paddingVertical: "3%", backgroundColor: Colour.Crimson, marginHorizontal: 15, borderRadius: 7, marginTop: "2%" }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: heightPixel(40), backgroundColor: Colour.Orange, width: widthPixel(40), borderRadius: 10 }}>
                        <Image source={require('../assets/Locationsicone.png')} style={{ height: 20, width: 15 }} />
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: fontPixel(18), color: Colour.Black, fontWeight: '500' }}>Delivery Address</Text>
                        <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>Mathil Perul Mathamangalam Rd ,Town Mathil Kerala,India,670343 ,4985258150</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OrderTracking')}
                    style={{ flexDirection: 'row', elevation: 10, paddingVertical: 13, borderRadius: 10, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 5 }}>
                    <Ionicons name="ios-home" color={Colour.White} size={18} />
                    <Text style={{ color: Colour.White, fontWeight: '500', left: 5 }}>Home</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}