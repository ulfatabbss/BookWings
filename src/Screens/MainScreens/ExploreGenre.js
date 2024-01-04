import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopTab from '../../Components/TopTab';
import {RF} from '../../Utilities/Responsive';
const ExploreGenre = ({navigation, route}) => {
  const {data} = route.params;
  const GenreListView = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ExploreEbook', {data: item?.books})}
      style={{
        height: RF(100),
        width: Dimensions.get('window').width / 2 - RF(25),
        borderRadius: RF(10),
        marginRight: RF(10),
        borderWidth: 1,
        marginVertical: RF(5),
        overflow: 'hidden',
        alignSelf: 'center',
      }}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
        }}
        resizeMode="contain"
        source={{uri: item.image}}>
        {/* <Text
          style={{
            fontSize: RF(16),
            fontFamily: 'Inter-Medium',
            color: '#FFF',
            marginTop: RF(40),
          }}>
          {item.name}
        </Text> */}
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <TopTab name={'Explore by Genre'} back="0" Edit="false" />
      <View style={styles.BelowTopTabView}>
        <View style={styles.FLatListView}>
          <FlatList
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={GenreListView}
            data={data}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreGenre;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#e9e7ed'},
  BelowTopTabView: {height: '100%', width: '100%', backgroundColor: '#FFF'},
  FLatListView: {width: '90%', alignSelf: 'center'},
});
