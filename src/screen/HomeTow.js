import { View, Text, SafeAreaView, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
// import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');

export default function HomeTow() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={{}}>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#ffff', justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingVertical: 10,
                        width: '33%',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginVertical: '10%',
                    }}>
                        <Image
                            source={require('../assets/home.png')}
                            style={{
                                height: 18,
                                width: 18,
                            }}
                        />
                        <Text style={{ color: "black" }}>Kerala...</Text>
                        <Image
                            source={require('../assets/Vector.png')}
                            style={{
                                height: 10,
                                width: 20,
                            }}
                        />
                    </View>
                    <View style={{ width: '33%', paddingHorizontal: 5, borderRadius: 10, alignItems: 'center', backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 15 }}>
                        <Image
                            source={require('../assets/Stores.png')}
                            style={{
                                height: 18,
                                width: 18,
                            }}
                        />
                        <Text style={{ color: 'black' }}>Stores</Text>
                        <Image
                            source={require('../assets/Vector.png')}
                            style={{
                                height: 10,
                                width: 20,
                            }}
                        />
                    </View>
                    <View style={{ width: '33%', alignItems: 'center', borderRadius: 10, backgroundColor: '#ffff', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 5 }}>
                        <Image
                            source={require('../assets/search.png')}
                            style={{
                                height: 18,
                                width: 18,
                            }}
                        />
                        {/* <Text style={{ color: 'black' }}>Search</Text> */}
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor='grey'
                            style={{ paddingVertical: 5, height: 30, width: 60, }}
                        />
                        <Image
                            source={require('../assets/Vector.png')}
                            style={{
                                height: 10,
                                width: 20,
                            }}
                        />
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 5, }}>
                    <Image
                        source={require('../assets/Frame.png')}
                        style={styles.imgSlider}
                    />
                </View>

                <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 15 }}>
                    <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Top Selling</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Vector222.png')}
                            style={{ height: 20, width: 15 }}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} style={{}}>

                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Kiwi</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                <View style={{ marginVertical: 10, paddingHorizontal: 15, paddingVertical: 5, backgroundColor: '#fff', height: height / 2 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Categories</Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Vector222.png')}
                                style={{ height: 20, width: 15 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} contentContainerStyle={{}}>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>
                        <View style={{ height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Drinks</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Greens</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>

                    </ScrollView>
                    <ScrollView horizontal={true} contentContainerStyle={{}}>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>
                        <View style={{ height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Drinks</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Greens</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>

                    </ScrollView>
                    <ScrollView horizontal={true} contentContainerStyle={{}}>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>
                        <View style={{ height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Drinks</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Greens</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>
                        <View style={{ marginHorizontal: 5, height: height / 6.9, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/Rectangle4856.png')}
                                style={{ height: 80, width: 80 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '500' }}>Vegetables</Text>
                        </View>

                    </ScrollView>

                </View>
                <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 15 }}>
                    <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Most Recent</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Vector222.png')}
                            style={{ height: 20, width: 15 }}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{}}>

                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Kiwi</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
                <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 15 }}>
                    <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}>Fresh Arrivals</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Vector222.png')}
                            style={{ height: 20, width: 15 }}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{}}>

                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Kiwi</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginVertical: 10, borderWidth: 1, height: height / 4.8, width: width / 3.3, marginHorizontal: 5, borderRadius: 10 }}>
                        <View style={{ top: -8, right: 5, backgroundColor: '#009900', width: 30, height: 30, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', color: '#fff', }}>5%</Text>
                        </View>

                        <Image
                            source={require('../assets/Rectangle.png')}
                            style={{ height: 65, width: 100, alignSelf: 'center', top: -10 }}
                        />
                        <Text style={{ color: 'black', top: -7, paddingHorizontal: 10, fontWeight: '500', fontSize: 14 }}>Orange</Text>
                        <Text style={{ top: -5, color: 'grey', paddingHorizontal: 10, fontWeight: '500', fontSize: 12 }}>₹70/Kg</Text>
                        <TouchableOpacity style={{ backgroundColor: "#F58850", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff' }}>+</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    scroll: {
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 20,
        height: '30%',



    },
    imgSlider: {
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: "#ffff",
        borderRadius: 10,
        width: '95%',
        paddingVertical: 20,

    },
});