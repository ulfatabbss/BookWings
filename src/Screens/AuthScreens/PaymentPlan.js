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
import {store} from '../../Redux/Store';
import {setLogin} from '../../Redux/Reducers/userReducer';
import {Get_All_Plans, Post_plan} from '../../services/AuthServices';
import {useSelector} from 'react-redux';
import {BallIndicator} from 'react-native-indicators';

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

const PaymentPlan = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {userToken} = useSelector(state => state.root.user);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlePlans = async () => {
      setLoading(true);
      try {
        const response = await Get_All_Plans(userToken);
        // console.log(response?.data?.plans);
        setPlans(response?.data?.plans);
      } catch (error) {
        if (error.message === 'Network Error') {
          Alert.alert('⚠️ Check your internet connection and try again .....!');
        } else {
          Alert.alert('⚠️ An error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
    handlePlans();
  }, []);
  const PaymentFlatList = ({item}) => (
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
      <View style={styles.PriceTagView}>
        <Text style={[styles.MonthTxt, {color: '#009688'}]}>{item.name}</Text>
      </View>
      <Text style={styles.PriceTxt}>{'$' + item.price}</Text>
      <View style={styles.MainSubmitView}>
        {item.price == '0' ? undefined : (
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
            {width: item.price == '0' ? '100%' : '30%'},
          ]}
          onPress={() => handleSubmit()}>
          <Text style={styles.SubmitTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const obj = '';
      const response = await Post_plan(userToken, obj);
      // setModalVisible(!modalVisible)
      console.log(response?.data, 'vgbhbhbhbhbhhbh');
      // const timer = setTimeout(() => {
      //   setModalVisible(false);
      //   // store.dispatch(setLogin(true));
      // }, 3000); // Adjust the timeout duration (in milliseconds) as needed
      // return () => clearTimeout(timer);
    } catch (error) {
      if (error.message === 'Network Error') {
        Alert.alert('⚠️ Check your internet connection and try again .....!');
      } else {
        Alert.alert('⚠️ An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <BallIndicator color={'#3F51B5'} />;
  }
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
        <View
          style={{width: '90%', alignSelf: 'center', paddingBottom: RF(70)}}>
          <FlatList renderItem={PaymentFlatList} data={plans} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: RF(5),
    alignItems: 'center',
    borderRadius: RF(100),
    justifyContent: 'center',
    backgroundColor: '#e6f5f3',
    margin: RF(10),
    width: RFP(15),
    // backgroundColor: '#009688',
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
