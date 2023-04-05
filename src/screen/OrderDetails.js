import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import MyHeader from '../Components/Common/MyHeader'
import Colour from '../Components/utils/Colour'

export default function OrderDetails({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Order Details"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    )
}