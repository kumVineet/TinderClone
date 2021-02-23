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

import SpashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import AccRecovery from './src/screens/AccRecovery';
import RootScreen from './src/screens/RootScreen';




export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, }}>

        {/* <SpashScreen /> */}
        {/* <LoginScreen /> */}
        {/* <AccRecovery /> */}


        <NavigationContainer>
          <RootScreen />
        </NavigationContainer>

      </SafeAreaView>
    </>
  );
};




