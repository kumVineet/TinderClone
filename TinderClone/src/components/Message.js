import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

import Minicard from '../components/Minicard';
import Messages from '../assets/data/Messages';

const Message = ({ Details }) => {
    // console.log("abc", Details.title)

    return (
        <View style={styles.message}>
            <Minicard imageUri={Details.pic} />

            <View style={styles.messageText}>
                <Text
                    style={{ fontSize: 20, fontWeight: '400' }}
                >{Details.title}</Text>
                <Text
                    style={{ fontSize: 14, marginTop: 5 }} ellipsizeMode="tail" numberOfLines={1}
                >{Details.message}</Text>
            </View>
        </View>
    )
}

export default Message;

const styles = StyleSheet.create({
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