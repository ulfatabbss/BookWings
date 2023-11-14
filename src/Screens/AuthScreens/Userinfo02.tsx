import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface';

const Userinfo02 =  ({navigation}:GenericNavigation) => {
  const [optionSelect,setOptionSelect]=useState<string>('14-17');
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    <View style={styles.backArrowView}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

   
        <Image style={styles.backbtn} resizeMode='contain' source={require('../../assets/Images/CommonImages/backArrow.png')} />  
           </TouchableOpacity>
        <Image style={styles.fill} resizeMode='contain' source={require('../../assets/Images/Userinfo02/slider.png')} />

    </View>
    
<Text style={styles.MainHeading}>Choose your Age!</Text>
<Text style={styles.SubHeading}>Select Gender for better content.</Text>
<View style={styles.AgeContainer}>
  <View style={styles.AgeSubContainer}>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='14-17'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('14-17')}>
      <Text style={styles.ageTxt}>14 - 17</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='18-24'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('18-24')}>
      <Text style={styles.ageTxt}>18 - 24</Text>
    </TouchableOpacity>
  
    
  </View>
  <View style={styles.AgeSubContainer}>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='25-29'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('25-29')}>
      <Text style={styles.ageTxt}>25 - 29</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='30-34'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('30-34')}>
      <Text style={styles.ageTxt}>30 - 34</Text>
    </TouchableOpacity>
  
    
  </View>
  <View style={styles.AgeSubContainer}>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='35-39'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('35-39')}>
      <Text style={styles.ageTxt}>35 - 39</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='40-44'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('40-44')}>
      <Text style={styles.ageTxt}>40 - 44</Text>
    </TouchableOpacity>
  
    
  </View>
  <View style={styles.AgeSubContainer}>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='45-49'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('45-49')}>
      <Text style={styles.ageTxt}>45 - 49</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.singleAgeCotainer,{backgroundColor:optionSelect=='50+'?'#3F51B5':undefined}]} onPress={()=>setOptionSelect('50+')}>
      <Text style={styles.ageTxt}>{'> 50'}</Text>
    </TouchableOpacity>
  
    
  </View>

</View>

<TouchableOpacity style={styles.SignUpbtn} onPress={()=>navigation.navigate('Userinfo03')}>
    <Text style={styles.SignUpTxt}>Continue</Text>

    </TouchableOpacity>

   </SafeAreaView>
  )
}

export default Userinfo02

const styles = StyleSheet.create({
  backArrowView:{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:RFP(2)},
  backbtn:{height:RF(22),width:RF(22)},
  fill:{width:'80%',height:RF(22)},
  MainHeading:{ fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(20),marginTop:RFP(2),color:'#000'},
  SubHeading:{fontSize:RF(12),fontFamily:'Inter-Regular',marginHorizontal:RF(20),marginTop:RFP(1),color:'#000'},
  SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
  borderRadius:RF(90),position:'absolute',bottom:RF(20)},
  SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},
  AgeContainer:{width:'90%',alignSelf:'center',marginTop:RFP(2) },
  AgeSubContainer:{ flexDirection:'row',justifyContent:'space-between',marginTop:RFP(1)},
  ageTxt:{ fontSize:RF(14),fontFamily:'Inter-Medium',color:'#000'},
  singleAgeCotainer:{height:RF(40),width:'45%',borderRadius:RF(90),borderWidth:0.5,borderColor:'gray',justifyContent:'center',alignItems:'center'}
})