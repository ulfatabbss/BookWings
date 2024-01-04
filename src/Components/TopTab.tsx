import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RF, RFP} from '../Utilities/Responsive';
import {useNavigation} from '@react-navigation/native';

interface TopTabProps {
  name: string;
  back: string;
  Edit: string; // You might want to update the type based on your actual use
}

const TopTab: React.FC<TopTabProps> = ({name, back, Edit}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          {back == '1' ? undefined : (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={[styles.img1]}
                resizeMode="contain"
                source={require('../assets/Images/CommonImages/backArrow.png')}></Image>
            </TouchableOpacity>
          )}
          <Text
            style={[
              {
                fontSize: RF(16),
                marginLeft: '5%',
                fontFamily: 'Inter-Medium',
                color: '#000',
              },
            ]}>
            {name}
          </Text>
        </View>
      </View>
      {Edit == 'true' ? (
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image
            style={{height: RF(23), width: RF(23)}}
            resizeMode="contain"
            source={require('../assets/Images/CommonImages/EditIcon.png')}
          />
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingLeft: RF(20),
    height: RFP(10),
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e9e7ed',
    elevation: 5,
  },
  img1: {
    height: 25,
    width: 20,
    alignSelf: 'center',
  },
});
