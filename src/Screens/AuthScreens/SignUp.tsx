import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface';

const SignUp = ({navigation}:GenericNavigation) => {
    const [selected, setSelected] = useState<boolean>(false);
    const Checkbtn =()=>{
        if(selected){
            setSelected(false)

        }else{setSelected(true)}

        

    }
  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:RFP(2)}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

   
        <Image style={styles.backbtn} resizeMode='contain' source={require('../../assets/Images/CommonImages/backArrow.png')} />  
           </TouchableOpacity>
        <Image style={styles.fill} resizeMode='contain' source={require('../../assets/Images/SignUp/fill.png')} />

    </View>
    
<Text style={styles.MainHeading}>Create an Account!</Text>
<Text style={styles.SubHeading}>Enter your username, email & Password. If you forget it, then you can choose forgot password.</Text>
<View style={styles.FormView}>
    <Image style={styles.Logo} resizeMode='contain' source={require('../../assets/Images/SignUp/Logo.png')} />
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter your Email' placeholderTextColor={'gray'}></TextInput>
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter New Password' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>
    <View style={styles.inputView}>
<TextInput style={styles.inputTxt} placeholder='Enter New Password' placeholderTextColor={'gray'}></TextInput>
<Image style={styles.hideTxt} resizeMode='contain' source={require('../../assets/Images/SignUp/hide.png')} />
    </View>
    <View style={styles.belowinputView}>
    <TouchableOpacity onPress={Checkbtn}>

   
    <Image style={styles.checkbox} resizeMode='contain' source={selected?require('../../assets/Images/SignUp/check.png'):require('../../assets/Images/SignUp/emptycheck.png')} />
    </TouchableOpacity>
    <Text style={styles.checkbtnTxt}>Remember me</Text>

</View>

</View>
<TouchableOpacity style={styles.SignUpbtn} onPress={()=>navigation.navigate('OTP')}>
    <Text style={styles.SignUpTxt}>Sign Up</Text>

    </TouchableOpacity>

   </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    backbtn:{height:RF(22),width:RF(22)},
    fill:{width:'80%',height:RF(22)},
    MainHeading:{ fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(20),marginTop:RFP(2),color:'#000'},
    SubHeading:{fontSize:RF(12),fontFamily:'Inter-Regular',marginHorizontal:RF(20),marginTop:RFP(1),color:'#000'},
    FormView:{width:'90%',alignSelf:'center',marginTop:RFP(4),alignItems:'center'},
    Logo:{height:RF(120),width:RF(120),borderRadius:RF(90)},
    inputView:{width:'100%',height:RF(48),borderRadius:RF(90),backgroundColor:'#f1f1f1',marginTop:RFP(1.5),justifyContent:'space-between',paddingHorizontal:RF(10),flexDirection:'row',},
    inputTxt:{fontSize:RF(12),fontFamily:'Inter-Medium',width:'80%'},
    hideTxt:{height:RF(20),width:RF(20),alignSelf:'center'},
    belowinputView:{flexDirection:'row',marginTop:RFP(1.5),alignSelf:'flex-start',marginHorizontal:RF(5)},
    checkbox:{height:RF(14),width:RF(14),},
    checkbtnTxt:{fontSize:RF(10),fontFamily:'Inter-Regular',marginLeft:RF(5),color:"#000"},
    SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
    borderRadius:RF(90),position:'absolute',bottom:RF(20)},
    SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},


})