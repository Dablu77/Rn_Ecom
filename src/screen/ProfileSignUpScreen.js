import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, ScrollView, Modal, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import MyHeader from '../Components/Common/MyHeader'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colour from '../Components/utils/Colour';
import MyButton from '../Components/Common/MyButton';


export default function Profile({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <MyHeader
                title={"Profile"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ alignItems: 'center', paddingVertical: 20, }}>
                    <TouchableOpacity>
                        <ImageBackground source={require('../assets/profileImage.png')} style={{ height: heightPixel(150), width: widthPixel(150), alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}>
                            <Image source={require('../assets/Ellipse153.png')} style={{ height: heightPixel(150), width: widthPixel(150), resizeMode: 'contain' }} />
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ProfileSignUpScreen")}
                    >
                        <Text style={{ marginTop: 20, fontSize: fontPixel(18), fontWeight: '500' }}>Rahul Chaudary CSk</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 35, marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("OrderHistory")}
                        style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/oderIcone.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                            <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Order History</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("OrderHistory")}

                            style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/payment.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                            <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Payment</Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/requestIcone.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                            <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Request a product</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/TermsPrivacy12.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                            <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Terms & Privacy</Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
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
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/Feedback.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                            <Text style={{ paddingLeft: 20, fontSize: fontPixel(20), fontWeight: '500' }}>Feedback</Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 40 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between", backgroundColor: Colour.White, paddingVertical: 10, width: widthPixel(160), elevation: 10, borderRadius: 10, alignItems: 'center', paddingHorizontal: 5 }}>
                        <Image source={require('../assets/SignOut.png')} style={{ height: heightPixel(30), width: widthPixel(30) }} />
                        <Text style={{ fontWeight: '500', color: Colour.Orange }}>Log in/Sign Up</Text>
                    </TouchableOpacity>
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
                        <TextInput
                            placeholder="Enter Product Details & Quantity Required."
                            style={{ borderColor: Colour.Lightgrey, borderWidth: 1, height: heightPixel(50), marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 10 }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', paddingVertical: 5, top: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(0);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 0 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(60), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 0 ? Colour.White : Colour.Black, fontWeight: '500' }}>100 ml</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(1);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 1 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(60), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 1 ? Colour.White : Colour.Black, fontWeight: '500' }}>200 ml</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(2);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 2 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(60), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 2 ? Colour.White : Colour.Black, fontWeight: '500' }}>500 ml</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ paddingTop: 10 }}>

                            <MyButton title={'Request'} />
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
        justifyContent: 'center',
        // width: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
    },
    modalView: {
        paddingVertical: 25,
        backgroundColor: Colour.White,
        marginHorizontal: 15,
        borderRadius: 15
    }

})