import { Image, SafeAreaView, StyleSheet, Text, TextInput, View,Keyboard, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'


const DeleteAcc = () => {
  const [keyboardShown, setKeyboardStatus] = useState<boolean>(false)
  useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
          setKeyboardStatus(true)
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
          setKeyboardStatus(false)
      });

      return () => {
          showSubscription.remove()
          hideSubscription.remove()
      };
  }, []);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'Delete Account'} back='0' Edit='false'/>
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
    <View style={styles.Container}>
        
        <Text style={styles.heading_text}> Delete your account will:</Text>
        {keyboardShown == false && <>
        <Text style={[styles.text]}>
          We're sorry to see you go. If you're sure you want to delete your
          Flaky account, please be aware that this action is permanent and
          cannot be undone. All of your personal information, including your
          jokes and settings, will be permanently deleted.
        </Text>
        <Text style={[styles.text]}>
          If you're having trouble with your account or have concerns, please
          reach out to us at flaky@gmail.com before proceeding with the
          account deletion. We'd love to help you resolve any issues and keep
          you as a valued Flaky user.
        </Text></>} 
        <Text style={[styles.text]}>
          To Delete your account, confirm your Email.
        </Text>
        <Text style={[styles.txt_email]}>
          {' '}
          Enter Email{' '}
        </Text>
       
        <View
          style={[
            styles.input3_View,
            {backgroundColor: '#F1F1F1'},
          ]}>
         
          <TextInput
            style={[styles.input_txt,]}
           
            placeholder="Enter Your Email" placeholderTextColor={'#313131'}>
         
           
          </TextInput>
        </View> 
       
      </View>
      </View>
      <TouchableOpacity style={styles.SignUpbtn} >
    <Text style={[styles.SignUpTxt]}>Send OTP!</Text>

    </TouchableOpacity>
      </SafeAreaView>
  )
}

export default DeleteAcc

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: RFP(2),
  },
  heading_text: {
    fontSize: RF(16),
    fontFamily: 'Inter-Bold',
    color: '#FF2104',
  },

  text: {
    fontSize: RF(13.5),
    fontFamily: 'Inter-Regular',
    marginTop: RFP(2),
  },
  txt_email: {
    fontSize: RF(16),
    fontFamily: 'Inter-Bold',
    marginTop: RFP(0.5),
  },
  input3_View: {
    height: RF(46),
    width: '100%',

    marginTop: RFP(1),
    flexDirection: 'row',
    borderRadius: RF(25),
    backgroundColor: '#F0F2F3',

    alignItems: 'center',
  },
  phoneIcon: {
    height: RF(20),
    width: RF(20),
    marginHorizontal: RFP(2),
  },
  input_txt: {
    fontFamily: 'Inter-Medium',
    fontSize: RF(11),
marginLeft:RFP(2),
    width: '90%',
    alignSelf:'center'
  },
  SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
  borderRadius:RF(90),position:'absolute',bottom:RF(20)},
  SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
})