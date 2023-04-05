import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MyHeader from '../Components/Common/MyHeader'
import Colour from '../Components/utils/Colour'
import { heightPixel, widthPixel } from '../Components/Dimensions'
import Rectangle1 from '../assets/Rectangle1.png'
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

// import { ImageSlider } from "react-native-image-slider-banner";
const { height, width } = Dimensions.get('window');



// export default function Catgoriys({ navigation }) {
const Catgoriys = props => {
    const preData = props.route.params;

    console.log('====================================', preData);

    const [visible, setVisible] = useState(false);
    const CatDATA = [
        {
            id: 1,
            image: Rectangle1,
            title: 'Shakes',
        },
        {
            id: 2,
            image: Rectangle1,
            title: 'Mojitos',
        },
        {
            id: 3,
            image: Rectangle1,
            title: 'Energy Drinks',
        },
        {
            id: 4,
            image: Rectangle1,
            title: 'Shakes',
        },
        {
            id: 5,
            image: Rectangle1,
            title: 'Mojitos',
        },
        {
            id: 6,
            image: Rectangle1,
            title: 'Energy Drinks',
        },
        {
            id: 7,
            image: Rectangle1,
            title: 'Shakes',
        },
        {
            id: 8,
            image: Rectangle1,
            title: 'Mojitos',
        },
        {
            id: 9,
            image: Rectangle1,
            title: 'Energy Drinks',
        },
    ];
    const onPressFun = (item) => {
        if (item) {
            setVisible(item.id)
        }
    }

    const SrtItem = [
        {
            image: '1727',
            itempr: '3%',
            itemname: 'Orange',

        },
        {
            image: '1727',
            itempr: '9%',
            itemname: 'Orange',

        },
        {
            image: '1727',
            itempr: '5%',
            itemname: 'Orange',

        },
        {
            image: '1727',
            itempr: '10%',
            itemname: 'Orange',

        }
    ]



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyHeader
                title={preData}
                titletwo={'Help'}
                onPress={() => props.navigation.goBack()}
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: Colour.White, width: widthPixel(125), }}>
                    <FlatList
                        data={CatDATA}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            // <View style={{ borderRightWidth: visible !== item.id ? 0 : 5, marginVertical: 5, borderRightColor: 'green', }}>
                            <TouchableOpacity
                                onPress={() => { onPressFun(item) }}
                                style={{ alignItems: 'center', marginTop: 25, backgroundColor: visible !== item.id ? Colour.White : Colour.Green, marginHorizontal: 15, paddingVertical: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/Rectangle1.png')} style={{ height: heightPixel(40), width: widthPixel(40) }} />
                                <Text style={{ color: visible !== item.id ? Colour.Black : Colour.White, paddingTop: 5, fontWeight: '500', fontSize: 13 }}>{item?.title}</Text>
                            </TouchableOpacity>
                            // </View>
                        }
                    />
                </View>

                <View style={{ backgroundColor: Colour.White, flex: 1, width: widthPixel(140) }}>
                    <ScrollView>
                        <Swiper
                            showsButtons={false}
                            autoplay={true}
                            autoplayTimeout={3}
                            showsPagination={true}
                            dotStyle={{ width: widthPixel(10), height: widthPixel(5), }}
                            activeDotStyle={{ width: widthPixel(30), height: widthPixel(5), }}
                            activeDotColor={Colour.Orange}
                            // dotColor="#F58850"
                            paginationStyle={{ flex: 1, top: "-60%" }}
                            style={{}}
                        >
                            <Image
                                source={require('../assets/Frame.png')}
                                style={{ height: heightPixel(150), borderRadius: 10 }}
                            />
                            <Image
                                source={require('../assets/Frame.png')}
                                style={{ height: heightPixel(150), borderRadius: 10 }}
                            />
                            <Image
                                source={require('../assets/Frame.png')}
                                style={{ height: heightPixel(150), borderRadius: 10 }}
                            />
                        </Swiper>
                        <View style={{ marginTop: '-243%' }}>

                            <ScrollView
                                horizontal={true}
                                contentContainerStyle={{}}
                            >
                                {SrtItem.map((value, index) => (
                                    <View
                                        key={index}
                                        style={{ elevation: 10, marginVertical: 10, height: heightPixel(190), width: widthPixel(130), marginHorizontal: 5, borderRadius: 10, backgroundColor: Colour.White }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ top: -8, right: 5, backgroundColor: Colour.Green, width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: '500', color: Colour.White }}>{value.itempr}</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <FontAwesome5 name="heart-o" color={Colour.Orange} size={23} />
                                            </TouchableOpacity>


                                        </View>


                                        <Image
                                            source={require('../assets/Rectangle.png')}
                                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                                        />
                                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>

                                        <TouchableOpacity style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                            <ScrollView
                                horizontal={true}
                                // style={{ top: '-240%' }}
                                contentContainerStyle={{}}
                            >
                                {SrtItem.map((value, index) => (
                                    <View style={{ elevation: 10, marginVertical: 10, height: heightPixel(190), width: widthPixel(130), marginHorizontal: 5, borderRadius: 10, backgroundColor: Colour.White }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ top: -8, right: 5, backgroundColor: Colour.Green, width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: '500', color: Colour.White }}>{value.itempr}</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <FontAwesome5 name="heart-o" color={Colour.Orange} size={23} />
                                            </TouchableOpacity>
                                        </View>


                                        <Image
                                            source={require('../assets/Rectangle.png')}
                                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                                        />
                                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>

                                        <TouchableOpacity style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                            <ScrollView
                                horizontal={true}
                                contentContainerStyle={{}}
                            >
                                {SrtItem.map((value, index) => (
                                    <View style={{ elevation: 10, marginVertical: 10, height: heightPixel(190), width: widthPixel(130), marginHorizontal: 5, borderRadius: 10, backgroundColor: Colour.White }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ top: -8, right: 5, backgroundColor: Colour.Green, width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: '500', color: Colour.White }}>{value.itempr}</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <FontAwesome5 name="heart-o" color={Colour.Orange} size={23} />
                                            </TouchableOpacity>


                                        </View>


                                        <Image
                                            source={require('../assets/Rectangle.png')}
                                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                                        />
                                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>

                                        <TouchableOpacity style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </ScrollView>


                </View>
            </View>

        </SafeAreaView>
    )
}


export default Catgoriys;
const style = StyleSheet.create({

})