import {  Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface'

const ChangePassword = ({navigation}:GenericNavigation) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'Password Settings'} back='0' Edit='false' />
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
        <View style={{width:'85%',alignSelf:'center',marginTop:RFP(2)}}>
            <Text style={{fontSize:RF(14), fontFamily:'Inter-Bold'}}>Reset Password</Text>
            <Text style={{fontSize:RF(12), fontFamily:'Inter-Regular',marginTop:RFP(1),color:"#313131"}}>Please enter your email to request a password reset!</Text>



        </View>
    <View style={[styles.V6]}>      
            <TextInput
            style={{marginLeft:'5%',fontSize:RF(12),fontFamily:'Inter-Regular'}} placeholderTextColor={'gray'}
            placeholder='Enter Your Email'></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.SignUpbtn} >
    <Text style={[styles.SignUpTxt]}>Send OTP!</Text>

    </TouchableOpacity>
      </SafeAreaView>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    V6:{
        height:RF(40),
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#f1f1f1',
        marginTop:RFP(2),
        borderRadius:RF(20),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
    borderRadius:RF(90),position:'absolute',bottom:RF(20)},
    SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
   
})