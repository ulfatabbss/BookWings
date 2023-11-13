import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity,Image, Switch} from 'react-native'
import React, { useState } from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface'
import { store } from '../../Redux/store'
import { setLogin } from '../../Redux/Reducers/userReducer'

const Setting =  ({navigation}:GenericNavigation) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  // Function to handle the switch state change
  const handleToggleSwitch = () => {
    // Update the state when the switch is toggled
    setIsSwitchOn((prev) => !prev);
  };
  return (
  <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'Setting'} back='1' Edit='false' />
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
    <View style={styles.V4}>
    <View style={styles.V6}>
            <Image
              style={[styles.img2,]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/password.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('PasswordSettings')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                    marginLeft: '2%',
                   
                  },
                ]}>
               Password Settings
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2, ]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/MyPlan.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('MyPlans')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                    marginLeft: '2%',
                   
                  },
                ]}>
              My Plans
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2, ]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/Payment.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('PaymentMethod')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                    marginLeft: '2%',
                   
                  },
                ]}>
                Payment Method
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2, ]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/MyInvoice.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('MyInvoices')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                    marginLeft: '2%',
                   
                  },
                ]}>
               My Invoices
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V7}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={[styles.img2,]}
                resizeMode="contain"
                source={require('../../assets/Images/SettingIcons/Notification.png')}></Image>

              <TouchableOpacity style={{marginLeft: '2%'}}>
                <Text
                  style={[
                    {
                      fontSize: RF(14),
                      fontFamily: 'Inter-Medium',
                      marginLeft: '2%',
                    
                    },
                  ]}>
                  {' '}
                  Notification
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 19, width: 37}}>
              <Switch
                style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}} //adjusting require for switch
                trackColor={{false: '#767577', true: '#C89B28'}}
                // thumbColor={dark ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggleSwitch} // Call the handleToggleSwitch function on switch change
            value={isSwitchOn} // Pass the state value to the switch
              />
            </View>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2, ]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/Terms.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('Terms')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                    marginLeft: '2%',
                   
                  },
                ]}>
                Terms & conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2,]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/Policy.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('PrivacyPolicy')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                    marginLeft: '2%',
                   
                  },
                ]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          
         
          <View style={styles.V6}>
            <Image
              style={[styles.img2,]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/FAQ.png')}></Image>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => navigation.navigate('FAQ')}>
              <Text
                style={[
                  {
                    fontFamily: 'Inter-Medium',
                    fontSize: RF(14),
                   
                  },
                ]}>
                FAQ’s
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2,]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/LogOut.png')}></Image>
            <TouchableOpacity style={{marginLeft: '2%'}}
            onPress={()=>store.dispatch(setLogin(false))}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                  
                  },
                ]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.V6}>
            <Image
              style={[styles.img2]}
              resizeMode="contain"
              source={require('../../assets/Images/SettingIcons/DeleteAcc.png')}></Image>
            <TouchableOpacity style={{marginLeft: '2%'}}
            onPress={() => navigation.navigate('DeleteAcc')}>
              <Text
                style={[
                  {
                    fontSize: RF(14),
                    fontFamily: 'Inter-Medium',
                  color:"#E00000"
                  },
                ]}>
              Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
   

   

  </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({

  img3: {
    height: RF(20),
    width: RF(20),
    marginHorizontal: RFP(1),
  },
  V3: {flexDirection: 'row', marginTop: '5%'},
  V4: {width: '90%', alignSelf: 'center', marginTop: '5%'},
  V6: {flexDirection: 'row', marginTop: '7%'},
  V7: {flexDirection: 'row', marginTop: '7%', justifyContent: 'space-between'},
  img2: {height: RF(20), width: RF(20)},
})