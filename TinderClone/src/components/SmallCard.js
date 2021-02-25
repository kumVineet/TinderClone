import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, ImageBackground, Alert
} from 'react-native';


const SmallCard = ({ LikeDetail }) => {

    return (
        <View style={{
            paddingRight: 25,
            paddingLeft: 25,

        }}>
            <ImageBackground
                source={LikeDetail.pic}
                imageStyle={{ borderRadius: 10 }}
                blurRadius={20}
                style={styles.image}>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 5,

                        height: 5,
                        width: 70,
                        shadowOpacity: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 10, height: 10 },
                        shadowRadius: 5,
                        elevation: 5,
                        borderWidth: 0.5,
                        borderRadius: 2.5,
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 1)"
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "white",
                        }}
                    >
                        {LikeDetail.title}</Text>
                </View>



            </ImageBackground>
        </View>
    )
}

export default SmallCard;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        position: "relative",
        marginBottom: 15,

    },
})