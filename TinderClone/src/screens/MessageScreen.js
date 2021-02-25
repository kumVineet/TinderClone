import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();


import Minicard from '../components/Minicard';
import Message from '../components/Message';
import { Messages } from '../assets/data/Messages';



const MessageScreen = () => {

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

                <FlatList
                    data={Messages}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Minicard
                                imageUri={item.pic}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Text style={styles.text}>Messages</Text>


            <FlatList
                data={Messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Message
                            Details={item}
                        />
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}


export default MessageScreen;


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
})