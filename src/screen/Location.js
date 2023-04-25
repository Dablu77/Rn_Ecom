import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { TextInput } from 'react-native-paper';
import Colour from '../Components/utils/Colour';
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions';
import MyButton from '../Components/Common/MyButton';
import * as Locationone from 'expo-location';


const API_KEY = 'AIzaSyChkQstsYAs6SgA0d4UIIBnhXfK_wf0iV4';

export default function Location({ navigation }) {
    const [text, setText] = useState("");
    const [_Coordinates, set_Coordinates] = useState('')

    useEffect(() => {
        requestLocationPermission();
        getCurrentLocation();
        // getAddress()
        // runFunction()


    }, [])

    async function requestLocationPermission() {
        const { status } = await Locationone.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
    }

    async function getCurrentLocation() {
        const { coords } = await Locationone.getCurrentPositionAsync({});
        const { latitude, longitude } = coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        set_Coordinates(coords)
        console.log('====================================', coords);
    }



    // async function getAddress() {
    //     const location = await getCurrentLocation();
    //     const addressList = await Geocoding.reverseGeocodeAsync(location);
    //     const address = addressList[0].postalCode;
    //     console.log(address);
    // }

    // const [location, setLocation] = useState('')

    // console.log('====================================Dg', location);
    // const runFunction = async () => {
    //     let { status } = await Location.requestPermissionsAsync();
    //     if (status !== 'granted') {
    //         setErrorMsg('Access to Location denied');
    //     }

    //     const location = await Location.getCurrentPositionAsync({});
    //     set_Coordinates(location)

    //     const place = await Location.reverseGeocodeAsync({
    //         latitude: _Coordinates.latitude,
    //         longitude: _Coordinates.longitude
    //     });
    //     console.log("++++++++++++++DG", _Coordinates)

    //     let city;
    //     place.find(p => {
    //         city = p.city
    //         setCity(p.city)
    //     });

    //     const response = await TimeApi.get(`/${city}.json`);
    //     // setTime(response.data);
    //     console.log(response.data);

    // }



    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <View style={{ marginTop: "15%", marginHorizontal: 10, borderColor: Colour.Orange, borderRadius: 7, }}>
                    <TextInput
                        label="Choose your location"
                        activeUnderlineColor={Colour.Orange}
                        // underlineColor="transparent"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={{ borderRadius: 10, borderRadius: 10, borderRadius: 10, backgroundColor: Colour.White, elevation: 10 }}
                    />
                </View>
                <View style={{
                    marginTop: 10,
                    height: heightPixel(530),
                    backgroundColor: '#fff',
                    elevation: 10,
                    borderRadius: 5,
                    overflow: 'hidden',
                    marginHorizontal: 10,
                }}>
                    {_Coordinates && <MapView
                        // style={{
                        //     height: '100%',
                        //     width: '100%',

                        // }}
                        style={StyleSheet.absoluteFill}
                        initialRegion={{
                            latitude: _Coordinates.latitude,
                            longitude: _Coordinates.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}

                    >
                        <Marker
                            coordinate={{
                                latitude: _Coordinates.latitude,
                                longitude: _Coordinates.longitude,
                            }}
                        // title={address}
                        />
                    </MapView>}
                </View>
                <TouchableOpacity style={{ marginTop: 20, alignItems: 'flex-end', paddingHorizontal: 15 }}>
                    <Image source={require("../assets/Vectoradd.png")} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row', paddingVertical: "3%", backgroundColor: Colour.Crimson, marginHorizontal: 15, borderRadius: 7, marginTop: "8%" }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: heightPixel(40), backgroundColor: Colour.Orange, width: widthPixel(40), borderRadius: 50 }}>
                        <Image source={require('../assets/Locationsicone.png')} style={{ height: 20, width: 15 }} />
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: fontPixel(18), color: Colour.Black, fontWeight: '500' }}>Your Present Location</Text>
                        <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>G+3421 Thrissur, Kerala, India</Text>
                    </View>
                </View>
                <MyButton title={"Set Location"} onPress={() => navigation.navigate('BottomNavigator')} />
            </ScrollView>
        </SafeAreaView>
    )
}