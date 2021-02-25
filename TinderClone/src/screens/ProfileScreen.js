import React from 'react';
import {
    Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
MaterialIcons.loadFont();
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();


import { AuthContext } from '../components/context';



const ProfileScreen = () => {

    const navigation = useNavigation();

    // const { signOut } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/images/vk.jpg')}
                    style={styles.profileImage} />
            </View>

            <View style={styles.profileInfo}>
                <Text
                    style={{ fontSize: 22, fontWeight: 'bold' }}
                >Vineet Kumar, </Text>
                <Text
                    style={{ fontSize: 22, fontWeight: 'bold' }}
                >24  </Text>
                <MaterialIcons name="verified" size={24} color="skyblue" />
            </View>

            <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{ fontSize: 17, fontWeight: '400' }}
                >Mobile App Dev</Text>
                <Text
                    style={{ fontSize: 17, fontWeight: '400', marginHorizontal: 125, marginTop: 5 }}
                >A.K.T.U</Text>
            </View>

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

            <View style={styles.desc}>
                <Text style={styles.descText}>
                    Looking for some positive moments, adventures and fun.
                </Text>
                <Text style={styles.descText}>
                    I am cheerful, sociable, and with a good sense of humor.
                </Text>
                <Text style={styles.descText}>
                    Looking also for a travel companion
                 </Text>


            </View>
            <View style={styles.social}>
                <Text style={{ color: 'grey', fontWeight: '400' }}>
                    Find me on Social Media
                    </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 230, marginTop: 5 }}>
                    <TouchableOpacity>
                        <FontAwesome name="snapchat" size={30} color="#fe3c72" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="instagram" size={30} color="#fe3c72" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="facebook-square" size={30} color="#fe3c72" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.plus}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Splash")}
                // onPress={() => { signOut() }}
                >
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 22, color: '#fe3c72' }}
                    >SIGN OUT</Text>

                </TouchableOpacity>
            </View>
        </View>

    )
}


export default ProfileScreen;


const styles = StyleSheet.create({
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginTop: 50,
    },
    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    desc: {
        borderBottomWidth: 0.3,
        height: 120,
        marginHorizontal: 25,
        marginTop: 20,
    },
    descText: {
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'italic',
    },
    social: {
        borderBottomWidth: 0.3,
        height: 70,
        marginHorizontal: 25,
        marginTop: 10,
    },
    plus: {
        // marginVertical: 130,
        marginHorizontal: 65,
        height: 60,
        width: 280,
        borderRadius: 30,
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