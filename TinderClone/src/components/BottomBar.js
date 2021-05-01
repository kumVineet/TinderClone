import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
MaterialCommunityIcons.loadFont();



const BottomBar = () => {


    const [count, setCount] = useState(0)


    useEffect(() => {

        let myTimeout = setTimeout((count) => {
            if (!count++) {
                Alert.alert('SWIPE RIGHT TO KNOW MORE')
            }
        }, 10000);
        return () => {
            clearTimeout(myTimeout);
        };
    }, [count])



    return (
        <View style={styles.container}>
            <View />

            <TouchableOpacity
                style={styles.button1}
                onPress={() => { this.swiper.goBackFromLeft() }}
                onPressIn={() => setCount(count + 1)}
            >
                <FontAwesome name="undo" size={25} color="grey" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { this.swiper.swipeLeft() }}
                onPressIn={() => setCount(count + 1)}
                style={styles.button2}>
                <FontAwesome name="times" size={40} color="#F06795"></FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button1}
                onPress={() => { this.swiper.swipeTop() }}
                onPressIn={() => setCount(count + 1)}
            >
                <FontAwesome name="star" size={25} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { this.swiper.swipeRight() }}
                onPressIn={() => setCount(count + 1)}
                style={styles.button2}
            >
                <FontAwesome name="heart" size={35} color="#64EDCC" ></FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button1}
                onPress={() => Alert.alert("SORRY YOU ARE OUT OF BOOST! GET TINDER GOLD FOR MORE BOOST.")}
            >
                <MaterialCommunityIcons name="lightning-bolt" size={25} color="purple" />
            </TouchableOpacity>

            <View />
        </View>
    )
}

export default BottomBar;

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button1: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9,
    },
    button2: {
        width: 64,
        height: 64,
        backgroundColor: 'white',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9,
    },
})