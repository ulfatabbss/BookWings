import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/MainScreens/HomeScreen';
import Favorites from '../Screens/MainScreens/Favorites';
import MyProfile from '../Screens/MainScreens/MyProfile';
import Setting from '../Screens/MainScreens/Setting';
import BottomTab from '../Components/BottomTab';


import PaymentPlan from '../Screens/AuthScreens/PaymentPlan';
import PasswordSettings from '../Screens/MainScreens/PasswordSettings';
import MyPlans from '../Screens/MainScreens/MyPlans';
import PaymentMethod from '../Screens/MainScreens/PaymentMethod';
import MyInvoices from '../Screens/MainScreens/MyInvoices';
import Terms from '../Screens/MainScreens/Terms';
import PrivacyPolicy from '../Screens/MainScreens/PrivacyPolicy';
import FAQ from '../Screens/MainScreens/FAQ';
import DeleteAcc from '../Screens/MainScreens/DeleteAcc';
import ChangePassword from '../Screens/MainScreens/ChangePassword';
import ExploreEbook from '../Screens/MainScreens/ExploreEbook';
import ExploreGenre from '../Screens/MainScreens/ExploreGenre';
import EditProfile from '../Screens/MainScreens/EditProfile';
import EbookDetail from '../Screens/MainScreens/EbookDetail';



const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTab" component={BottomTab} />

    
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="MyProfile" component={MyProfile} />
    <Stack.Screen name="Setting" component={Setting} />
    <Stack.Screen name="PasswordSettings" component={PasswordSettings} />
    <Stack.Screen name="MyPlans" component={MyPlans} />
    <Stack.Screen name="PaymentPlan" component={PaymentPlan} />
    <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    <Stack.Screen name="MyInvoices" component={MyInvoices} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="DeleteAcc" component={DeleteAcc} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="ExploreEbook" component={ExploreEbook} />
    <Stack.Screen name="ExploreGenre" component={ExploreGenre} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="EbookDetail" component={EbookDetail} />




 
    
   
  </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})