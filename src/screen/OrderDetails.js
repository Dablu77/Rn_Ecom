import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import MyHeader from '../Components/Common/MyHeader'
import Colour from '../Components/utils/Colour'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions'
import { Colors } from 'react-native/Libraries/NewAppScreen'
// import { ProgressBar, MD3Colors } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function OrderDetails({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Order Details"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 15, marginTop: 20 }}>
                    <Text style={{ fontSize: fontPixel(18), color: Colour.Black, fontWeight: '500' }}>Strawberry Juice</Text>
                    <Text style={{ color: Colour.Green, fontSize: fontPixel(14), fontWeight: '500' }}>Order Confirmed</Text>
                </View>
                <Text style={{ marginHorizontal: 15, marginTop: 10, fontSize: fontPixel(13), color: Colour.Lightgrey }}>(March 20, 2022 at 11 AM)</Text>
                <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                    <Text style={{ fontSize: fontPixel(17), color: Colour.Black, fontWeight: '500', marginTop: 15 }}>Delivered To</Text>
                    <Text style={{ color: Colour.Lightgrey, fontSize: fontPixel(14), fontWeight: '500', marginTop: 10 }}>Mathil Perul Mathamangalam Rd ,Town Mathil Kerala,India,670343 ,49852581500</Text>
                    <Text style={{ fontSize: fontPixel(17), color: Colour.Black, fontWeight: '500', marginTop: 20 }}>Payment method</Text>
                    <Text style={{ fontSize: fontPixel(15), color: Colour.Lightgrey, fontWeight: '500', marginTop: 10 }}>Razor pay</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: Colour.Lightgrey, height: heightPixel(130), marginHorizontal: 15, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 20, }}>
                    {/* <ProgressBar progress={0.5} color={MD3Colors.error50} /> */}
                    <View style={{ backgroundColor: Colour.Green, width: 3, height: heightPixel(85), borderRadius: 50 }}>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 15, }}>
                        <Text style={{ fontSize: fontPixel(18), fontWeight: '500', color: Colour.Black, top: -5 }}>Order Confirmed</Text>
                        <Text style={{ fontSize: fontPixel(13), color: Colour.Lightgrey }}>(March 20, 2022 at 11 AM)</Text>
                        <Text style={{ fontSize: fontPixel(15), color: Colour.Black, fontWeight: '500', marginTop: 20 }}>Delivered To</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 20, borderTopWidth: 1, marginTop: 20, marginHorizontal: 15, borderColor: Colour.Lightgrey, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{}}>
                        <Text style={{ fontSize: fontPixel(17), color: Colour.Black, }}>Item Total</Text>
                        <Text style={{ fontSize: fontPixel(17), color: Colour.Black, paddingTop: 15 }}>Delivery Charges</Text>
                        <Text style={{ fontSize: fontPixel(17), color: Colour.Black, fontWeight: '500', paddingTop: 15 }}>Paid</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: fontPixel(17), fontWeight: '500', color: Colour.Black }}>₹ 170</Text>
                        <Text style={{ fontSize: fontPixel(17), fontWeight: '500', color: Colour.Orange, paddingTop: 15 }}>Free</Text>
                        <Text style={{ fontSize: fontPixel(17), fontWeight: '500', color: Colour.Black, paddingTop: 15 }}>₹ 100</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity style={{ paddingVertical: 7, borderRadius: 20, backgroundColor: Colour.Orange, width: widthPixel(100), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: Colour.White }}>Invoice</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ elevation: 10, paddingVertical: 13, borderRadius: 10, backgroundColor: Colour.Green, alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 20 }}>
                    <Text style={{ color: Colour.White, fontWeight: '500' }}>Track Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OrderTracking')}
                    style={{ flexDirection: 'row', borderWidth: 1, borderColor: Colour.Green, elevation: 10, paddingVertical: 13, borderRadius: 10, backgroundColor: Colour.White, alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 5 }}>
                    <Ionicons name="ios-home" color={Colour.Green} size={18} />
                    <Text style={{ color: Colour.Green, fontWeight: '500', left: 5 }}>Home</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}