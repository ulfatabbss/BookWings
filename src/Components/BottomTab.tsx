import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/MainScreens/HomeScreen';
import Setting from '../Screens/MainScreens/Setting';
import Favorites from '../Screens/MainScreens/Favorites';
import MyProfile from '../Screens/MainScreens/MyProfile';
import {RF} from '../Utilities/Responsive';
import MainStack from '../routes/MainStack';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: Primary,
        tabBarStyle: {
          height: RF(70),
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          overflow: 'hidden',
          // boxShadow: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      // activeColor="#3F51B5"
      // inactiveColor="gray"
      // screenOptions={{}}
      // barStyle={{
      //   backgroundColor: 'red',
      //   width: '100%',
      //   alignSelf: 'center',
      //   height: RF(100),
      //   // borderRadius: RF(20),
      //   overflow: 'hidden',
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: RF(60),
                width: RF(60),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: RF(24),
                  width: RF(24),
                  tintColor: focused ? '#3F51B5' : undefined,
                }}
                resizeMode="contain"
                source={require('../assets/Images/BottomTab/home.png')}
              />
              <Text
                style={{
                  fontSize: RF(10),
                  fontFamily: 'Inter-Regular',
                  marginTop: RF(6),
                  color: focused ? '#3F51B5' : 'gray',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: RF(60),
                width: RF(60),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: RF(24),
                  width: RF(24),
                  tintColor: focused ? '#3F51B5' : undefined,
                }}
                resizeMode="contain"
                source={require('../assets/Images/BottomTab/Fav.png')}
              />
              <Text
                style={{
                  fontSize: RF(10),
                  fontFamily: 'Inter-Regular',
                  marginTop: RF(6),
                  color: focused ? '#3F51B5' : 'gray',
                }}>
                Favorites
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: RF(60),
                width: RF(60),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: RF(24),
                  width: RF(24),
                  tintColor: focused ? '#3F51B5' : undefined,
                }}
                resizeMode="contain"
                source={require('../assets/Images/BottomTab/profile.png')}
              />
              <Text
                style={{
                  fontSize: RF(10),
                  fontFamily: 'Inter-Regular',
                  marginTop: RF(6),
                  color: focused ? '#3F51B5' : 'gray',
                }}>
                MyProfile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: RF(60),
                width: RF(60),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: RF(24),
                  width: RF(24),
                  tintColor: focused ? '#3F51B5' : undefined,
                }}
                resizeMode="contain"
                source={require('../assets/Images/BottomTab/Setting.png')}
              />
              <Text
                style={{
                  fontSize: RF(10),
                  fontFamily: 'Inter-Regular',
                  marginTop: RF(6),
                  color: focused ? '#3F51B5' : 'gray',
                }}>
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
