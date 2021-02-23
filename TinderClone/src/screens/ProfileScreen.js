import React from 'react';
import {
    Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
MaterialIcons.loadFont();
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();



const ProfileScreen = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                style={styles.profileImage} />

            <View style={styles.profileInfo}>
                <Text
                    style={{ fontSize: 22, fontWeight: 'bold' }}
                >First Name, </Text>
                <Text
                    style={{ fontSize: 22, fontWeight: 'bold' }}
                >Age  </Text>
                <MaterialIcons name="verified" size={24} color="skyblue" />
            </View>

            <Text
                style={{ fontSize: 17, fontWeight: '300', marginHorizontal: 130, marginTop: 10 }}
            >Job Description</Text>
            <Text
                style={{ fontSize: 17, fontWeight: '300', marginHorizontal: 125, marginTop: 5 }}
            >School/University</Text>

            <View style={styles.icons}>
                <Feather name="settings" size={42} color="grey" />
                <FontAwesome name="camera" size={42} color="#fe3c72" />
                <MaterialIcons name="edit" size={42} color="grey" />
            </View>

            <View style={styles.tips}>
                <Text
                    style={{ color: 'white', fontWeight: '600' }}
                >Photo Tip: Try to keep your tounge in your mouth </Text>
                <Ionicons name="add-circle-sharp" size={34} color="#fff" />

            </View>

            <TouchableOpacity style={styles.plus}>
                <View >
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 22, color: '#fe3c72' }}
                    >MY TINDER PLUS</Text>
                </View>
            </TouchableOpacity>

        </View>

    )
}


export default ProfileScreen;


const styles = StyleSheet.create({
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginHorizontal: 120,
        marginTop: 50
    },
    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 20,
    },
    tips: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: '#fe3c72'
    },
    plus: {
        marginVertical: 130,
        marginHorizontal: 70,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#fe3c72',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
})