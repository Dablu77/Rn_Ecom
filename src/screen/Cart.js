import { View, Text } from 'react-native'
import React from 'react'
import MyButton from '../Components/Common/MyButton'
import Colour from '../Components/utils/Colour'
import MyHeader from '../Components/Common/MyHeader'

export default function Cart({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={"Cart"}
                titletwo={'Help'}
                onPress={() => navigation.goBack()}
            />
            {/* <MyButton title={"Proceed to Pay"} /> */}
        </View>
    )
}