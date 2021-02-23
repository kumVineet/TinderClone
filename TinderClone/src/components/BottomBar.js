import React from 'react'
import { Touchable } from 'react-native';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
MaterialCommunityIcons.loadFont();


const BottomBar = () => {
    return (
        <View style={styles.container}>
            <View />
            <TouchableOpacity style={styles.button1}>
                <FontAwesome name="undo" size={25} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} >
                <FontAwesome name="times" size={40} color="#F06795"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
                <FontAwesome name="star" size={25} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <FontAwesome name="heart" size={35} color="#64EDCC" ></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
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
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 35,
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