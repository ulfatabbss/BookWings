import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RF, RFP} from '../../Utilities/Responsive';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {BallIndicator} from 'react-native-indicators';
const genreData = [
  {
    genre: 'Romance',
  },
  {
    genre: 'Fantacy',
  },
  {
    genre: 'Si-Fi',
  },
  {
    genre: 'Horror',
  },
  {
    genre: 'Comics',
  },
  {
    genre: 'Mystery',
  },
  {
    genre: 'Inspiration',
  },
  {
    genre: 'Comedy',
  },
  {
    genre: 'Action',
  },
  {
    genre: 'Thriller',
  },
  {
    genre: 'Adventure',
  },
  {
    genre: 'Psychology',
  },
];

const Userinfo03 = ({navigation, route}) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const {userToken} = useSelector(state => state.root.user);
  const [loading, setLoading] = useState(false);

  const {val} = route?.params;
  const handleCategory = async () => {
    setLoading(true);
    const updatedObject = {
      ...val,
      categories: selectedGenres,
    };
    const FormData = require('form-data');
    let data = new FormData();
    data.append('name', updatedObject.name);
    data.append('phone', updatedObject.number);
    data.append('dob', updatedObject.date);
    data.append('lang', updatedObject.language);
    data.append('country', updatedObject.country);
    data.append('state', 'punjab');
    data.append('address', updatedObject.address);
    data.append('gender', updatedObject.gender);
    data.append('age_range', updatedObject.age);
    data.append('liked_categories', updatedObject.categories);
    data.append('notifications', '1');
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://mbapp.mediasols.xyz/api/profile/update',
      headers: {
        Authorization: `Bearer ${userToken}`, // Add space after 'Bearer'
        'Content-Type': 'multipart/form-data', // Add Content-Type header for FormData
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      if (response.status == 200) {
        navigation.navigate('PaymentPlan');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const toggleGenreSelection = genre => {
    if (selectedGenres.includes(genre)) {
      // Remove the genre if it's already selected
      setSelectedGenres(
        selectedGenres.filter(selectedGenre => selectedGenre !== genre),
      );
    } else {
      // Add the genre if it's not already selected
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  const Genre = ({item}) => (
    <TouchableOpacity
      style={[
        styles.genreItem,
        selectedGenres.includes(item.genre)
          ? {backgroundColor: '#3F51B5'}
          : null,
      ]}
      onPress={() => toggleGenreSelection(item.genre)}>
      <Text
        numberOfLines={1}
        style={[
          styles.genreText,
          selectedGenres.includes(item.genre)
            ? {color: '#fff'}
            : {color: '#000'},
        ]}>
        {item.genre}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <BallIndicator color={'#3F51B5'} />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.backArrowView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backbtn}
            resizeMode="contain"
            source={require('../../assets/Images/CommonImages/backArrow.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.fill}
          resizeMode="contain"
          source={require('../../assets/Images/Userinfo03/slider.png')}
        />
      </View>

      <Text style={styles.MainHeading}>Choose the Book Genre you Like!</Text>
      <Text style={styles.SubHeading}>Select Gender for better content.</Text>

      <View
        style={{
          height: RFP(65),
          width: '90%',
          alignSelf: 'center',
          marginTop: RF(15),
        }}>
        <FlatList numColumns={3} renderItem={Genre} data={genreData} />
      </View>

      <TouchableOpacity
        style={styles.SignUpbtn}
        onPress={() => handleCategory()}>
        <Text style={styles.SignUpTxt}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Userinfo03;

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

  genreItem: {
    height: 44,
    width: '30%',
    borderRadius: 30,

    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 0.4,
    borderColor: 'gray',
  },

  genreText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#000',
  },
});
