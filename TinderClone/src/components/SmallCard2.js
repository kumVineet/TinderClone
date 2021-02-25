import React from 'react';
import {
    Text, View, StyleSheet, ImageBackground,
} from 'react-native';


const SmallCard = ({ PicksDetail }) => {

    return (
        <View style={{
            paddingRight: 25,
            paddingLeft: 25
        }}>
            <ImageBackground
                source={PicksDetail.pic}
                imageStyle={{ borderRadius: 10 }}
                style={styles.image}>
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        position: "absolute",
                        bottom: 20,
                        left: 5
                    }}
                >
                    {PicksDetail.title} </Text>

                <Text
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        position: "absolute",
                        bottom: 5,
                        left: 10
                    }}
                >{PicksDetail.caption}</Text>
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