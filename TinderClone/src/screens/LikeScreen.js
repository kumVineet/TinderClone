import React from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Like from '../components/Like';
import Picks from '../components/Picks';


const Tab = createMaterialTopTabNavigator();

const LikeScreen = () => {
    return (

        <Tab.Navigator
            initialRouteName="Like"
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Tab.Screen
                name="Like" component={Like} />
            <Tab.Screen
                name="Top Picks" component={Picks} />
        </Tab.Navigator>

    )
}


export default LikeScreen;