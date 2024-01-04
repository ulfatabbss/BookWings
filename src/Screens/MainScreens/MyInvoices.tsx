import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {GetInvoices} from '../../services/AuthServices';
import TopTab from '../../Components/TopTab';
// import PayPal from 'react-native-paypal';
interface MyInvoicesProps {
  navigation: any;
}

const MyInvoices: React.FC<MyInvoicesProps> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [invoicesData, setInvoicesData] = useState<any[]>([]); // Replace 'any' with the proper type for your invoice data

  const {userToken} = useSelector((state: any) => state.root.user); // Replace 'any' with the proper state type

  useEffect(() => {
    // handlePayment();
    handleInvoices();
  }, []);

  // const handlePayPalPayment = async () => {
  //   try {
  //     const payment = await PayPal.initialize({
  //       clientId: 'YOUR_CLIENT_ID',
  //       environment: PayPal.SANDBOX,
  //     }).then(() =>
  //       PayPal.requestOneTimePayment('PAYPAL_CLIENT_ID', {
  //         amount: '10.00',
  //         currency: 'USD',
  //       }),
  //     );

  //     // Send payment.response.id to your server
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handlePayment = async () => {
  //   const pay = await PayPal.requestOneTimePayment(
  //     'AbiEbcBcAz_DjKYzx6oj1oR57gMwcJc-o9P9detfBAY89KwI_zobH3uxv8QByKRRW4CxpSmNft4y58be',
  //     {
  //       amount: '10.00',
  //       currency: 'USD',
  //     },
  //   );
  //   console.log(pay, 'helooooo');
  // };
  const handleInvoices = async () => {
    setLoading(true);

    try {
      const response = await GetInvoices(userToken);
      console.log(response.data.invoice);

      setInvoicesData(response.data.invoice);
    } catch (error) {
      if ((error as any)?.message === 'Network Error') {
        Alert.alert('⚠️ Check your internet connection and try again .....!');
      } else {
        Alert.alert('⚠️ An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e9e7ed'}}>
      <TopTab name={'My Invoices'} back="0" Edit="false" />
      <FlatList
        data={invoicesData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 150,
                width: '90%',
                borderRadius: 20,
                alignSelf: 'center',
                marginVertical: 10,
                padding: 15,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#3F51B5',
                  alignSelf: 'flex-start',
                  fontFamily: 'Inter-Medium',
                }}>{`$${item.invoice_amount}`}</Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: '100%',
                  backgroundColor: 'green',
                  borderRadius: 40,
                  position: 'absolute',
                  bottom: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    alignSelf: 'center',
                    fontFamily: 'Inter-Medium',
                  }}>
                  View Invoice
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MyInvoices;

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 50,
  },
});
