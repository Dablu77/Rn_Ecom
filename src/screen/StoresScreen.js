import { View, Text, SafeAreaView, Image, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { createRef, useState } from 'react'
import Colour from '../Components/utils/Colour'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ServicesStores from '../Components/Common/ServicesStores';
import Rectangle123 from '../assets/Rectangle123.png'
import MyModal from '../Components/Common/MyModal';

export default function HomeScreen({ navigation }) {

    const [hasInternet, setHasInternet] = useState(false);
    const [state, setState] = useState({
        isLogoutClicked: false,
        loggedOut: false,
        profileImg: null,
        isPicker: false,
        isUpdateProfile: false
    });


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
                <View style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Image
                        source={require('../assets/home.png')}
                        style={{
                            height: 18,
                            width: 18,
                        }}
                    />
                    <Text style={{ color: "black" }}>Kerala...</Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />

                </View>
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
                            // onPress={() => setHasInternet(!hasInternet)}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* <MyModal type={'internet'} isModal={hasInternet} /> */}
            <MyModal
                type={'updateProfile'}
                isModal={hasInternet}
                // backPress={() => toggleModal('updateProfile')}
                STYLES={{
                    // alignSelf: 'center',
                    backgroundColor: Colors.White,
                    // paddingHorizontal: 40,
                    // paddingBottom: 20,
                    // paddingTop: 10,
                    // borderRadius: 6,
                    // alignItems: 'center'
                }}
                _NO={() => {
                    // toggleModal('updateProfile');
                    // getUser();
                    setState({
                        ...state,
                        profileImg: null
                    })
                }}
            // _YES={updateProfile}
            />

        </SafeAreaView>
    )
}