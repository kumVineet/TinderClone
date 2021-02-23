import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();

import Minicard from '../components/Minicard';


const MatchScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.search}>
                <Ionicons name="search" size={28} color="#fe3c72" />
                <View style={styles.textInput}>
                    <TextInput
                        style={{
                            width: '100%',
                            height: 35,
                            fontSize: 20,
                        }}
                        selectionColor="#fe3c72"
                        keyboardType='default'

                    />
                </View>
            </View>

            <Text style={styles.text}>New Matches</Text>

            <View style={styles.minicard}>
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
            </View>

            <Text style={styles.text}>Messages</Text>

            <View style={styles.message}>
                <Minicard />

                <View style={styles.messageText}>
                    <Text
                        style={{ fontSize: 20, fontWeight: '400' }}
                    >Name</Text>
                    <Text
                        style={{ fontSize: 14, marginTop: 5 }} ellipsizeMode="tail" numberOfLines={1}
                    >Hey there!!</Text>
                </View>
            </View>

            <View style={styles.message}>
                <Minicard />

                <View style={styles.messageText}>
                    <Text
                        style={{ fontSize: 20, fontWeight: '400' }}
                    >Name</Text>
                    <Text
                        style={{ fontSize: 14, marginTop: 5 }} ellipsizeMode="tail" numberOfLines={1}
                    >Hey there!!</Text>
                </View>
            </View>

            <View style={styles.message}>
                <Minicard />

                <View style={styles.messageText}>
                    <Text
                        style={{ fontSize: 20, fontWeight: '400' }}
                    >Name</Text>
                    <Text
                        style={{ fontSize: 14, marginTop: 5 }} ellipsizeMode="tail" numberOfLines={1}
                    >Hey there!!</Text>
                </View>
            </View>

            <View style={styles.message}>
                <Minicard />

                <View style={styles.messageText}>
                    <Text
                        style={{ fontSize: 20, fontWeight: '400' }}
                    >Name</Text>
                    <Text
                        style={{ fontSize: 14, marginTop: 5 }} ellipsizeMode="tail" numberOfLines={1}
                    >Hey there!!</Text>
                </View>
            </View>

            <View style={styles.message}>
                <Minicard />

                <View style={styles.messageText}>
                    <Text
                        style={{ fontSize: 20, fontWeight: '400' }}
                    >Name</Text>
                    <Text
                        style={{ fontSize: 14, marginTop: 5 }} ellipsizeMode="tail" numberOfLines={1}
                    >Hey there!!</Text>
                </View>
            </View>
        </View>
    )
}


export default MatchScreen;


const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 35
    },
    textInput: {
        width: '75%',
        marginHorizontal: 30,
        marginLeft: 10,
        borderBottomColor: "#fe3c72",
        borderBottomWidth: 2,
        // backgroundColor: 'red'
    },
    text: {
        fontWeight: '700',
        fontSize: 15,
        marginLeft: 25,
        marginTop: 30,
        color: '#fe3c72'
    },
    minicard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    message: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10
    },
    messageText: {
        flexDirection: 'column',
        marginVertical: 15,
        marginHorizontal: 10,
        marginRight: 10,
    },
})