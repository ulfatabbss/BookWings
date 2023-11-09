import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/MainScreens/HomeScreen';
import Favorites from '../Screens/MainScreens/Favorites';
import MyProfile from '../Screens/MainScreens/MyProfile';
import Setting from '../Screens/MainScreens/Setting';
import BottomTab from '../Components/BottomTab';



const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTab" component={BottomTab} />

    
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="MyProfile" component={MyProfile} />
    <Stack.Screen name="Setting" component={Setting} />
 
    
   
  </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})