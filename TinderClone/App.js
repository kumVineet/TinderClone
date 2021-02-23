/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


import LoginScreen from './src/screens/LoginScreen';
import AboutScreen from './src/screens/AboutScreen';
import AccRecovery from './src/screens/AccRecovery';
import RootScreen from './src/screens/RootScreen';
import SplashScreen from './src/screens/SplashScreen';


const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>

        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="AccRecovery" component={AccRecovery} />
            <Stack.Screen name="RootScreen" component={RootScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
        </NavigationContainer>

      </SafeAreaView>
    </>
  );
};




