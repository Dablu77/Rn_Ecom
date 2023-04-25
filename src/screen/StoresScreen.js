import { View, Text, SafeAreaView, Image, TextInput, Dimensions, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { createRef, useState } from 'react'
import Colour from '../Components/utils/Colour'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ServicesStores from '../Components/Common/ServicesStores';
import Rectangle123 from '../assets/Rectangle123.png'
import MyButton from '../Components/Common/MyButton';

export default function HomeScreen({ navigation }) {

    const [hasInternet, setHasInternet] = useState(false);
    const [showSearch, setSHowSearch] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);





    const Srt = [
        {
            name: 'Anand Stores',
            SubName: "Hardware",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',
            SubName: "Grocery",
            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
        {
            name: 'Anand Stores',

            imageUrl: Rectangle123
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: '10%', height: heightPixel(70), alignItems: 'center', paddingHorizontal: 2 }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Image
                        source={require('../assets/home.png')}
                        style={{
                            height: 18,
                            width: 18,
                        }}
                    />
                    <Text style={{ color: "black" }}>Kerala...</Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />

                </TouchableOpacity>
                <View style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Image
                        source={require('../assets/Stores.png')}
                        style={{
                            height: 18,
                            width: 18,
                        }}
                    />
                    <Text style={{ color: 'black' }}>Stores</Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />

                </View>

                <TouchableOpacity
                    onPress={() => setSHowSearch(true)}

                    style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <EvilIcons name="search" color={"#313232"} size={28} />
                    <Text style={{ paddingVertical: 5, height: 30, width: 60, paddingHorizontal: 10 }}>
                        Search
                    </Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}>

                    {Srt.map((value, index) => (
                        <View style={{ alignItems: 'center', }}>
                            <ServicesStores
                                title={value.name}
                                Subtitle={value.SubName}
                                image={require('../assets/Rectangle123.png')}
                                onPress={() => navigation.navigate('HomeScreen')}
                            />
                        </View>
                    ))}
                </View>
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