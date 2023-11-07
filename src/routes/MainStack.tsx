import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/MainScreens/HomeScreen';



const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
    
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
   
    
   
  </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})