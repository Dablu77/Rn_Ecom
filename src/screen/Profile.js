import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import MyHeader from '../Components/Common/MyHeader'

export default function Profile({ props }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyHeader
                title={"Profile"}
                titletwo={'Help'}
                onPress={() => props.navigation.goBack()}
            />
            <View>

            </View>
        </SafeAreaView>
    )
}