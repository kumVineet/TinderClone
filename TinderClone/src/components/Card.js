import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();


const Card = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1594886761101-49c80b0c57a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dGUlMjB3b21hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("About")}
                    >
                        <Text style={[styles.textPrimary, styles.textShadow]}>Remy_Loz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("About")}
                    >
                        <Text style={[styles.textSecondary, styles.textShadow]}> 24</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("About")}
                    >
                        <Text style={[styles.textSecondary, styles.textShadow]}>22 miles away</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: '100%',
        borderRadius: 20,
        justifyContent: 'center'
    },
    textContainer: {
        position: 'absolute',
        bottom: 25,
        left: 20
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrimary: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    textSecondary: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
})