import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, FlatList, Alert
} from 'react-native';
import SmallCard from '../components/SmallCard';
import { TopPicksScreenPics } from '../assets/data/Pics';


const Like = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.text}>
                <Text
                    style={{ fontSize: 18, fontWeight: '400' }}
                >Upgrade to Gold to see people who </Text>
                <Text
                    style={{ fontSize: 18, fontWeight: '400' }}
                >have already liked you.</Text>
            </View>

            <View >
                <FlatList
                    numColumns={2}
                    data={TopPicksScreenPics}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <SmallCard
                                LikeDetail={item}
                            />
                        </TouchableOpacity>
                    )}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => Alert.alert("GET TINDER GOLD")}>
                    <View >
                        <Text
                            style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                        >SEE WHO LIKES YOU</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default Like;

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
        bottom: 141
    },
})