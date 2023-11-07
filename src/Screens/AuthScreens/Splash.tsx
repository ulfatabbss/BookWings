import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
   <SafeAreaView style={styles.MainView}>
    <Image style={{height:134,width:224,}} resizeMode='contain' source={require('../../assets/Images/Splash/MainLogo.png')} />
   
   </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    MainView:{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'},
})