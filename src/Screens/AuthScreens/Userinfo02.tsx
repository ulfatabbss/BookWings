import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RF, RFP} from '../../Utilities/Responsive';
import {GenericNavigation} from '../../shared/type/interface';

const ageOptions = [
  '14-17',
  '18-24',
  '25-29',
  '30-34',
  '35-39',
  '40-44',
  '45-49',
  '50+',
];

const Userinfo02 = ({navigation}: GenericNavigation) => {
  const [optionSelect, setOptionSelect] = useState<string>('14-17');

  const {
    backArrowView,
    backbtn,
    fill,
    MainHeading,
    SubHeading,
    SignUpbtn,
    SignUpTxt,
    AgeContainer,
    AgeSubContainer,
    ageTxt,
    singleAgeContainer,
  } = styles;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={backArrowView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={backbtn}
            resizeMode="contain"
            source={require('../../assets/Images/CommonImages/backArrow.png')}
          />
        </TouchableOpacity>
        <Image
          style={fill}
          resizeMode="contain"
          source={require('../../assets/Images/Userinfo02/slider.png')}
        />
      </View>

      <Text style={MainHeading}>Choose your Age!</Text>
      <Text style={SubHeading}>Select Gender for better content.</Text>
      <View style={AgeContainer}>
        <View style={AgeSubContainer}>
          {ageOptions.map((ageOption, index) => (
            <TouchableOpacity
              key={ageOption}
              style={[
                singleAgeContainer,
                {
                  backgroundColor:
                    optionSelect === ageOption ? '#3F51B5' : undefined,
                  marginRight: index % 2 === 0 ? RFP(2) : 0, // Add margin to every second item
                },
              ]}
              onPress={() => setOptionSelect(ageOption)}>
              <Text
                style={[
                  ageTxt,
                  {color: optionSelect === ageOption ? 'white' : 'black'},
                ]}>
                {ageOption}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={SignUpbtn}
        onPress={() => navigation.navigate('Userinfo03')}>
        <Text style={SignUpTxt}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Userinfo02;

const styles = StyleSheet.create({
  backArrowView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: RFP(2),
  },
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
  AgeContainer: {width: '90%', alignSelf: 'center', marginTop: RFP(2)},
  AgeSubContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: RFP(1),
  },
  ageTxt: {fontSize: RF(14), fontFamily: 'Inter-Medium', color: '#000'},
  singleAgeContainer: {
    height: RF(40),
    width: '45%',
    borderRadius: RF(90),
    borderWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RF(10),
  },
});
