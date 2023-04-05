import {
    View,
    Text,
    SafeAreaView,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions';
import MyButton from '../Components/Common/MyButton';
import Colour from '../Components/utils/Colour';

const { width, height } = Dimensions.get('window');

export default function Otp({ navigation }) {
    const [pin, setPin] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <View style={{ alignItems: 'center', top: 20, paddingVertical: 70 }}>
                <Image
                    style={{ height: heightPixel(150), width: widthPixel(200), borderRadius: 10 }}
                    source={require('../assets/logoorga2.png')}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: "-10%" }}>
                <Text
                    style={{
                        color: Colour.Black,
                        fontSize: fontPixel(18),
                        fontWeight: '500',
                    }}>
                    Auto verifying OTP
                </Text>
                <Text
                    style={{
                        color: Colour.Black,
                        fontSize: 15,
                        marginTop: 10,
                        fontWeight: '500',
                    }}>
                    Code sent to +99******56
                </Text>
            </View>
            <View style={{ marginVertical: '-10%' }}>
                <OTPInputView
                    style={{ marginHorizontal: 25, height: height / 4 }}
                    pinCount={4}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={code => {
                        setPin(code);
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', top: 15 }}>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={{ color: Colour.Orange, fontWeight: '500' }}>Resend</Text>
                </TouchableOpacity>
                <Text style={{ color: Colour.Lightgrey, fontWeight: '500' }}>

                    code in 55 s
                </Text>
            </View>
            <View style={{ marginVertical: 50 }}>
                <MyButton title={"Verify & Proceed"} onPress={() => navigation.navigate('Location')} />

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    borderStyleHighLighted: {
        borderColor: Colour.Orange,
    },

    underlineStyleBase: {
        height: 55,
        width: 70,
        borderRadius: 4,
        color: Colour.Balck,
        fontSize: 17,
        backgroundColor: '#F7F6F4',
    },

    underlineStyleHighLighted: {
        borderColor: Colour.Orange,
    },
});
