import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground
} from 'react-native';


const Picks = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.text}>
                <Text
                    style={{ fontSize: 18, fontWeight: '400' }}
                >Upgrade to Tinder Gold for </Text>
                <Text
                    style={{ fontSize: 18, fontWeight: '400' }}
                >more Top Picks!</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGN1dGUlMjB3b21hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 20,
                            left: 5
                        }}
                    >
                        Clara</Text>

                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 5,
                            left: 10
                        }}
                    >24</Text>
                </ImageBackground>
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGN1dGUlMjB3b21hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 20,
                            left: 5
                        }}
                    >
                        Clara
                    </Text>

                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 5,
                            left: 10
                        }}
                    >24</Text>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGN1dGUlMjB3b21hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 20,
                            left: 5
                        }}
                    >
                        Clara</Text>

                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 5,
                            left: 10
                        }}
                    >24</Text>
                </ImageBackground>
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGN1dGUlMjB3b21hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 20,
                            left: 5
                        }}
                    >
                        Clara
                    </Text>

                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            position: "absolute",
                            bottom: 5,
                            left: 10
                        }}
                    >24</Text>
                </ImageBackground>
            </View>

            <TouchableOpacity
                onPress={() => alert("Get Tinder Gold")}>
                <View style={styles.button}>
                    <Text
                        style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                    >UNLOCK TOP PICKS</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Picks;

const styles = StyleSheet.create({
    text: {
        marginTop: 30,
        marginHorizontal: 60,
        alignItems: 'center',

    },
    image: {
        width: 180,
        height: 240,
        marginTop: 30,
        borderRadius: 10,
        position: "relative",
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#FFD700',
        marginHorizontal: 70,
        marginVertical: 10,
        height: 55,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
})