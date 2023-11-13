import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'

const MyPlans = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'My Plans'} back='0' Edit='false' />
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
      </View>
      </SafeAreaView>
  )
}

export default MyPlans

const styles = StyleSheet.create({})