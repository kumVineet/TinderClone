import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, Animated, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();


const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const CardItem = ({ Details }) => {

    const navigation = useNavigation();

    // const position = new Animated.ValueXY()

    // const likeOpacity = position.x.interpolate({
    //     inputRange: [(-DIMENSION_WIDTH) / 2, 0, (DIMENSION_WIDTH - 30) / 2],
    //     outputRange: [0, 0, 1],
    //     extrapolate: 'clamp'
    // })
    // const dislikeOpacity = position.x.interpolate({
    //     inputRange: [(-DIMENSION_WIDTH) / 2, 0, (DIMENSION_WIDTH) / 2],
    //     outputRange: [1, 0, 0],
    //     extrapolate: 'clamp'
    // })

    return (
        <View>
            {/* <Animated.View style={{
                transform: [{ rotate: '-30deg' }], position: 'absolute', top: 65, left: 35, zIndex: 1000,
                opacity: likeOpacity
            }}>
                <Text
                    style={{
                        borderWidth: 1, borderColor: 'green', color: 'green',
                        fontSize: 32, fontWeight: '800', padding: 10, borderRadius: 10
                    }}
                >LIKE</Text>
            </Animated.View>
            <Animated.View style={{
                transform: [{ rotate: '30deg' }], position: 'absolute', top: 65, right: 35, zIndex: 1000,
                opacity: dislikeOpacity
            }}>
                <Text
                    style={{
                        borderWidth: 1, borderColor: 'red', color: 'red',
                        fontSize: 32, fontWeight: '700', padding: 10, borderRadius: 10
                    }}
                >NOPE</Text>
            </Animated.View> */}
            <Image
                source={Details.pic}
                style={styles.image}
            />

            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("About", { Details })}
                    >
                        <Text style={[styles.textPrimary, styles.textShadow]}>{Details.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    >
                        <Text style={[styles.textPrimary, styles.textShadow]}>{Details.age}</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("About", { Details })}
                    >
                        <Text style={[styles.textSecondary, styles.textShadow]}>{Details.caption}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default CardItem;

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: DIMENSION_WIDTH - 30,
        height: DIMENSION_HEIGHT - 230,
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