import React from 'react';
import {
    View, StyleSheet, Dimensions
} from 'react-native';


import Swipes from '../components/Swipes';
import BottomBar from '../components/BottomBar';


const HomeScreen = () => {



    return (
        <View style={styles.container}>

            <View style={styles.swipes}>

                <Swipes />

            </View>

            <BottomBar />
        </View>
    )
}


export default HomeScreen;


const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;


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

    bg: {
        flex: 1,
        resizeMode: "cover",
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT
    },
})