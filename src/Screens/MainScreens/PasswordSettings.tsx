import {  Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import { RF } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface'

const PasswordSettings = ({navigation}:GenericNavigation) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'Password Settings'} back='0' Edit='false' />
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
    <View
        style={[styles.V6]}>
            <TextInput
            style={{marginLeft:'5%',fontSize:RF(12),fontFamily:'Inter-Regular'}} placeholderTextColor={'gray'}
            placeholder='*********'></TextInput>
            <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')}>
            <Image
            style={[styles.img2]}
            resizeMode='contain'
            source={require('../../assets/Images/PasswordSettings/Edit.png')}/>

           

            </TouchableOpacity>
           

        </View>
      </View>
      </SafeAreaView>
  )
}

export default PasswordSettings

const styles = StyleSheet.create({
  V6:{
    height:45,
    width:'90%',
    alignSelf:'center',
    backgroundColor:'#f1f1f1',
    marginTop:'10%',
    borderRadius:20,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
},
img2:{
  height:16,width:16,marginRight:'5%'
}
})