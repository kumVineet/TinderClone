import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

import Card from '../components/Card';
import BottomBar from '../components/BottomBar';




const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.swipes}>
                <Card />
            </View>
            <BottomBar />
        </View>
    )
}


export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    swipes: {
        flex: 1,
        padding: 10,
        paddingTop: 8,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
})