import React from 'react';
import {
    Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();


const AboutScreen = ({ route, navigation }) => {

    // const navigation = useNavigation();

    const { Details } = route.params

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View>
                <Image
                    source={Details.pic}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>

                    <FontAwesome name="arrow-down" size={30} color="white" />

                </TouchableOpacity>
            </View>

            <View style={{ borderBottomWidth: 0.3, padding: 10, }}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{Details.title}</Text>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{Details.age}</Text>
                </View>
                <View style={styles.textRow2}>
                    <FontAwesome name="graduation-cap" size={18} color="black" />
                    <Text style={styles.texttertiary}>{Details.college}</Text>
                </View>
                <View style={styles.textRow2}>
                    <FontAwesome name="home" size={18} color="black" />
                    <Text style={styles.texttertiary}> {Details.city}</Text>
                </View>
                <View style={styles.textRow2}>
                    <FontAwesome name="map-marker" size={18} color="black" />
                    <Text style={styles.texttertiary}>  {Details.caption}</Text>
                </View>
            </View>

            <View style={styles.share}>
                <Text
                    style={{
                        color: '#fe3c72',
                        fontWeight: 'bold',
                        fontSize: 18,

                    }}
                >SHARE {Details.title} PROFILE</Text>
                <Text
                    style={{
                        color: '#fe3c72',
                        fontWeight: '600',
                        fontSize: 14
                    }}
                >SEE WHAT A FRIEND THINKS</Text>
            </View>

            <View style={styles.report}>
                <Text
                    style={{
                        color: '#606060',
                        fontWeight: '600',
                        fontSize: 17
                    }}
                >REPORT {Details.title}</Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button2} >
                    <FontAwesome name="times" size={40} color="#F06795"></FontAwesome>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => alert("YOU GAVE A SUPERLIKE")}>
                    <FontAwesome name="star" size={25} color="blue" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <FontAwesome name="heart" size={35} color="#64EDCC" ></FontAwesome>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
        justifyContent: 'center'
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fe3c72',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -30,
        right: 40
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    textPrimary: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    textSecondary: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: '600'
    },
    textRow2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 5
    },
    texttertiary: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '400'
    },
    share: {
        height: 80,
        borderBottomWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    report: {
        height: 60,
        borderBottomWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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