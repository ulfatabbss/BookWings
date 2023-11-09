import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const { login } = useSelector((state:any)=> state.root.user);
  return (
    login?
    <MainStack/>
    :<AuthStack/>
  )
}

export default Routes


const styles = StyleSheet.create({})