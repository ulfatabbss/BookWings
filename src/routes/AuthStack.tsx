import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/AuthScreens/GetStarted';
import SignUp from '../Screens/AuthScreens/SignUp';
import OTP from '../Screens/AuthScreens/OTP';
import CompleteProfile from '../Screens/AuthScreens/CompleteProfile';
import Userinfo01 from '../Screens/AuthScreens/Userinfo01';
import Userinfo02 from '../Screens/AuthScreens/Userinfo02';
import Userinfo03 from '../Screens/AuthScreens/Userinfo03';



const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
    
    <Stack.Screen name="GetStarted" component={GetStarted} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="OTP" component={OTP} />
    <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
    <Stack.Screen name="Userinfo01" component={Userinfo01} />
    <Stack.Screen name="Userinfo02" component={Userinfo02} />
    <Stack.Screen name="Userinfo03" component={Userinfo03} />
    
    
   
  </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})