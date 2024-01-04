import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
const PaymentMethod = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#e9e7ed'}}>
      <CreditCardInput />
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
