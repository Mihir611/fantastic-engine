import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from './src/components/Login/login';
import HomeComponent from './src/components/Home/home';
import RegistrationScreen from './src/components/Register/register';
import ForgotPass from './src/components/Login/forgotPass';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}