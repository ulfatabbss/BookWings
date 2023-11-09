import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RF, RFP } from '../../Utilities/Responsive'

const Favorites = () => {
  return (
   <SafeAreaView style={styles.safeArea}>
    <View style={styles.TopTab}>
        <View style={styles.TopTabContainer}>
          {/* <Image style={styles.LogoImg} resizeMode='contain' source={require('../../assets/Images/Homee/Logo.png')} /> */}
          <Text style={styles.LogoTxt}>Favorites</Text>
        </View>
      </View>
      <View style={styles.BelowTopTabView}>

      </View>
   </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  safeArea:{flex:1,backgroundColor:'#e9e7ed'},
  TopTab:{height:RFP(10),backgroundColor:'#e9e7ed',padding:RF(20),flexDirection:'row',justifyContent:'space-between'},
  TopTabContainer:{flexDirection:'row',alignItems:'center'},
  LogoImg:{height:RF(26),width:RF(44)},
  LogoTxt:{fontSize:RF(18),fontFamily:'Inter-SemiBold',marginLeft:RFP(1)},
  BelowTopTabView:{height:'100%',width:'100%',backgroundColor:'#FFF'},
})