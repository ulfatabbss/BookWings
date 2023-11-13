import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'
import { KeyboardAvoidingView, Platform } from 'react-native';


const EditProfile = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name='Edit Profile' back='0' Edit='false' />
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
             <ScrollView>
    <View style={{height:RFP(20), width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
   <Image style={{height:RF(104),width:RF(104),borderRadius:RF(100),}} resizeMode='contain' source={require('../../assets/Images/CommonImages/Logo.png')}/>
   <TouchableOpacity style={{height:RF(24),width:RF(24),justifyContent:'center',alignItems:'center',left:RF(34),bottom:RF(24)   ,backgroundColor:'#25105b',borderRadius:90}}>
<Image style={{height:RF(10.5),width:RF(10.5)}} resizeMode='contain' source={require('../../assets/Images/CommonImages/EditPen.png')} />
   </TouchableOpacity>

    </View>
    <View style={{width:'100%',height:'100%',backgroundColor:'#FFFF'}}>
       

      
        <View style={styles.ViewTextInput}>
            <TextInput style={styles.inputTxt} placeholder='Enter Name' placeholderTextColor={'gray'}  />
        </View>
        <View style={[styles.ViewTextInput,{marginTop:RFP(1)}]}>
            <TextInput style={styles.inputTxt} placeholder='Enter Email' placeholderTextColor={'gray'}  />
        </View>
        <View style={[styles.ViewTextInput,{marginTop:RFP(1)}]}>
            <TextInput style={styles.inputTxt} placeholder='Enter Phone' placeholderTextColor={'gray'}  />
        </View>
        <View style={[styles.ViewTextInput,{marginTop:RFP(1)}]}>
            <TextInput style={styles.inputTxt} placeholder='Enter Date' placeholderTextColor={'gray'}  />
        </View>
        <View style={[styles.ViewTextInput,{marginTop:RFP(1)}]}>
            <TextInput style={styles.inputTxt} placeholder='Enter Country' placeholderTextColor={'gray'}  />
        </View>
      

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    <TouchableOpacity style={styles.SignUpbtn} >
    <Text style={styles.SignUpTxt}>Save Changes</Text>

    </TouchableOpacity>

   </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    ViewTextInput  :{height:RF(50),width:'90%',alignSelf:'center',borderRadius:90, justifyContent:'center' ,backgroundColor:'#F1F1F1',marginTop:RFP(2)},
    inputTxt :{fontSize:RF(12),fontFamily:"Inter-Medium",color:'#000',width:'90%',alignSelf:'center'},
    SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
    borderRadius:RF(90),position:'absolute',bottom:RF(20)},
    SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
})