import { View, Text, SafeAreaView, Image, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { createRef, useState } from 'react'
import Colour from '../Components/utils/Colour'
import Swiper from 'react-native-swiper';
import { fontPixel, heightPixel, widthPixel } from '../Components/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import MyCart from '../Components/Common/MyCart';
import ActionSheet from 'react-native-actions-sheet';

const { height, width } = Dimensions.get('window');
export default function HomeScreen({ navigation }) {
    const [myCart, setMyCart] = useState(false)
    const [myCartOne, setMyCartOne] = useState(false)
    const [showSearch, setSHowSearch] = useState(false)
    const [index, setIndex] = useState(0);
    const [isIndex, setIsIndex] = useState(0)
    const actionSheetRef = createRef(false);
    const toggleBottomNavigationView = () => {
        actionSheetRef?.current?.setModalVisible(true);
    };
    const Srt = [
        {
            image: '66363',
            itemname: 'Pineapple',
            itempr: '5%',
            itemkg: '70/kg'
        },
        {
            image: '66363',
            itempr: '5%',
            itemname: 'Mango'
        },
        {
            image: '66363',
            itempr: '5%',
            itemname: 'Banana'
        },
        {
            image: '66363',
            itempr: '5%',
            itemname: 'Orange'
        },
        {
            image: '66363',
            itempr: '5%',
            itemname: 'Apple'
        }
    ]

    const SrtData = [
        {
            itemname: 'Vegetables',
            image: '123'
        },
        {
            itemname: 'Apple',
            image: '123'
        },
        {
            itemname: 'Vegetables',
            image: '123'
        },

        {
            itemname: 'Vegetables',
            image: '123'
        },
        {
            itemname: 'Vegetables',
            image: '123'
        },
        {
            itemname: 'Vegetables',
            image: '123'
        },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colour.White }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: '10%', height: heightPixel(70), alignItems: 'center', paddingHorizontal: 2 }}>
                <View style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Image
                        source={require('../assets/home.png')}
                        style={{
                            height: 18,
                            width: 18,
                        }}
                    />
                    <Text style={{ color: "black" }}>Kerala...</Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />

                </View>
                <View style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Image
                        source={require('../assets/Stores.png')}
                        style={{
                            height: 18,
                            width: 18,
                        }}
                    />
                    <Text style={{ color: 'black' }}>Stores</Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />

                </View>

                <TouchableOpacity
                    onPress={() => setSHowSearch(true)}

                    style={{ elevation: 10, height: heightPixel(45), width: widthPixel(135), paddingHorizontal: 5, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <EvilIcons name="search" color={"#313232"} size={28} />
                    <Text style={{ paddingVertical: 5, height: 30, width: 60, paddingHorizontal: 10 }}>
                        Search
                    </Text>
                    <MaterialIcons name="keyboard-arrow-down" color={"#313232"} size={28} />
                </TouchableOpacity>
            </View>

            <View>
                {showSearch === true ? (
                    <View style={{ elevation: 10, marginHorizontal: 10, elevation: 10, height: heightPixel(45), paddingHorizontal: 10, borderRadius: 7, alignItems: 'center', backgroundColor: '#ffff', flexDirection: 'row', }}>
                        <EvilIcons name="search" color={"#313232"} size={28} />
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor='grey'
                            style={{ width: widthPixel(300), paddingHorizontal: 5, }}
                        />
                    </View>
                ) : null}
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 10, marginVertical: 5 }}>
                <Swiper
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={3}
                    showsPagination={true}
                    dotStyle={{ width: widthPixel(10), height: widthPixel(5), }}
                    activeDotStyle={{ width: widthPixel(30), height: widthPixel(5), }}
                    activeDotColor={Colour.Orange}
                    // dotColor="#F58850"
                    paginationStyle={{ flex: 1, top: '-55%', }}
                    style={{}}
                >
                    <Image
                        source={require('../assets/Frame.png')}
                        style={{ height: heightPixel(170), width: widthPixel(400), borderRadius: 10, resizeMode: 'cover', alignSelf: 'center' }}
                    />
                    <Image
                        source={require('../assets/Frame.png')}
                        style={{ height: heightPixel(170), width: widthPixel(400), borderRadius: 10, resizeMode: 'cover', alignSelf: 'center' }}
                    />
                    <Image
                        source={require('../assets/Frame.png')}
                        style={{ height: heightPixel(170), width: widthPixel(400), borderRadius: 10, resizeMode: 'cover', alignSelf: 'center' }}
                    />
                </Swiper>
                <View style={{ flex: 1, marginTop: '-165%' }}>
                    <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Top Selling</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Orange} size={30} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{}}>
                        {Srt.map((value, index) => (
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
                                <TouchableOpacity
                                    onPress={() => setMyCart(true)}
                                    style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                    <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Categories</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Orange} size={30} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={{}}>
                        {SrtData.map((value, index) => (
                            <TouchableOpacity style={{ backgroundColor: '#fff', marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../assets/Rectangle4856.png')}
                                    style={{ height: 80, width: 80, resizeMode: 'cover' }}
                                />
                                <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <ScrollView horizontal={true} contentContainerStyle={{}}>
                        {SrtData.map((value, index) => (
                            <TouchableOpacity style={{ backgroundColor: '#fff', marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../assets/Rectangle4856.png')}
                                    style={{ height: 80, width: 80, resizeMode: 'cover' }}
                                />
                                <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <ScrollView horizontal={true} contentContainerStyle={{}}>
                        {SrtData.map((value, index) => (
                            <TouchableOpacity style={{ backgroundColor: '#fff', marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../assets/Rectangle4856.png')}
                                    style={{ height: 80, width: 80, resizeMode: 'cover' }}
                                />
                                <Text style={{ color: 'black', fontWeight: '500' }}>{value.itemname}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Most Recent</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Orange} size={30} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{}}>
                        {Srt.map((value, index) => (
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
                                <TouchableOpacity
                                    onPress={() => setMyCart(true)}

                                    style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                    <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Fresh Arrivals</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" color={Colour.Orange} size={30} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{}}>
                        {Srt.map((value, index) => (
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
                                <TouchableOpacity
                                    onPress={() => setMyCart(true)}
                                    style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                    <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                    {myCart === true ? <MyCart
                        totalItem={'1'}
                        price={'₹70'}
                        onPress={toggleBottomNavigationView}
                    /> : null}
                </View>
            </ScrollView>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    height: heightPixel(700), borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    backgroundColor: Colour.White

                }}
                // indicatorColor={"red"}
                headerAlwaysVisible
                closeOnPressBack
                gestureEnabled
                indicatorStyle={{ height: 5, backgroundColor: Colour.Orange, }}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, }}>
                        <FontAwesome5 name="heart-o" color={Colour.Orange} size={23} />
                    </View>
                    <Swiper
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={3}
                        showsPagination={true}
                        dotStyle={{ width: widthPixel(10), height: widthPixel(5), }}
                        activeDotStyle={{ width: widthPixel(30), height: widthPixel(5), }}
                        activeDotColor={Colour.Orange}
                        // dotColor="#F58850"
                        paginationStyle={{ flex: 1, top: '-30%' }}
                        style={{}}
                    >
                        <Image
                            source={require('../assets/FruitJuice2.png')}
                            style={{ height: heightPixel(120), width: widthPixel(160), borderRadius: 10, resizeMode: 'cover', alignSelf: 'center' }}
                        />
                        <Image
                            source={require('../assets/FruitJuice2.png')}
                            style={{ height: heightPixel(120), width: widthPixel(160), borderRadius: 10, resizeMode: 'cover', alignSelf: 'center' }}
                        />
                        <Image
                            source={require('../assets/FruitJuice2.png')}
                            style={{ height: heightPixel(120), width: widthPixel(160), borderRadius: 10, resizeMode: 'cover', alignSelf: 'center' }}
                        />
                    </Swiper>
                    <View style={{ flex: 1, marginTop: '-67%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: fontPixel(18), fontWeight: '500', color: Colour.Black }}>Orange Juice</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(0);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 0 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(60), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 0 ? Colour.White : Colour.Black, fontWeight: '500' }}>100 ml</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(1);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 1 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(60), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 1 ? Colour.White : Colour.Black, fontWeight: '500' }}>200 ml</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(2);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: index === 2 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(60), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: index === 2 ? Colour.White : Colour.Black, fontWeight: '500' }}>500 ml</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginVertical: 20, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
                            <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Product info</Text>
                            <TouchableOpacity
                            // onPress={() => navigation.navigate('Productinfo')}
                            // onPress={() => navigation.navigate('Productinfo')}
                            // onPress={() => navigation.navigate('OrderTracking')}

                            >
                                <MaterialIcons name="keyboard-arrow-right" color={Colour.Lightgrey} size={33} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: fontPixel(23), fontWeight: '500', color: Colour.Lightgrey }}>₹80</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsIndex(0);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: isIndex === 0 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(50), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: isIndex === 0 ? Colour.White : Colour.Black, fontWeight: '500', fontSize: fontPixel(25), }}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIndex(1);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: Colour.White, paddingVertical: 6, width: widthPixel(80), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: Colour.Black, fontWeight: '500' }}>Flavours</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsIndex(1);
                                    }}
                                    style={{ elevation: 10, borderRadius: 7, alignItems: 'center', backgroundColor: isIndex === 1 ? Colour.Orange : Colour.White, paddingVertical: 6, width: widthPixel(50), marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: isIndex === 1 ? Colour.White : Colour.Black, fontWeight: '500', fontSize: fontPixel(25) }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ color: Colour.Black, marginTop: 15, paddingHorizontal: 10, fontSize: fontPixel(17), fontWeight: '500' }}>
                            Similar Products
                        </Text>
                        <ScrollView horizontal={true} style={{}}>
                            {Srt.map((value, index) => (
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
                                    <TouchableOpacity
                                        onPress={() => setMyCartOne(true)}
                                        style={{ flex: 1, backgroundColor: Colour.Orange, alignItems: 'center', justifyContent: "center", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                                        <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                        {myCartOne === true ? <MyCart
                            totalItem={'1'}
                            price={'₹70'}
                            onPress={toggleBottomNavigationView}
                        /> : null}
                    </View>

                </View>
            </ActionSheet>
        </SafeAreaView>
    )
}