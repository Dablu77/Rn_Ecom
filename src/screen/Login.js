import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../Components/Common/MyButton';
import { heightPixel, widthPixel } from '../Components/Dimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colour from '../Components/utils/Colour';
// import ToggleSwitch from 'toggle-switch-react-native'

// const { width, height } = Dimensions.get('window')


export default function Login({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ alignItems: 'center', marginTop: heightPixel(80) }}>
                <Text style={{ color: Colour.Black, fontSize: 20, fontWeight: 'bold', width: widthPixel(350) }}>Shop locally from trusted and reliable stores.</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 35 }}>
                <Image
                    style={{ height: heightPixel(200), width: widthPixel(200) }}
                    source={require('../assets/LogoName.png')}
                />
            </View>
            <View style={styles.textInputCntnr}>
                <TextInput
                    placeholder="Enter your phone number"
                    placeholderTextColor="gray"
                    style={styles.input}
                    keyboardType="number-pad"
                    maxLength={10}

                />
            </View>
            <View style={{ marginTop: 20 }}>
                <MyButton title={'Send OTP'} onPress={() => navigation.navigate('Otp')}
                />
            </View>

            <View>
                <Text style={{ color: '#7A7A7A', textAlign: 'center', fontWeight: '400', }}>By entering your mobile number you accept our T&C</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                <Text style={{ color: '#7A7A7A', textAlign: 'center', fontWeight: '400', }}>Privacy policy @ Plants chain private limited
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    textInputCntnr: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginTop: "22%",
        paddingVertical: 10



    },
    input: {
        fontSize: 15,
        color: '#000',
        paddingHorizontal: 10
    },
})