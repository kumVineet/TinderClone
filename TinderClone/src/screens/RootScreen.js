import React from 'react';
import {
    Text, View
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import HomeScreen from './HomeScreen';
import LikeScreen from './LikeScreen';
import MatchScreen from './MatchScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialTopTabNavigator();


const RootScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Like" component={LikeScreen} />
            <Tab.Screen name="Matches" component={MatchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default RootScreen;