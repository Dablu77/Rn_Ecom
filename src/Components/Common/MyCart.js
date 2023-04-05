import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPixel } from '../Dimensions'
import Colour from '../utils/Colour'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'




const MyCart = props => {
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: 10, height: heightPixel(55), backgroundColor: Colour.Green, marginHorizontal: 5, borderRadius: 7, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colour.White, fontWeight: '500' }}>{props.totalItem}</Text>
                    <Text style={{ color: Colour.White, fontWeight: '500', paddingLeft: 5 }}>Product</Text>
                    <TouchableOpacity style={{ paddingLeft: 5 }}>
                        <MaterialCommunityIcons name="delete" color={Colour.White} size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: Colour.White, fontWeight: '500', paddingLeft: 5 }}>{props.price}</Text>
                <TouchableOpacity
                    onPress={props.onPress}
                    style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Feather name="shopping-cart" color={Colour.White} size={20} />
                    <Text style={{ color: Colour.White, fontWeight: '500', paddingLeft: 10 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MyCart