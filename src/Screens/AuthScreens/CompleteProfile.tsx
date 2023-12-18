import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RF, RFP} from '../../Utilities/Responsive';
import {GenericNavigation} from '../../shared/type/interface';
import {KeyboardAvoidingView, Platform} from 'react-native';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
  date: Yup.string().required('Date is required'),
  language: Yup.string().required('Language is required'),
  country: Yup.string().required('Country is required'),
  address: Yup.string().required('Address is required'),
});

const CompleteProfile = ({navigation}: GenericNavigation) => {
  const initialValues = {
    name: '',
    number: '',
    date: '',
    language: '',
    country: '',
    address: '',
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
    navigation.navigate('Userinfo01');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <ScrollView>
                <Text style={styles.MainHeading}>Complete your Profile!</Text>
                <Text style={styles.SubHeading}>
                  Don’t worry, only you can see your personal data. No one else
                  will be able to see it.
                </Text>

                <View style={styles.FormView}>
                  <Image
                    style={styles.Logo}
                    resizeMode="contain"
                    source={require('../../assets/Images/CommonImages/Logo.png')}
                  />
                  <TouchableOpacity
                    style={{
                      height: RF(24),
                      width: RF(24),
                      justifyContent: 'center',
                      alignItems: 'center',
                      left: RF(34),
                      bottom: RF(24),
                      backgroundColor: '#25105b',
                      borderRadius: 90,
                    }}>
                    <Image
                      style={{height: RF(10.5), width: RF(10.5)}}
                      resizeMode="contain"
                      source={require('../../assets/Images/CommonImages/EditPen.png')}
                    />
                  </TouchableOpacity>

                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputTxt}
                      placeholder="Enter your Name"
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
                      placeholder="Enter your Number"
                      placeholderTextColor={'gray'}
                      onChangeText={handleChange('number')}
                      onBlur={handleBlur('number')}
                      value={values.number}
                    />
                  </View>
                  {touched.number && errors.number && (
                    <Text style={styles.errorText}>{errors.number}</Text>
                  )}
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputTxt}
                      placeholder="Date"
                      placeholderTextColor={'gray'}
                      onChangeText={handleChange('date')}
                      onBlur={handleBlur('date')}
                      value={values.date}
                    />
                  </View>
                  {touched.date && errors.date && (
                    <Text style={styles.errorText}>{errors.date}</Text>
                  )}
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputTxt}
                      placeholder="Language"
                      placeholderTextColor={'gray'}
                      onChangeText={handleChange('language')}
                      onBlur={handleBlur('language')}
                      value={values.language}
                    />
                  </View>
                  {touched.language && errors.language && (
                    <Text style={styles.errorText}>{errors.language}</Text>
                  )}
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputTxt}
                      placeholder="country"
                      placeholderTextColor={'gray'}
                      onChangeText={handleChange('country')}
                      onBlur={handleBlur('country')}
                      value={values.country}
                    />
                  </View>
                  {touched.country && errors.country && (
                    <Text style={styles.errorText}>{errors.country}</Text>
                  )}
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputTxt}
                      placeholder="Enter your Address"
                      placeholderTextColor={'gray'}
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                    />
                  </View>
                  {touched.address && errors.address && (
                    <Text style={styles.errorText}>{errors.address}</Text>
                  )}

                  <TouchableOpacity
                    style={styles.SignUpbtn}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.SignUpTxt}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  backbtn: {height: RF(22), width: RF(22)},
  fill: {width: '90%', height: RF(22)},
  MainHeading: {
    fontSize: RF(16),
    fontFamily: 'Inter-SemiBold',
    marginLeft: RF(20),
    marginTop: RFP(2),
    color: '#000',
  },
  SubHeading: {
    fontSize: RF(12),
    fontFamily: 'Inter-Regular',
    marginHorizontal: RF(20),
    marginTop: RFP(1),
    color: '#000',
  },
  FormView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: RFP(4),
    alignItems: 'center',
  },
  Logo: {height: RF(120), width: RF(120), borderRadius: RF(90)},
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
  SignUpbtn: {
    height: RF(48),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: RF(90),
    position: 'absolute',
    bottom: RF(20),
  },
  SignUpTxt: {fontSize: RF(14), fontFamily: 'Inter-SemiBold', color: '#fff'},
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    fontSize: RF(10),
    fontFamily: 'Inter-Regular',
    marginTop: RF(2),
  },
});
