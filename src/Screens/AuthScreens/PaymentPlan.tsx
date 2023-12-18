import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RF, RFP} from '../../Utilities/Responsive';
import {GenericNavigation} from '../../shared/type/interface';
import {store} from '../../Redux/Store';
import {setLogin} from '../../Redux/Reducers/userReducer';
import {Get_All_Plans} from '../../services/AuthServices';
import {useSelector} from 'react-redux';

const PaymentData = [
  {
    month: 'free',
    Price: '0',
    clr: '#009688',
    bg: '#e6f5f3',
  },
  {
    month: '1 Month',
    Price: '7.29',
    clr: '#009688',
    bg: '#e6f5f3',
  },
  {
    month: '3 Months',
    Price: '16.93',
    clr: '#009688',
    bg: '#e6f5f3',
  },
  {
    month: '6 Months',
    Price: '35.68',
    clr: '#009688',
    bg: '#e6f5f3',
  },
  {
    month: '9 Months',
    Price: '65.28',
    clr: '#009688',
    bg: '#e6f5f3',
  },
  {
    month: '12 Months',
    Price: '95.85',
    clr: '#009688',
    bg: '#e6f5f3',
  },
];

const PaymentPlan = ({navigation}: GenericNavigation) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {userToken} = useSelector((state: any) => state.root.user);

  useEffect(() => {
    console.log(userToken, 'yxeygyugeyueuge');

    const handlePlans = async (values: any) => {
      try {
        const response = await Get_All_Plans(userToken);
        console.log(response.data);
      } catch (error) {
        if (error.message === 'Network Error') {
          Alert.alert('⚠️ Check your internet connection and try again .....!');
        } else {
          Alert.alert('⚠️ An error occurred. Please try again later.');
        }
      } finally {
        //   setIsLoading(false);
      }
    };
    handlePlans();
    const timer = setTimeout(() => {
      setModalVisible(false);

      // store.dispatch(setLogin(true));
    }, 3000); // Adjust the timeout duration (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, [modalVisible]);
  const PaymentFlatList = ({
    item,
  }: {
    item: {month: string; Price: String; clr: string; bg: string};
  }) => (
    <View
      style={{
        height: RF(124),
        width: '98%',
        alignSelf: 'center',
        borderRadius: RF(10),
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 3,
          },
          android: {
            elevation: 5, // Use elevation for Android
          },
        }),
        backgroundColor: '#fff',
        marginVertical: RFP(1),
      }}>
      <View style={[styles.PriceTagView, {backgroundColor: item.bg}]}>
        <Text style={[styles.MonthTxt, {color: item.clr}]}>{item.month}</Text>
      </View>
      <Text style={styles.PriceTxt}>{'$' + item.Price}</Text>
      <View style={styles.MainSubmitView}>
        {item.Price == '0' ? undefined : (
          <View style={styles.InputSubmitView}>
            <TextInput
              style={styles.inputTxt}
              placeholder="Purpose your price!"
              placeholderTextColor={'gray'}
            />
          </View>
        )}
        <TouchableOpacity
          style={[
            styles.TouchableSubmit,
            {width: item.Price == '0' ? '100%' : '30%'},
          ]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.SubmitTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const handleSubmit = () => {
    store.dispatch(setLogin(true));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e9e7ed'}}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              resizeMode="contain"
              style={{height: '60%', width: '100%'}}
              source={require('../../assets/signupmobile.png')}
            />
            <Text
              style={{
                fontSize: RF(22),
                color: '#3F51B5',
                marginVertical: RF(10),
              }}>
              Submit Successful!
            </Text>
            <Text
              style={{color: 'black', textAlign: 'center', fontSize: RF(14)}}>
              Your request has been sent to the admin. Once it's approved,
              you'll gain access to the app.
            </Text>
          </View>
        </View>
      </Modal>
      <View style={styles.Toptab}>
        <Text style={styles.MainHeadiing}>Pricing Plan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.RegularTxt}>
          Choose a plan or propose your price for negotiation.
        </Text>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <FlatList renderItem={PaymentFlatList} data={PaymentData} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentPlan;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: '100%',
    backgroundColor: 'rgb(255,255,255)',
  },
  Toptab: {height: RFP(10), justifyContent: 'center'},
  MainHeadiing: {
    fontSize: RF(16),
    fontFamily: 'Inter-SemiBold',
    marginLeft: RFP(2),
    color: '#313131',
  },
  RegularTxt: {
    fontSize: RF(14),
    fontFamily: 'Inter-Regular',
    margin: RFP(2),
    color: '#313131',
  },
  MonthTxt: {fontSize: RF(8), fontFamily: 'Inter-SemiBold', color: '#000'},
  PriceTxt: {
    fontSize: RF(22),
    fontFamily: 'Inter-SemiBold',
    marginLeft: RF(15),
    color: '#3F51B5',
  },
  SubmitTxt: {fontSize: RF(10), fontFamily: 'Inter-SemiBold', color: '#fff'},
  TouchableSubmit: {
    height: '100%',
    width: '30%',
    backgroundColor: '#3F51B5',
    borderRadius: RF(90),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTxt: {
    width: '90%',
    height: '100%',
    fontSize: RF(8),
    fontFamily: 'Inter-Medium',
    color: '#000',
  },
  InputSubmitView: {
    height: '100%',
    width: '65%',
    backgroundColor: '#f1f1f1',
    borderRadius: RF(90),
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainSubmitView: {
    height: RF(30),
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: RFP(2),
    flexDirection: 'row',
  },
  PriceTagView: {
    height: RF(22),
    padding: RF(3),
    alignItems: 'center',
    borderRadius: RF(10),
    justifyContent: 'center',
    backgroundColor: '#e6f5f3',
    margin: RF(10),
    width: RF(60),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    height: '60%',
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
