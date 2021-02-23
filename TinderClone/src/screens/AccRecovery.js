import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();


const AccRecovery = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate("Splash")}>
                    <Ionicons
                        name="chevron-back-circle-outline"
                        size={45}
                        color="#fe3c72" />
                </TouchableOpacity>
            </View>

            <Text style={styles.text1}>Account Recovery</Text>

            <Text style={styles.text2}>Changed your phone number or lost
            your access to your Facebook
            account? We can help you log in
             with your email. </Text>

            <View style={styles.textInput}>
                <TextInput
                    style={{
                        width: "70%",
                        height: 35,
                        fontSize: 20,
                    }}
                    selectionColor="#fe3c72"
                    keyboardType='default'
                    height={60}
                />
            </View>

            <TouchableOpacity
                style={styles.logIn}
                onPress={() => alert("CHECKOUT YOUR EMAIL")}>
                <View>
                    <Text style={styles.buttonText}>LOG IN WITH EMAIL </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default AccRecovery;

const styles = StyleSheet.create({
    back: {
        marginLeft: 10
    },
    textInput: {
        marginHorizontal: 30,
        marginLeft: 30,
        marginTop: 50,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        alignSelf: 'stretch',
        padding: 10,
        borderBottomColor: "#fe3c72",
        borderBottomWidth: 2
    },
    logIn: {
        marginVertical: 40,
        marginHorizontal: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#fe3c72"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
        justifyContent: 'center'
    },
    text1: {
        marginTop: 50,
        marginHorizontal: 58,
        fontSize: 35,
        fontWeight: '700'
    },
    text2: {
        marginTop: 40,
        marginHorizontal: 36,
        fontSize: 22,
        fontWeight: '300',
        color: '#b1b5ba'

    },
})