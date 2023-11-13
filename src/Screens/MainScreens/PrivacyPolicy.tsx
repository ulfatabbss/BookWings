import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'Privacy Policy'} back='0' Edit='false'/>
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
    <View style={[styles.txt_Container]}>
          <Text style={[styles.text, ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas pulvinar bibendum magna
          </Text>
        </View>
        <View style={[styles.txt_Container]}>
          <Text style={[styles.text]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pulvinar bibendum magna magna Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pecenas pulvinar bibendum magna Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar
            bibendum magna magna Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas pulvinar bibendum magna
          </Text>
        </View>
        <View style={[styles.txt_Container]}>
          <Text style={[styles.text]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pulvinar bibendum magna magna Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pecenas pulvinar bibendum magna Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={[styles.txt_Container]}>
          <Text style={[styles.text]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pulvinar bibendum magna magna Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>
      </SafeAreaView>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
  txt_Container: {
    width: '90%',
    alignSelf: 'center',

    marginTop: RFP(2),
  },
  text: {
    fontSize: RF(13.5),
    fontFamily: 'Inter-Light',
  },
})