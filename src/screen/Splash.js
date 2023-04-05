import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import { heightPixel, widthPixel } from '../Components/Dimensions';


const Splash = props => {
    const [align, setAlign] = useState('center');
    const [alignsecond, setAlignsecond] = useState(false);



    useEffect(() => {
        setTimeout(() => {
            setAlignsecond(true);
        }, 3000);
    }, []);


    useEffect(() => {
        if (alignsecond) {
            props.navigation.replace('Login');
        }
    }, [alignsecond, props.navigation]);

    return (
        <View style={[Styles.container, { justifyContent: align }]}>
            <Image
                source={require('../assets/Orgaplants.png')}
                style={Styles.imgstyles}

            />


        </View >
    );
};

export default Splash;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9EEE4',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',

    },
    imgstyles: {
        justifyContent: 'center',
        height: heightPixel(400),
        width: widthPixel(400),
        resizeMode: 'contain'


    },
})
