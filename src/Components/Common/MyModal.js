import React from 'react';
import { View, Text, Pressable, TextInput, } from 'react-native';
import Modal from "react-native-modal";

import Colour from '../utils/Colour';
import MyButton from './MyButton';

export default function MyModal(
    {
        STYLES,
        isModal,
        backPress,
        type,
        gallery,
        camera,
        verify,
        PARENT_OTP,
        SET_PARENT_OTP,
        loading,
        _YES,
        _NO,
        _sendParentOTP,
        _countDown,
        _isVerifyLoading,
        _deleteProfilePic,
        navigation
    }
) {

    const UI = (data) => {
        switch (data) {
            case 'internet':
                return (
                    <View style={{
                        alignSelf: 'center',
                        backgroundColor: Colour.White,
                        paddingHorizontal: 40,
                        paddingBottom: 20,
                        paddingTop: 10,
                        borderRadius: 6,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: Colour.Orange,
                            fontSize: 15,
                            textAlign: 'center'
                        }}>Unable to detect internet connection!</Text>
                        <Text style={{
                            color: Colour.Black,
                            textAlign: 'center',
                            marginTop: 5
                        }}>Please enable internet connection {'\n'} and try again</Text>
                        <Pressable
                            style={{
                                backgroundColor: Colour.Orange,
                                paddingVertical: 5,
                                paddingHorizontal: 25,
                                borderRadius: 2,
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ color: Colour.White, fontWeight: '500', fontSize: 15 }}>OK</Text>
                        </Pressable>
                    </View>
                )
            case 'updateProfile':
                return (
                    <View style={STYLES || {}}>
                        <Text style={{ color: Colour.Black, fontSize: 20, fontWeight: '700' }}>Update Profile Details</Text>
                        <Text style={{ color: Colour.Orange, fontSize: 18, fontWeight: '600', marginTop: 20 }}>Are you sure?</Text>
                        <View
                            style={{
                                // flexDirection: 'row',
                                // alignItems: 'center',
                                // justifyContent: 'space-between',
                                marginTop: 40,
                                backgroundColor: '#fff',
                                paddingVertical: 20,

                            }}
                        >
                            <MyButton title={"Verify & Proceed"} onPress={() => navigation.navigate('Location')} />

                        </View>
                    </View>
                )
            default: return <></>
        }
    }
    return (
        <View>
            <Modal
                isVisible={isModal}
                onBackButtonPress={backPress ? backPress : () => { }}
                onBackdropPress={backPress ? backPress : () => { }}
                swipeDirection={type == 'camera-image' ? ['up', 'left', 'right', 'down'] : null}
            >
                {
                    UI(type)
                }
            </Modal>
        </View>
    );
}