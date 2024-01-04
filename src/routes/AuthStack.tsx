import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/AuthScreens/GetStarted';
import SignUp from '../Screens/AuthScreens/SignUp';
import OTP from '../Screens/AuthScreens/OTP';
import CompleteProfile from '../Screens/AuthScreens/CompleteProfile';
import Userinfo01 from '../Screens/AuthScreens/Userinfo01';
import Userinfo02 from '../Screens/AuthScreens/Userinfo02';
import Userinfo03 from '../Screens/AuthScreens/Userinfo03';
import PaymentPlan from '../Screens/AuthScreens/PaymentPlan';
import SignIn from '../Screens/AuthScreens/SignIn';
import ForgotPassword from '../Screens/AuthScreens/ForgotPassword';
import ResetPassword from '../Screens/AuthScreens/ResetPassword';
import PaymentMethod from '../Screens/AuthScreens/PaymentMethod';
import AddNewCard from '../Screens/AuthScreens/AddNewCard';

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
      <Stack.Screen name="PaymentPlan" component={PaymentPlan} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
    </Stack.Navigator>
  );
};
export default AuthStack;
const styles = StyleSheet.create({});
