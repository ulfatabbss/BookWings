import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import OTPTextView from 'react-native-otp-textinput';
import { GenericNavigation } from '../../shared/type/interface';
import { RF, RFP } from '../../Utilities/Responsive';
import { useSelector } from 'react-redux';
import { Account_Verification } from '../../services/AuthServices';

const OTP = ({ navigation }) => {
  const { otpRoute } = useSelector((state) => state.root.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        setIsResendEnabled(true); // Enable the button when the timer expires
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleResendOTP = () => {
    setIsResendEnabled(false); // Disable the button after resending
    setSeconds(30); // Reset the timer
  };
  const handleTextChange = (text) => {
    setOtp(text);
    if (text.length === 4) {
      console.log(otp);
    }
  };
  const handleOTP = async () => {

    try {
      const response = await Account_Verification(otp);
      console.log(response.data);
      if (response.status == 200) {
        navigation.navigate('CompleteProfile');
      }
    } catch (error) {
      if (error.message === 'Network Error') {
        Alert.alert('⚠️ Check your internet connection and try again .....!');
      } else {
        Alert.alert('⚠️ An error occurred. Please try again later.');
      }

    } finally {
      //   setIsLoading(false);
    }

    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: `http://mbapp.mediasols.xyz/api/account/verify/${otp}`,
    //   headers: {},
    // };
    // axios
    //   .request(config)
    //   .then(response => {
    //     setModalVisible(!modalVisible);
    //     const timer = setTimeout(() => {
    //       setModalVisible(false);
    //       otpRoute == 'SignIn'
    //         ? navigation.navigate('ResetPassword')
    //         : navigation.navigate('CompleteProfile');
    //     }, 3000); // Adjust the timeout duration (in milliseconds) as needed

    //     return () => clearTimeout(timer);
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              resizeMode="contain"
              style={{ height: '60%', width: '100%' }}
              source={require('../../assets/signupmobile.png')}
            />
            <Text
              style={{
                fontSize: RF(22),
                color: '#3F51B5',
                marginVertical: RF(10),
              }}>
              Sign Up Successful!
            </Text>
            <Text
              style={{ color: 'black', textAlign: 'center', fontSize: RF(14) }}>
              Your Account has been created. Please wait a moment, we are
              preparing for you...
            </Text>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={[styles.V1]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.goBack]}
            resizeMode="contain"
            source={require('../../assets/Images/CommonImages/backArrow.png')}
          />
        </TouchableOpacity>

        <Image
          style={{ height: '40%', width: '90%', alignSelf: 'center' }}
          resizeMode="stretch"
          source={require('../../assets/Images/OTP/OTP.png')}></Image>
        <Text style={[styles.Head_txt]}>Hi there!</Text>
        <Text style={[styles.sub_heading_txt]}>
          Please enter the 4 digit OTP we just sent on Phone Number!
        </Text>

        <OTPTextView
          containerStyle={styles.OTP_View}
          textInputStyle={styles.OTP_txt}
          tintColor={'black'}
          handleTextChange={handleTextChange}
          autoFocus={true}
          keyboardType="default"></OTPTextView>

        <View style={styles.V5}>
          <TouchableOpacity
            // style={styles.resendButton}
            onPress={handleResendOTP}
            disabled={!isResendEnabled}>
            <Text
              style={[
                styles.smalltxt,
                { color: isResendEnabled ? '#000' : 'gray' },
              ]}>
              Re-send OTP
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.smalltxt, { marginRight: '2%' }]}>
              {'Time: '}
            </Text>
            <Text style={[styles.smalltxt, { color: '#EAAE23' }]}>{`00:${seconds < 10 ? `0${seconds}` : seconds
              } sec`}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.button_View,
            { backgroundColor: otp.length != 4 ? 'gray' : '#3F51B5' },
          ]}
          disabled={otp.length != 4}
          onPress={handleOTP}>
          <Text style={styles.btn_txt}>Confirm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  smalltxt: { fontSize: RF(11), fontFamily: 'Inter-Medium' },
  goBack: {
    height: RF(20),
    width: RF(20),
    marginLeft: RFP(2),
    marginTop: RFP(2),
  },
  sub_heading_txt: {
    fontSize: RF(11),
    marginTop: '2%',
    fontFamily: 'Inter-Medium',
    width: '90%',
    alignSelf: 'center',
  },
  V1: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  V2: {
    flexDirection: 'row',
    marginTop: '5%',
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  img1: {
    height: 25,
    width: 20,
    alignSelf: 'center',
  },
  V3: {
    flexDirection: 'row',
    width: '90%',
    height: 55,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '5%',
  },
  V4: {
    height: '20%',
    width: '20%',
    backgroundColor: '#F0F2F3',
    borderRadius: RF(10),
    flexDirection: 'row',
  },
  V5: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: '7%',
    justifyContent: 'space-between',
  },
  button_View: {
    height: RF(48),
    width: '90%',
    alignSelf: 'center',

    flexDirection: 'row',
    borderRadius: RF(25),
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: RF(20),
  },
  Head_txt: { fontSize: RF(20), fontFamily: 'Inter-Bold', marginLeft: '5%' },
  btn_txt: { fontFamily: 'Inter-Bold', fontSize: RF(14), color: 'white' },
  OTP_View: {
    height: RF(50),
    width: '90%',
    alignSelf: 'center',
    marginVertical: RFP(5),
  },
  OTP_txt: {
    height: '100%',
    width: RF(50),
    fontSize: RF(12),
    fontWeight: '500',
    backgroundColor: '#F0F2F3',
    borderRadius: RF(10),
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
