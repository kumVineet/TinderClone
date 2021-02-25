/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView, View, ActivityIndicator, Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/LoginScreen';
import AboutScreen from './src/screens/AboutScreen';
import AccRecovery from './src/screens/AccRecovery';
import RootScreen from './src/screens/RootScreen';
import SplashScreen from './src/screens/SplashScreen';
import { AuthContext } from './src/components/context'


const Stack = createStackNavigator()

export default function App() {


  const initialLoginState = {
    isLoading: true,
    userNumber: null,
    userToken: null,
  };


  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGIN':
        return {
          ...prevState,
          userNumber: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userNumber: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({

    signIn: async (userNumber) => {

      let userToken;
      userToken = null;
      console.log(userNumber);
      if (userNumber == '9557978166') {
        userToken = 'dfgdfg';
        await AsyncStorage.setItem('userToken', userToken);
      } else {
        Alert.alert("Login not successfull")
      }
      dispatch({ type: 'LOGIN', id: userNumber, token: userToken });
    },


    signOut: async (userToken) => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'LOGOUT' });
    }
  }), []);


  useEffect(() => {
    setTimeout(async () => {

      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);


  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#fe3c72' />
      </View>
    )
  }


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            <Stack.Navigator headerMode="none">
              {loginState.userToken !== null ? (
                <>
                  <Stack.Screen name="RootScreen" component={RootScreen} />
                  <Stack.Screen name="About" component={AboutScreen} />
                </>
              ) : (
                  <>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="AccRecovery" component={AccRecovery} />
                  </>
                )
              }
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaView>
    </>
  );
};




