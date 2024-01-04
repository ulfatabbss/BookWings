import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Pdf from 'react-native-pdf';
import {RF} from '../../Utilities/Responsive';
import TopTab from '../../Components/TopTab';

const ReadBook = ({route}) => {
  const {book} = route.params;
  const source = {
    uri: book,
    cache: true,
  };
  return (
    <View style={styles.container}>
      <TopTab name={'Book Detail'} back="0" Edit="false" />
      <Pdf
        enablePaging={true}
        source={source}
        trustAllCerts={false}
        // singlePage={true}
        maxScale={3.0}
        spacing={20}
        horizontal
        // page={2}
        renderActivityIndicator={() => (
          <ActivityIndicator color={'#3F51B5'} size={'large'} />
        )}
        fitWidth={true}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    width: Dimensions.get('window').width - RF(20),
    height: Dimensions.get('window').height - RF(100),
  },
});
