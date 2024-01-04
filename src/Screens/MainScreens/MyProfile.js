import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopTab from '../../Components/TopTab';
import {RF, RFP} from '../../Utilities/Responsive';
import {GetProfile} from '../../services/AuthServices';
import {useSelector} from 'react-redux';
import {BallIndicator} from 'react-native-indicators';

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfileData] = useState();
  const {userData} = useSelector(state => state.root.user);
  useEffect(() => {
    console.log(userData, 'ghhgjdhsjkjd');
  }, []);

  if (loading) {
    return <BallIndicator color={'#3F51B5'} />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e9e7ed'}}>
      <TopTab name="My Profile" back="1" Edit="true" />
      <View
        style={{
          height: RFP(25),
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.UserProfile}
          resizeMode="contain"
          source={require('../../assets/Images/CommonImages/Logo.png')}
        />
        <Text style={styles.UserNameTxt}>{userData?.name}</Text>
      </View>
      <View style={{width: '100%', height: '100%', backgroundColor: '#FFFF'}}>
        <View style={styles.subContainer}>
          <Text style={styles.subHeadingTxt}>Email</Text>
          <Text style={styles.userInfo}>{userData?.email}</Text>
        </View>
        <View style={styles.Spacing}></View>
        <View style={[styles.subContainer, {marginTop: RFP(1)}]}>
          <Text style={styles.subHeadingTxt}>Phone</Text>
          <Text style={styles.userInfo}>{userData?.phone}</Text>
        </View>
        <View style={styles.Spacing}></View>
        <View style={[styles.subContainer, {marginTop: RFP(1)}]}>
          <Text style={styles.subHeadingTxt}>Date of Birth</Text>
          <Text style={styles.userInfo}>{userData?.dob}</Text>
        </View>
        <View style={styles.Spacing}></View>
        <View style={[styles.subContainer, {marginTop: RFP(1)}]}>
          <Text style={styles.subHeadingTxt}>Country</Text>
          <Text style={styles.userInfo}>{userData?.country}</Text>
        </View>
        <View style={styles.Spacing}></View>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  UserProfile: {height: RF(104), width: RF(104), borderRadius: RF(100)},
  UserNameTxt: {
    fontSize: RF(16),
    fontFamily: 'Inter-Bold',
    marginTop: RFP(1),
    color: '#000',
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: RFP(2),
    height: RF(54),
    justifyContent: 'space-around',
  },
  subHeadingTxt: {fontSize: RF(14), fontFamily: 'Inter-Light', color: '#000'},
  userInfo: {fontSize: RF(14), fontFamily: 'Inter-Medium', color: '#000'},
  Spacing: {
    height: RFP(0.5),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F0F2F3',
  },
});
