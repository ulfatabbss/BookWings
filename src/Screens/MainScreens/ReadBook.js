import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import Pdf from 'react-native-pdf';
import {RF} from '../../Utilities/Responsive';
import {
  GooglePay,
  RequestDataType,
  AllowedCardNetworkType,
  AllowedCardAuthMethodsType,
} from 'react-native-google-pay';

const allowedCardNetworks: AllowedCardNetworkType[] = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods: AllowedCardAuthMethodsType[] = [
  'PAN_ONLY',
  'CRYPTOGRAM_3DS',
];
const ReadBook = ({route}) => {
  const {book} = route.params;
  const source = {
    uri: book,
    cache: true,
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
    }
  }, []);
  const directRequestData: RequestDataType = {
    cardPaymentMethod: {
      tokenizationSpecification: {
        type: 'DIRECT',
        publicKey:
          'BOdoXP+9Aq473SnGwg3JU1aiNpsd9vH2ognq4PtDtlLGa3Kj8TPf+jaQNPyDSkh3JUhiS0KyrrlWhAgNZKHYF2Y=',
      },
      allowedCardNetworks,
      allowedCardAuthMethods,
    },
    transaction: {
      totalPrice: '123',
      totalPriceStatus: 'FINAL',
      currencyCode: 'RUB',
    },
    merchantName: 'Example Merchant',
  };
  return (
    <View style={styles.container}>
      <View style={{height: RF(60), backgroundColor: 'blue'}}></View>
      <Pdf
        enablePaging={true}
        source={source}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default ReadBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - RF(100),
  },
});
