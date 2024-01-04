import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopTab from '../../Components/TopTab';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
const PaymentMethod = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e9e7ed'}}>
      <TopTab name={'Payment Method'} back="0" Edit="false" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <CreditCardInput />
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
