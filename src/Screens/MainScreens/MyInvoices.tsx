import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'

const MyInvoices = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'My Invoices'} back='0' Edit='false' />
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
      </View>
      </SafeAreaView>
  )
}

export default MyInvoices

const styles = StyleSheet.create({})