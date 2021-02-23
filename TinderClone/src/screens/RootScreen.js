import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
MaterialIcons.loadFont();
import FontAwesome from "react-native-vector-icons/FontAwesome";
FontAwesome.loadFont();
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();



import HomeScreen from './HomeScreen';
import LikeScreen from './LikeScreen';
import MatchScreen from './MatchScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialTopTabNavigator();


const RootScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName=" "
            tabBarOptions={{

                showIcon: true,
                activeTintColor: '#fe3c72',
                inactiveTintColor: 'gray',
                indicatorStyle: {
                    backgroundColor: 'transparent',
                },
                style: {
                    height: 50,
                    // backgroundColor: 'transparent',
                    // borderColor: 'transparent'
                }
            }}
        >
            <Tab.Screen
                name=" "
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <MaterialIcons name="local-fire-department" size={22} color="#fe3c72" /> :
                            <MaterialIcons name="local-fire-department" size={22} color="grey" />
                }}
            />
            <Tab.Screen
                name="  "
                component={LikeScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FontAwesome name="diamond" size={22} color="#fe3c72" /> :
                            <FontAwesome name="diamond" size={22} color="grey" />
                }}
            />
            <Tab.Screen
                name="   "
                component={MatchScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Ionicons name="chatbox-ellipses" size={22} color="#fe3c72" /> :
                            <Ionicons name="chatbox-ellipses" size={22} color="grey" />
                }}
            />
            <Tab.Screen
                name="     "
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FontAwesome name="user" size={24} color="#fe3c72" /> :
                            <FontAwesome name="user" size={24} color="grey" />
                }}
            />
        </Tab.Navigator>
    )
}

export default RootScreen;