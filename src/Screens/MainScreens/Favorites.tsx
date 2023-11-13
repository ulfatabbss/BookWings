import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RF, RFP } from '../../Utilities/Responsive'


const ListData=[
  {
    BookImage:require('../../assets/Images/Homee/FlatList/bg1.png'),
    name:'Finance Basics for young women',
    Rating:"4.5",
  },
  {
    BookImage:require('../../assets/Images/Homee/FlatList/bg1.png'),
    name:'Finance Basics for young women',
    Rating:"4.5",
  },
  {
    BookImage:require('../../assets/Images/Homee/FlatList/bg1.png'),
    name:'Finance Basics for young women',
    Rating:"4.5",
  },
  {
    BookImage:require('../../assets/Images/Homee/FlatList/bg1.png'),
    name:'Finance Basics for young women',
    Rating:"4.5",
  },
  {
    BookImage:require('../../assets/Images/Homee/FlatList/bg1.png'),
    name:'Finance Basics for young women',
    Rating:"4.5",
  },
]

const Favorites = () => {
  const ListView=({item}: { item: { BookImage: any,name:String,Rating:string, } })=>(
    <View style={{height:RF(315),width:Dimensions.get('window').width/2.5,marginRight:RFP(4),borderRadius:RF(20),}}>
      <ImageBackground style={styles.bookCover} resizeMode='cover' source={item.BookImage}>
        <ImageBackground style={styles.RatingImage} resizeMode='contain' source={require('../../assets/Images/Homee/FlatList/ratingImage.png')}>
          <Image style={styles.ratingStar} resizeMode='contain' source={require('../../assets/Images/Homee/FlatList/ratingStar.png')}/>
          <Text style={styles.ratingtxt}>{item.Rating}</Text>
        </ImageBackground>
        <TouchableOpacity style={styles.FavBtn}>
        <Image style={styles.favImg} resizeMode='contain' source={require('../../assets/Images/Homee/FlatList/fav.png')}/>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.belowcover}>
        <Text style={styles.bookname}>{item.name}</Text>
        <TouchableOpacity style={styles.Readbtn}>
          <Text style={styles.btnTxt}>Read More</Text>
          <Image style={styles.btnPng} resizeMode='contain' source={require('../../assets/Images/Homee/arrow.png')}/>
    
        </TouchableOpacity>
    
      </View>
    
    </View>
      )
  return (
   <SafeAreaView style={styles.safeArea}>
    <View style={styles.TopTab}>
        <View style={styles.TopTabContainer}>
          {/* <Image style={styles.LogoImg} resizeMode='contain' source={require('../../assets/Images/Homee/Logo.png')} /> */}
          <Text style={styles.LogoTxt}>Favorites</Text>
        </View>
      </View>
      <View style={styles.BelowTopTabView}>
      <View style={styles.FLatListView}>
          <FlatList numColumns={2} showsVerticalScrollIndicator={false} renderItem={ListView} data={ListData} />

        </View>

      </View>
   </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  safeArea:{flex:1,backgroundColor:'#e9e7ed'},
  TopTab:{height:RFP(10),backgroundColor:'#e9e7ed',padding:RF(20),flexDirection:'row',justifyContent:'space-between'},
  TopTabContainer:{flexDirection:'row',alignItems:'center'},
  LogoImg:{height:RF(26),width:RF(44)},
  LogoTxt:{fontSize:RF(18),fontFamily:'Inter-SemiBold',marginLeft:RFP(1)},
  BelowTopTabView:{height:'100%',width:'100%',backgroundColor:'#FFF'},
  FLatListView:{width:'90%',alignSelf:'center'},



   //FlatList Design Below
   bookCover:{width:'100%',borderRadius:RF(20),overflow:'hidden',height:RF(200),flexDirection:'row',justifyContent:'space-between'},
   RatingImage:{height:RF(27),width:RF(58),marginTop:RF(30),right:RF(12),flexDirection:'row',},
   ratingStar:{height:RF(10),width:RF(10),marginLeft:RF(13),marginTop:RF(2)},
   ratingtxt:{fontSize:RF(9),marginTop:RF(2),marginLeft:RF(4),color:'#FFFF',fontFamily:'Inter-Medium'},
   FavBtn:{height:RF(25),width:RF(25),borderRadius:30,backgroundColor:'#FFF',marginTop:RF(25),right:RF(3),justifyContent:'center',alignItems:'center'},
   favImg:{height:RF(14),width:RF(16),},
   belowcover:{width:'90%',alignSelf:'center',marginTop:RF(5)},
   bookname:{fontSize:RF(14),fontFamily:'Inter-Medium'},
   Readbtn:{height:RF(26),width:RF(93),borderRadius:RF(30),backgroundColor:'#3F51B5',marginTop:RF(10),justifyContent:'center',alignItems:'center',flexDirection:'row'},
   btnTxt:{fontSize:RF(8),fontFamily:'Inter-Medium',color:"#FFF"},
   btnPng:{height:RF(10),width:RF(10),marginLeft:RF(5),tintColor:"#FFF"},
})