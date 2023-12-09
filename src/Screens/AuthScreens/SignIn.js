import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RF, RFP } from '../../Utilities/Responsive';
import { GenericNavigation } from '../../shared/type/interface';
import { setLogin } from '../../Redux/Reducers/userReducer';

// Constants for colors and images
const COLORS = {
  primary: '#3F51B5',
  text: '#000',
  placeholder: 'gray',
  link: '#009688',
};

const IMAGES = {
  backArrow: require('../../assets/Images/CommonImages/backArrow.png'),
  logo: require('../../assets/Images/SignUp/Logo.png'),
  hide: require('../../assets/Images/SignUp/hide.png'),
  check: require('../../assets/Images/SignUp/check.png'),
  emptyCheck: require('../../assets/Images/SignUp/emptycheck.png'),
};

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const { otpRoute } = useSelector((state) => state.root.user);

  useEffect(() => {
    console.log(otpRoute);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          // Handle form submission (dispatch action, etc.)
          dispatch(setLogin(true));
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.formView}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={IMAGES.logo}
            />

            <Text style={styles.mainHeading}>Hello There!</Text>
            <Text style={styles.subHeading}>
              Please enter your email & password to Sign In.
            </Text>

            <TextInput
              style={styles.inputTxt}
              placeholder="Enter your Email"
              placeholderTextColor={COLORS.placeholder}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.inputTxt}
              placeholder="Password"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={styles.belowInputView}>
              <TouchableOpacity
                onPress={() => handleChange('rememberMe')}
                style={styles.checkboxContainer}>
                <Image
                  style={styles.checkbox}
                  resizeMode="contain"
                  source={values.rememberMe ? IMAGES.check : IMAGES.emptyCheck}
                />
                <Text style={styles.checkBtnTxt}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={[styles.checkBtnTxt, styles.forgotPassword]}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signInBtn} onPress={handleSubmit}>
              <Text style={styles.signInTxt}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: RF(20),
  },
  formView: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    marginTop: RFP(4),
    alignItems: 'center',
  },
  logo: {
    height: RF(120),
    width: RF(120),
    borderRadius: RF(90),
  },
  mainHeading: {
    alignSelf: 'flex-start',
    fontSize: RF(16),
    fontFamily: 'Inter-SemiBold',
    marginTop: RFP(2),
    color: COLORS.text,
  },
  subHeading: {
    alignSelf: 'flex-start',
    fontSize: RF(12),
    fontFamily: 'Inter-Regular',
    marginTop: RFP(1),
    color: COLORS.text,
    marginBottom: RF(10),
  },
  inputTxt: {
    fontSize: RF(12),
    fontFamily: 'Inter-Medium',
    width: '100%',
    height: RF(48),
    borderRadius: RF(90),
    backgroundColor: '#f1f1f1',
    marginTop: RFP(1.5),
    paddingHorizontal: RF(10),
    flexDirection: 'row',
  },
  belowInputView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: RFP(1.5),
    alignSelf: 'flex-start',
    marginHorizontal: RF(5),
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    height: RF(14),
    width: RF(14),
  },
  checkBtnTxt: {
    fontSize: RF(10),
    fontFamily: 'Inter-Regular',
    marginLeft: RF(5),
    color: COLORS.text,
  },
  forgotPassword: {
    fontFamily: 'Inter-SemiBold',
    color: COLORS.link,
  },
  signInBtn: {
    height: RF(48),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: RF(90),
    position: 'absolute',
    bottom: RF(20),
  },
  signInTxt: {
    fontSize: RF(14),
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    fontSize: RF(10),
    fontFamily: 'Inter-Regular',
    marginTop: RF(2),
  },
});

export default SignIn;
