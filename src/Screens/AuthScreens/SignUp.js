import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RF, RFP} from '../../Utilities/Responsive';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Register} from '../../services/AuthServices';
import {store} from '../../Redux/Store';
import {setLogin, setUserToken} from '../../Redux/Reducers/userReducer';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  const {otpRoute} = useSelector(state => state.root.user);

  useEffect(() => {
    console.log(otpRoute);
  }, []);

  const Checkbtn = () => {
    setSelected(prevSelected => !prevSelected);
  };

  const handleSignUp = async values => {
    try {
      // console.log(values);
      const obj = {
        name: values.name,
        email: values.email,
        password: values.password,
        c_password: values.confirmPassword,
      };
      const response = await Register(obj);
      if (response.status == 200) {
        navigation.navigate('OTP', {code: response?.data?.success?.code});
        store.dispatch(setUserToken(response?.data?.success?.token));
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: '', name: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formView}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require('../../assets/Images/SignUp/Logo.png')}
            />

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputTxt}
                placeholder="Enter your name"
                placeholderTextColor={'gray'}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputTxt}
                placeholder="Enter your Email"
                placeholderTextColor={'gray'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputTxt}
                placeholder="Enter New Password"
                placeholderTextColor={'gray'}
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Image
                style={styles.hideTxt}
                resizeMode="contain"
                source={require('../../assets/Images/SignUp/hide.png')}
              />
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputTxt}
                placeholder="Confirm Password"
                placeholderTextColor={'gray'}
                secureTextEntry
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              <Image
                style={styles.hideTxt}
                resizeMode="contain"
                source={require('../../assets/Images/SignUp/hide.png')}
              />
            </View>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <View style={styles.belowinputView}>
              <TouchableOpacity onPress={Checkbtn}>
                <Image
                  style={styles.checkbox}
                  resizeMode="contain"
                  source={
                    selected
                      ? require('../../assets/Images/SignUp/check.png')
                      : require('../../assets/Images/SignUp/emptycheck.png')
                  }
                />
              </TouchableOpacity>
              <Text style={styles.checkbtnTxt}>Remember me</Text>
            </View>

            <TouchableOpacity style={styles.signUpBtn} onPress={handleSubmit}>
              <Text style={styles.signUpTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  header: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: RFP(2),
  },
  backbtn: {height: RF(22), width: RF(22)},
  fill: {width: '90%', height: RF(22)},
  mainHeading: {
    fontSize: RF(16),
    fontFamily: 'Inter-SemiBold',
    marginLeft: RF(20),
    marginTop: RFP(2),
    color: '#000',
  },
  subHeading: {
    fontSize: RF(12),
    fontFamily: 'Inter-Regular',
    marginHorizontal: RF(20),
    marginTop: RFP(1),
    color: '#000',
  },
  formView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: RFP(4),
    alignItems: 'center',
  },
  logo: {
    height: RF(120),
    width: RF(120),
    borderRadius: RF(90),
    marginTop: RF(50),
  },
  inputView: {
    width: '100%',
    height: RF(48),
    borderRadius: RF(90),
    backgroundColor: '#f1f1f1',
    marginTop: RFP(1.5),
    justifyContent: 'space-between',
    paddingHorizontal: RF(10),
    flexDirection: 'row',
  },
  inputTxt: {
    fontSize: RF(12),
    fontFamily: 'Inter-Medium',
    width: '80%',
    color: '#000',
  },
  hideTxt: {height: RF(20), width: RF(20), alignSelf: 'center'},
  belowinputView: {
    flexDirection: 'row',
    marginTop: RFP(1.5),
    alignSelf: 'flex-start',
    marginHorizontal: RF(5),
  },
  checkbox: {height: RF(14), width: RF(14)},
  checkbtnTxt: {
    fontSize: RF(10),
    fontFamily: 'Inter-Regular',
    marginLeft: RF(5),
    color: '#000',
  },
  signUpBtn: {
    height: RF(48),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: RF(90),
    top: RF(20),
  },
  errorText: {
    fontSize: RF(10),
    fontFamily: 'Inter-Regular',
    color: 'red',
    marginTop: RFP(1),
    alignSelf: 'flex-start',
  },
  signUpTxt: {fontSize: RF(14), fontFamily: 'Inter-SemiBold', color: '#fff'},
});
