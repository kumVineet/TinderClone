import React from 'react';
import {
    Text, View, StyleSheet, Alert, TouchableOpacity, FlatList
} from 'react-native';
import SmallCard2 from '../components/SmallCard2';
import { TopPicksScreenPics } from '../assets/data/Pics'


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

            <View >
                <View >
                    <FlatList
                        numColumns={2}
                        data={TopPicksScreenPics}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <SmallCard2
                                    PicksDetail={item}
                                />
                            </TouchableOpacity>
                        )}
                    />

                    <TouchableOpacity style={styles.button}
                        onPress={() => Alert.alert("GET TINDER GOLD")}>
                        <View >
                            <Text
                                style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                            >UNLOCK TOP PICKS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Picks;

const styles = StyleSheet.create({
    text: {
        marginTop: 30,
        marginHorizontal: 60,
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FFD700',
        width: 250,
        height: 55,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 80,
        bottom: 235

    },
})