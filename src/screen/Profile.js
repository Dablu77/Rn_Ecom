import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MyHeader from '../Components/Common/MyHeader'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colour from '../Components/utils/Colour';


export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Profile"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ alignItems: 'center', paddingVertical: 20, }}>
                <TouchableOpacity>
                    <ImageBackground source={require('../assets/profileImage.png')} style={{ height: heightPixel(150), width: widthPixel(150) }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileSignUpScreen")}
                >
                    <Text style={{ marginTop: 20, fontSize: fontPixel(18), }}>Please <Text style={{ textDecorationLine: 'underline', }}>login/Signup</Text> to enjoy your shopping</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 45, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/support.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                        <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Support</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Share.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                        <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Share</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/TermsPrivacy.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                        <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Terms & Privacy</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/rate.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                        <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Rate us on Playstore</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 40, justifyContent: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between", backgroundColor: Colour.White, paddingVertical: 10, width: widthPixel(160), elevation: 10, borderRadius: 10, alignItems: 'center', paddingHorizontal: 5 }}>
                    <Image source={require('../assets/SignOut.png')} style={{ height: heightPixel(30), width: widthPixel(30) }} />
                    <Text style={{ fontWeight: '500', color: Colour.Orange }}>Log in/Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}