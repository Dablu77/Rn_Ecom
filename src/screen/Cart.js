import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, SafeAreaView, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../Components/Common/MyButton'
import Colour from '../Components/utils/Colour'
import MyHeader from '../Components/Common/MyHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions'
// import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Cart({ navigation }) {
    const [index, setIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const SrtData = [
        {
            NameItem: 'Beans',
            Price: '₹89',
            dicPrice: '₹50',
            waitkg: '500 g'
        },
        {
            NameItem: 'Beans',
            Price: '₹89',
            dicPrice: '₹50',
            waitkg: '500 g'
        },
        {
            NameItem: 'Potato',
            Price: '₹79',
            dicPrice: '₹100',
            waitkg: '700 g'
        },
        {
            NameItem: 'Beans',
            Price: '₹89',
            dicPrice: '₹50',
            waitkg: '500 g'
        },
        {
            NameItem: 'Potato',
            Price: '₹79',
            dicPrice: '₹100',
            waitkg: '700 g'
        },
        {
            NameItem: 'Beans',
            Price: '₹89',
            dicPrice: '₹50',
            waitkg: '500 g'
        },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Cart"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', }}>
                <Ionicons name="ios-home" color={Colour.Orange} size={18} />
                <Text style={{ paddingLeft: 10, fontWeight: '500', }}>Mathil Perul Mathamangalam.....</Text>
                <MaterialIcons name="keyboard-arrow-down" color={Colour.Lightgrey} size={32} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                {SrtData.map((item, index) => (
                    <View
                        key={index}
                        style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 0.5, paddingVertical: 15, paddingHorizontal: 15, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Rectangle4619.png')} style={{ height: heightPixel(80), width: widthPixel(80), }} />
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', color: Colour.Darkgrey }}>{item.NameItem}</Text>
                                <Text style={{ color: Colour.Lightgrey, top: 4 }}>{item.waitkg}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ paddingRight: 10, color: Colour.Lightgrey, textDecorationLine: 'line-through' }}>{item.dicPrice}</Text>
                            <Text style={{ fontWeight: '500', color: Colour.Black, fontSize: fontPixel(17) }}>{item.Price}</Text>
                        </View>
                        <View style={{ paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: Colour.White, paddingVertical: 5, width: widthPixel(90), borderRadius: 7, elevation: 10 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, color: Colour.Darkgrey }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: Colour.Orange }}>10</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, color: Colour.Darkgrey }}>+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                ))}

                <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                    <Text style={{ fontSize: fontPixel(17), fontWeight: '500', color: Colour.Darkgrey }}>Payment details</Text>
                    <View style={{ marginVertical: 10 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>item total</Text>
                            <Text style={{ fontWeight: '500', color: Colour.Black, fontSize: fontPixel(17) }}>₹110</Text>

                        </View>
                        {/* <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>Delivery Agent Tip</Text>
                            <Text style={{ fontWeight: '500', color: Colour.Black, fontSize: fontPixel(17) }}>₹110</Text> */}
                        <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: fontPixel(18), fontWeight: '500', color: Colour.Black }}>Orange Juice</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(0);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 0 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(40), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 0 ? Colour.White : Colour.Black, fontWeight: '500' }}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(1);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 1 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(40), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 1 ? Colour.White : Colour.Black, fontWeight: '500' }}>10</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(2);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 2 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(40), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 2 ? Colour.White : Colour.Black, fontWeight: '500' }}>25</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(3);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 3 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(40), justifyContent: 'center' }}>
                                    <Text style={{ color: index === 3 ? Colour.White : Colour.Black, fontWeight: '500' }}>50</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>Delivery Charges</Text>
                            <Text style={{ fontWeight: '500', color: Colour.Green, fontSize: fontPixel(17) }}>Free</Text>
                        </View>
                    </View>
                </View>
                <MyButton title={"Proceed to Pay"} onPress={() => navigation.navigate('Payment')} />
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={Styles.centeredView}>
                    <View style={Styles.modalView}>
                        <View style={{ paddingHorizontal: 5, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', height: heightPixel(100), borderWidth: 1, marginHorizontal: 15, borderRadius: 10, borderColor: Colour.Orange, backgroundColor: Colour.Crimson, elevation: 10, }}>
                            <Image source={require('../assets/homeLoctions.png')} style={{ height: 50, width: 50 }} />
                            <Text style={{ color: Colour.Lightgrey, fontSize: 15, left: 5 }}>Mathil Perul Mathamangalam {"\n"}Rd
                                {"\n"} ,Town	Mathil
                                Kerala
                                ,49852581500</Text>
                        </View>
                        <View style={{ paddingHorizontal: 5, marginTop: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', height: heightPixel(100), borderWidth: 1, marginHorizontal: 15, borderRadius: 10, borderColor: Colour.Orange, backgroundColor: Colour.Crimson, elevation: 10, }}>
                            <Image source={require('../assets/nounofficelocation.png')} style={{ height: 40, width: 40 }} />
                            <Text style={{ color: Colour.Lightgrey, fontSize: 15, left: 5 }}>Mathil Perul Mathamangalam {"\n"}Rd
                                {"\n"} ,Town	Mathil
                                Kerala
                                ,49852581500</Text>
                        </View>
                        <View style={{ top: 25 }}>
                            <MyButton
                                title={'Add New'}
                                onPress={() => setModalVisible(!modalVisible)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        paddingVertical: "30%"
    },
    modalView: {
        paddingVertical: 35,
        backgroundColor: Colour.White,
        marginHorizontal: 20,
        borderRadius: 15
    }

})