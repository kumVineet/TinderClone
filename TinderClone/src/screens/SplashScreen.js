import React from 'react';
import {
    Text, View, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
AntDesign.loadFont();


const SplashScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                marginTop={40}
                source={require('../assets/images/tinderlogo.gif')}
                style={styles.logo}
                resizeMode='stretch'
            />
            <View style={styles.textPrivacy}>
                <Text >By clicking "Log in", you agree with our </Text>
                <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{""}Terms of service</Text>
                <Text>Learn how we process your data in our </Text>
                <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{" "}Privacy Policy </Text>
                <Text>and </Text>
                <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{" "}Cookies Policy.</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    style={styles.logIn}
                    onPress={() => alert("SIGNED IN WITH GOOGLE")}
                >
                    <View style={styles.button}>
                        <View style={{ marginLeft: -30 }}>
                            <AntDesign
                                name="google"
                                size={22}
                                color="white" />
                        </View>
                        <Text style={[styles.buttonText]}>LOGIN WITH GOOGLE</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logIn}
                    onPress={() => navigation.navigate("Login")}
                >
                    <View style={styles.button}>
                        <View style={{ marginLeft: -10 }}>
                            <AntDesign
                                name="message1"
                                size={22}
                                color="white" />
                        </View>
                        <Text style={styles.buttonText}>LOGIN WITH PHONE NUMBER </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logIn}
                    onPress={() => alert("SIGNED IN WITH FACEBOOK")}
                >
                    <View style={styles.button}>
                        <View style={{ marginLeft: -30 }}>

                            <AntDesign
                                name="facebook-square"
                                size={22}
                                color="white" />
                        </View>
                        <Text style={styles.buttonText}>LOGIN WITH FACEBOOK</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={{ height: 40, alignItems: 'center', marginTop: 20 }}
                onPress={() => navigation.navigate("AccRecovery")}
            >
                <Text style={{ fontWeight: '700', fontSize: 16 }}>Trouble logging in?</Text>
            </TouchableOpacity>


        </View>
    )
}


export default SplashScreen;


const styles = StyleSheet.create({
    logo: {
        marginHorizontal: 10,
        width: "95%",
        height: "40%"
    },
    logIn: {
        marginVertical: 10,
        marginHorizontal: 30,
        height: 50,
        justifyContent: 'space-evenly',
        borderRadius: 25,
        backgroundColor: "#fe3c72"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
    },
    textPrivacy: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 80,
        marginHorizontal: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 25
    },
})


