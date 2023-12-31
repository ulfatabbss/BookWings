import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface';

const ResetPassword = ({navigation}:GenericNavigation)  => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:RFP(2)}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

   
        <Image style={styles.backbtn} resizeMode='contain' source={require('../../assets/Images/CommonImages/backArrow.png')} />  
           </TouchableOpacity>

    </View>
    
<Text style={styles.MainHeading}>Change Password</Text>
<Text style={styles.SubHeading}>Please enter a new password!</Text>
<View style={styles.FormView}>
  
   
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter New Password' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter New Password' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>


</View>
<TouchableOpacity style={styles.SignUpbtn} >
    <Text style={styles.SignUpTxt}>Save Password</Text>

    </TouchableOpacity>

   </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    backbtn:{height:RF(22),width:RF(22)},
    fill:{width:'80%',height:RF(22)},
    MainHeading:{ fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(20),marginTop:RFP(2),color:'#000'},
    SubHeading:{fontSize:RF(12),fontFamily:'Inter-Regular',marginHorizontal:RF(20),marginTop:RFP(1),color:'#000'},
    FormView:{width:'90%',alignSelf:'center',marginTop:RFP(2),alignItems:'center'},
    inputView:{width:'100%',height:RF(48),borderRadius:RF(90),backgroundColor:'#f1f1f1',marginTop:RFP(1.5),justifyContent:'space-between',paddingHorizontal:RF(10),flexDirection:'row',},
    inputTxt:{fontSize:RF(12),fontFamily:'Inter-Medium',width:'80%',color:'#000'},
    hideTxt:{height:RF(20),width:RF(20),alignSelf:'center'},
    SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
    borderRadius:RF(90),position:'absolute',bottom:RF(20)},
    SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
})