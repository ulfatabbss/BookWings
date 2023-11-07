import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface';

const Userinfo01 =  ({navigation}:GenericNavigation) => {
  const [optionSelect,setOptionSelect]=useState<string>('Male');
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    <View style={styles.backArrowView}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

   
        <Image style={styles.backbtn} resizeMode='contain' source={require('../../assets/Images/CommonImages/backArrow.png')} />  
           </TouchableOpacity>
        <Image style={styles.fill} resizeMode='contain' source={require('../../assets/Images/Userinfo01/slider.png')} />

    </View>
    
<Text style={styles.MainHeading}>What is your Gender?</Text>
<Text style={styles.SubHeading}>Select Gender for better content.</Text>


<View style={styles.Container}>
  <TouchableOpacity style={styles.subContainer} onPress={()=>setOptionSelect('Male')}>
    <Image style={styles.selectedImg} resizeMode='contain' source={optionSelect=='Male'?require('../../assets/Images/Userinfo01/fill.png'):require('../../assets/Images/Userinfo01/unfill.png')}/>
    <Text style={styles.ListTxt}>I am Male</Text>

  </TouchableOpacity>
  <TouchableOpacity style={styles.subContainer} onPress={()=>setOptionSelect('Female')}>
    <Image style={styles.selectedImg} resizeMode='contain' source={optionSelect=='Female'?require('../../assets/Images/Userinfo01/fill.png'):require('../../assets/Images/Userinfo01/unfill.png')}/>
    <Text style={styles.ListTxt}>I am Female</Text>

  </TouchableOpacity>
  <TouchableOpacity style={styles.subContainer} onPress={()=>setOptionSelect('not Define')}>
    <Image style={styles.selectedImg} resizeMode='contain' source={optionSelect=='not Define'?require('../../assets/Images/Userinfo01/fill.png'):require('../../assets/Images/Userinfo01/unfill.png')}/>
    <Text style={styles.ListTxt}>Rather not to say</Text>

  </TouchableOpacity>

  
</View>




<TouchableOpacity style={styles.SignUpbtn} onPress={()=>navigation.navigate('Userinfo02')}>
    <Text style={styles.SignUpTxt}>Continue</Text>

    </TouchableOpacity>

   </SafeAreaView>
  )
}

export default Userinfo01

const styles = StyleSheet.create({
    backArrowView:{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:RFP(2)},
    backbtn:{height:RF(22),width:RF(22)},
    fill:{width:'80%',height:RF(22)},
    MainHeading:{ fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(20),marginTop:RFP(2),color:'#000'},
    SubHeading:{fontSize:RF(12),fontFamily:'Inter-Regular',marginHorizontal:RF(20),marginTop:RFP(1),color:'#000'},
    SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
    borderRadius:RF(90),position:'absolute',bottom:RF(20)},
    SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
    Container:{width:'100%',marginTop:RFP(2),},
    subContainer:{height:RF(30),width:'90%',alignSelf:'center',flexDirection:'row',marginVertical:RFP(1),alignItems:'center',borderBottomWidth:0.5,borderColor:'gray',},
    selectedImg:{height:RF(20),width:RF(20)},
    ListTxt:{fontSize:RF(12),fontFamily:'Inter-Regular',marginLeft:RFP(1)}
})