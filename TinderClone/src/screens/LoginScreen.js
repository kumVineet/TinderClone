import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();


const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.back}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Splash")}
                >
                    <Ionicons
                        name="chevron-back-circle-outline"
                        size={45}
                        color="#fe3c72" />
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>My Number is</Text>

            <View style={styles.textInput}>
                <TextInput
                    style={{
                        width: "70%",
                        height: 35,
                        fontSize: 20,
                    }} maxLength={13}
                    selectionColor="#fe3c72"
                    keyboardType='number-pad'
                    height={60}
                />
            </View>

            <View style={{ marginTop: 40 }}>
                <Text style={styles.text_noChange}>
                    When you tap "Continue", Tinder will send a text with verification code.
                    Message and Data rates may apply. The verified phone number can be used to log in.
            </Text>
                <Text
                    style={{
                        marginLeft: 40,
                        marginRight: 30,
                        fontWeight: '300',
                        textDecorationLine: 'underline',

                    }}>
                    Learn what happens when your number changes.</Text>
            </View>

            <TouchableOpacity
                style={styles.logIn}
                onPress={() => navigation.navigate("RootScreen")}>
                <View>
                    <Text style={styles.buttonText}>CONTINUE</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default LoginScreen;


const styles = StyleSheet.create({
    back: {
        marginLeft: 10
    },
    text: {
        marginTop: 30,
        marginLeft: 50,
        fontSize: 32,
        fontWeight: '700'
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
    text_noChange: {
        marginLeft: 40,
        marginRight: 30,
        color: '#b1b5ba'
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
})