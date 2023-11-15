import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RF, RFP} from '../../Utilities/Responsive';
import {GenericNavigation} from '../../shared/type/interface';
import {store} from '../../Redux/Store';
import {setOtpRoute} from '../../Redux/Reducers/userReducer';
import {useDispatch} from 'react-redux';

const GetStarted = ({navigation}: GenericNavigation) => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(setOtpRoute('SignIn')) && navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    dispatch(setOtpRoute('SignUp')) && navigation.navigate('SignUp');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <Image
        style={{height: RFP(65), width: '100%'}}
        // resizeMode="cover"
        source={require('../../assets/Images/GetStarted/imageBackground.png')}
      />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: RFP(2),
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.mainTxt, {color: '#000'}]}>Welcome to </Text>
          <Text style={styles.mainTxt}>BookWing!</Text>
        </View>
        <Text style={styles.subHeading}>
          The Number One Best Ebook Reader Application in the Century.!
        </Text>
      </View>
      <TouchableOpacity style={styles.GetStartedbtn} onPress={handleSignUp}>
        <Text style={styles.GetStartedbtnTxt}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.GetStartedbtn,
          {marginTop: RFP(1), backgroundColor: '#e6f5f3'},
        ]}
        onPress={handleSignIn}>
        <Text style={styles.btnTxt}>I Already have an Account</Text>
      </TouchableOpacity>
      <View style={styles.socialViewbtn}>
        <TouchableOpacity style={styles.socialbtn}>
          <Image
            style={styles.socialbtnImg}
            resizeMode="contain"
            source={require('../../assets/Images/GetStarted/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialbtn}>
          <Image
            style={styles.socialbtnImg}
            resizeMode="contain"
            source={require('../../assets/Images/GetStarted/apple.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  GetStartedbtn: {
    height: RF(48),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: RF(90),
    marginTop: RFP(5),
  },
  mainTxt: {fontSize: RF(18), fontFamily: 'Inter-Bold', color: '#3F51B5'},
  subHeading: {
    fontSize: RF(12),
    fontFamily: 'Inter-Regular',
    color: '#000',
    textAlign: 'center',
    marginTop: RFP(1.5),
    width: '90%',
  },
  GetStartedbtnTxt: {
    fontSize: RF(14),
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  btnTxt: {fontSize: RF(12), fontFamily: 'Inter-Medium', color: '#009688'},
  socialViewbtn: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: RFP(1),
  },
  socialbtn: {
    height: RF(40),
    width: '45%',
    backgroundColor: '#F1F1F1',
    borderRadius: RF(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialbtnImg: {height: RF(28), width: RF(28)},
});
