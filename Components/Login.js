
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Login/LoginScreen'
import HomeScreen from '../Login/HomeScreen'
import {createStore} from 'redux';
import Reducers from '../Login/Redux/Reducers'
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
// const store = createStore(Reducers);

export default function Login () {
  return (
    <Stack.Navigator>
         <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});