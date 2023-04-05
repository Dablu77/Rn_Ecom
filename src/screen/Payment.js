import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../Components/Common/MyButton'
import Colour from '../Components/utils/Colour'
import MyHeader from '../Components/Common/MyHeader'
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions'
import { RadioButton, } from 'react-native-paper';


export default function Payment({ navigation }) {

    const [gender, setGender] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Payment"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ marginHorizontal: 20, marginTop: '10%', backgroundColor: '#F9FAFD', }}>
                <Text style={{ fontSize: fontPixel(18), fontWeight: '500', color: Colour.Black }}>Recommended Methods</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20, paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Bitmap.png')} style={{ height: heightPixel(35), width: widthPixel(35) }} />
                        <Text style={{ fontSize: fontPixel(16), fontWeight: '500', color: Colour.Black, paddingLeft: 10 }}>Google Pay</Text>
                    </View>
                    <RadioButton
                        value="Googlepay"
                        status={gender === 'Googlepay' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Googlepay')}
                    />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/phonepay.png')} style={{ height: heightPixel(35), width: widthPixel(35) }} />
                        <Text style={{ fontSize: fontPixel(16), fontWeight: '500', color: Colour.Black, paddingLeft: 10 }}>Phone Pay</Text>
                    </View>
                    <RadioButton
                        value="Phonepay"
                        status={gender === 'Phonepay' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Phonepay')}
                    />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Upi.png')} style={{ height: heightPixel(35), width: widthPixel(35) }} />
                        <Text style={{ fontSize: fontPixel(16), fontWeight: '500', color: Colour.Black, paddingLeft: 10 }}>UPI</Text>
                    </View>
                    <RadioButton
                        value="Upi"
                        status={gender === 'Upi' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Upi')}
                    />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/paytm.png')} style={{ height: heightPixel(35), width: widthPixel(35) }} />
                        <Text style={{ fontSize: fontPixel(16), fontWeight: '500', color: Colour.Black, paddingLeft: 10 }}>Paytm</Text>
                    </View>
                    <RadioButton
                        value="Paytm"
                        status={gender === 'Paytm' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Paytm')}
                    />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Cash.png')} style={{ height: heightPixel(25), width: widthPixel(40) }} />
                        <Text style={{ fontSize: fontPixel(16), fontWeight: '500', color: Colour.Black, paddingLeft: 10 }}>Cash on Delivery</Text>
                    </View>
                    <RadioButton
                        value="Cash"
                        status={gender === 'Cash' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Cash')}
                    />

                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                <MyButton title={"Proceed to Pay"} onPress={() => navigation.navigate('OrderDetails')} />
            </View>
        </SafeAreaView>
    )
}