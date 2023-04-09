import { View, Text, SafeAreaView, TouchableOpacity, Alert, FlatList } from 'react-native'
import React from 'react'
import MyHeader from '../Components/Common/MyHeader'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions'
import Colour from '../Components/utils/Colour'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating, } from 'react-native-ratings';


export default function OrderHistory({ navigation }) {
    const SrtData = [
        {
            reTrack: false,
            order: '#2343',
            price: '₹ 30.00',
            soldBy: 'Anand Stores',
            itemnum: '2'

        },
        {
            reTrack: true,
            order: '#2343',
            price: '₹ 30.00',
            soldBy: 'Anand Stores',
            itemnum: '2'

        },
        {
            reTrack: false,
            order: '#2343',
            price: '₹ 30.00',
            soldBy: 'Anand Stores',
            itemnum: '2'

        },
        {
            reTrack: true,
            order: '#2343',
            price: '₹ 30.00',
            soldBy: 'Anand Stores',
            itemnum: '2'

        },
        {
            reTrack: false,
            order: '#2343',
            price: '₹ 30.00',
            soldBy: 'Anand Stores',
            itemnum: '2'

        },

    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Order History"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={SrtData}
                renderItem={({ item }) =>
                    <View style={{ borderRadius: 10, height: heightPixel(200), backgroundColor: "#F1F1F1", marginHorizontal: 15, marginVertical: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center', paddingTop: 10, }}>
                            <Text style={{ fontSize: fontPixel(20), fontWeight: '900', color: Colour.Black }}>Order Id #321</Text>
                            <Text style={{ color: Colour.Lightgrey, fontSize: fontPixel(14) }}>(Today at 5.00 PM)</Text>
                            <TouchableOpacity style={{ elevation: 10, borderRadius: 5, height: heightPixel(30), backgroundColor: Colour.Crimson, width: widthPixel(70), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: Colour.Orange, fontWeight: '900' }}>₹ 30.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center', paddingTop: 10, }}>
                            <Text style={{ fontSize: fontPixel(15), fontWeight: '500', color: Colour.Darkgrey }}>Sold By : Anand Stores</Text>
                            <Text style={{ color: Colour.Black, fontSize: fontPixel(16), fontWeight: '900' }}>2 Items</Text>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Black} size={30} />
                        </View>
                        {item.reTrack ? (
                            null
                        ) : <Text style={{ marginTop: 10, color: Colour.Green, fontSize: fontPixel(16), fontWeight: '500', paddingHorizontal: 15 }}>Delivered</Text>
                        }
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 20, alignItems: 'center' }}>
                            <Rating
                                // starContainerStyle={{ backgroundColor: 'red' }}
                                // size={10}
                                // ratingTextColor={'#FFCB45'}
                                // ratingColor='#3498db'
                                // ratingBackgroundColor={"#F1F1F1"}
                                ratingBackgroundColor='red'
                                imageSize={30}
                                tintColor='#F1F1F1'
                                // reviewSize={10}
                                ratingContainerStyle={{ height: 20, backgroundColor: 'red' }}
                                onFinishRating={rating => {
                                    Alert.alert('Star Rating: ' + JSON.stringify(rating));
                                }}
                                style={{ backgroundColor: 'red' }}
                            />
                            {item.reTrack ? (
                                <TouchableOpacity
                                    style={{ elevation: 10, paddingVertical: 10, alignItems: 'center', backgroundColor: Colour.Green, width: widthPixel(125), borderRadius: 20, marginVertical: 20 }}
                                >
                                    <Text style={{ color: Colour.White, fontWeight: '500', }}>Track Order</Text>
                                </TouchableOpacity>
                            ) : <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, elevation: 10, paddingVertical: 7, alignItems: 'center', backgroundColor: Colour.Orange, width: widthPixel(125), borderRadius: 20 }}
                            >
                                <MaterialIcons name="refresh" color={Colour.White} size={25} />
                                <TouchableOpacity>
                                    <Text style={{ color: Colour.White, fontWeight: '500', }}>Re-Order</Text>
                                </TouchableOpacity>
                            </View>}
                        </View>
                    </View>

                }
            />

        </SafeAreaView>
    )
}