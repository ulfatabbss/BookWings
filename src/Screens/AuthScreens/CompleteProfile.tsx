import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface';
import { KeyboardAvoidingView, Platform } from 'react-native';

const CompleteProfile = ({navigation}:GenericNavigation) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
         <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:RFP(2)}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

   
        <Image style={styles.backbtn} resizeMode='contain' source={require('../../assets/Images/CommonImages/backArrow.png')} />  
           </TouchableOpacity>
        <Image style={styles.fill} resizeMode='contain' source={require('../../assets/Images/CompleteProfile/slider.png')} />

    </View>
    <ScrollView >
    
<Text style={styles.MainHeading}>Complete your Profile!</Text>
<Text style={styles.SubHeading}>Don’t worry, only you can see your personal data. No one else will be able to see it.</Text>



<View style={styles.FormView}>
    <Image style={styles.Logo} resizeMode='contain' source={require('../../assets/Images/CommonImages/Logo.png')} />
    <TouchableOpacity style={{height:RF(24),width:RF(24),justifyContent:'center',alignItems:'center',left:RF(34),bottom:RF(24)   ,backgroundColor:'#25105b',borderRadius:90}}>
<Image style={{height:RF(10.5),width:RF(10.5)}} resizeMode='contain' source={require('../../assets/Images/CommonImages/EditPen.png')} />
   </TouchableOpacity>



    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter your Name' placeholderTextColor={'gray'}></TextInput>
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter your Number' placeholderTextColor={'gray'}></TextInput>
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Date' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Language' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Country' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter your Address' placeholderTextColor={'gray'}></TextInput>
    </View>
   
</View>
</ScrollView>
</KeyboardAvoidingView>
<TouchableOpacity style={styles.SignUpbtn} onPress={()=>navigation.navigate('Userinfo01')}>
    <Text style={styles.SignUpTxt}>Continue</Text>

    </TouchableOpacity>
   
   </SafeAreaView>
  )
}

export default CompleteProfile

const styles = StyleSheet.create({
    backbtn:{height:RF(22),width:RF(22)},
    fill:{width:'80%',height:RF(22)},
    MainHeading:{ fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(20),marginTop:RFP(2),color:'#000'},
    SubHeading:{fontSize:RF(12),fontFamily:'Inter-Regular',marginHorizontal:RF(20),marginTop:RFP(1),color:'#000'},
    FormView:{width:'90%',alignSelf:'center',marginTop:RFP(4),alignItems:'center'},
    Logo:{height:RF(120),width:RF(120),borderRadius:RF(90)},
    inputView:{width:'100%',height:RF(48),borderRadius:RF(90),backgroundColor:'#f1f1f1',marginTop:RFP(1.5),justifyContent:'space-between',paddingHorizontal:RF(10),flexDirection:'row',},
    inputTxt:{fontSize:RF(12),fontFamily:'Inter-Medium',width:'80%',color:'#000'},
    hideTxt:{height:RF(20),width:RF(20),alignSelf:'center'},
    belowinputView:{flexDirection:'row',marginTop:RFP(1.5),alignSelf:'flex-start',marginHorizontal:RF(5)},
    checkbox:{height:RF(14),width:RF(14),},
    checkbtnTxt:{fontSize:RF(10),fontFamily:'Inter-Regular',marginLeft:RF(5),color:"#000"},
    SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
    borderRadius:RF(90),position:'absolute',bottom:RF(20)},
    SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
})