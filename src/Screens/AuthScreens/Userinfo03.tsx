import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import { GenericNavigation } from '../../shared/type/interface';

const genreData=[
  {
    genre:'Romance'
  },
  {
    genre:'Fantacy'
  },
  {
    genre:'Si-Fi'
  },
  {
    genre:'Horror'
  },
  {
    genre:'Comics'
  },
  {
    genre:'Mystery'
  },
  {
    genre:'Inspiration'
  },
  {
    genre:'Comedy'
  },
  {
    genre:'Action'
  },
  {
    genre:'Thriller'
  },
  {
    genre:'Adventure'
  },
  {
    genre:'Psychology'
  },

]


const Userinfo03 = ({navigation}:GenericNavigation) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenreSelection = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      // Remove the genre if it's already selected
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      // Add the genre if it's not already selected
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  const Genre = ({ item }: { item: { genre: string } }) => (
    <TouchableOpacity       style={[
      styles.genreItem,
      selectedGenres.includes(item.genre) ? { backgroundColor: '#3F51B5' } : null,
    ]}
    onPress={() => toggleGenreSelection(item.genre)}
  >
      <Text numberOfLines={1} style={[styles.genreText,selectedGenres.includes(item.genre)?{color:'#fff'}:{color:"#000"}]}>{item.genre}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    <View style={styles.backArrowView}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

   
        <Image style={styles.backbtn} resizeMode='contain' source={require('../../assets/Images/CommonImages/backArrow.png')} />  
           </TouchableOpacity>
        <Image style={styles.fill} resizeMode='contain' source={require('../../assets/Images/Userinfo03/slider.png')} />

    </View>
    
<Text style={styles.MainHeading}>Choose the Book Genre you Like!</Text>
<Text style={styles.SubHeading}>Select Gender for better content.</Text>

<View style={{height:RFP(65),width:"90%",alignSelf:'center',marginTop:RF(15)}}>
  <FlatList numColumns={3} renderItem={Genre} data={genreData}/>

</View>





<TouchableOpacity style={styles.SignUpbtn} onPress={()=>navigation.navigate('PaymentPlan')}>
    <Text style={styles.SignUpTxt}>Continue</Text>

    </TouchableOpacity>

   </SafeAreaView>
  )
}

export default Userinfo03

const styles = StyleSheet.create({
  backArrowView:{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:RFP(2)},
  backbtn:{height:RF(22),width:RF(22)},
  fill:{width:'80%',height:RF(22)},
  MainHeading:{ fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(20),marginTop:RFP(2),color:'#000'},
  SubHeading:{fontSize:RF(12),fontFamily:'Inter-Regular',marginHorizontal:RF(20),marginTop:RFP(1),color:'#000'},
  SignUpbtn:{height:RF(48),width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#3F51B5',
  borderRadius:RF(90),position:'absolute',bottom:RF(20)},
  SignUpTxt:{fontSize:RF(14),fontFamily:'Inter-SemiBold',color:'#fff'},

  genreItem: {
    height: 44,
    width: '30%',
    borderRadius: 30,
   
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth:0.4,
    borderColor:"gray"
  },

  genreText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#000',
  },
})