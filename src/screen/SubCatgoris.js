import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import MyHeader from '../Components/Common/MyHeader'
import { heightPixel, widthPixel } from '../Components/Dimensions';
import Colour from '../Components/utils/Colour';

const { height, width } = Dimensions.get('window');


export default function SubCatgoris({ navigation }) {
    const Srt = [
        {
            image: '66363',
            itemname: 'Pineapple'
        },
        {
            image: '66363',
            itemname: 'Mango'
        },
        {
            image: '66363',
            itemname: 'Banana'
        },
        {
            image: '66363',
            itemname: 'Orange'
        },
        {
            image: '66363',
            itemname: 'Apple'
        }
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <MyHeader
                title={'Categories'}
                titletwo={'Help'}
            />
            <ScrollView>

                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    {Srt.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Catgoriys', value.itemname)}
                            style={{ marginHorizontal: 5, height: heightPixel(120), alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: heightPixel(90), width: widthPixel(90) }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    {Srt.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Catgoriys', value.itemname)}
                            style={{ marginHorizontal: 5, height: heightPixel(120), alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: heightPixel(90), width: widthPixel(90) }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    {Srt.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Catgoriys', value.itemname)}
                            style={{ marginHorizontal: 5, height: heightPixel(120), alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: heightPixel(90), width: widthPixel(90) }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    {Srt.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Catgoriys', value.itemname)}
                            style={{ marginHorizontal: 5, height: heightPixel(120), alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: heightPixel(90), width: widthPixel(90) }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    {Srt.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Catgoriys', value.itemname)}
                            style={{ marginHorizontal: 5, height: heightPixel(120), alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: heightPixel(90), width: widthPixel(90) }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    {Srt.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Catgoriys', value.itemname)}
                            style={{ marginHorizontal: 5, height: heightPixel(120), alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: heightPixel(90), width: widthPixel(90) }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}