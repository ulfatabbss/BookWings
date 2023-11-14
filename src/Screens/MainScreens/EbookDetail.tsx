import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'

const EbookDetail = () => {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name='Ebook Detail' back='0' Edit='false'/>
    <View style={{height:'100%',width:'100%',backgroundColor:'#FFFF'}}>
<View style={{height:RF(205),width:'90%',marginTop:RFP(2),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
  <View style={{height:'100%',width:'47%',}} >
    <ImageBackground style={{height:'100%',flexDirection:'row',justifyContent:'space-between',width:'100%',borderRadius:RF(10),overflow:'hidden'}} resizeMode='stretch' source={require('../../assets/Images/Homee/FlatList/bg1.png')}>
    <ImageBackground style={styles.RatingImage} resizeMode='contain' source={require('../../assets/Images/Homee/FlatList/ratingImage.png')}>
      <Image style={styles.ratingStar} resizeMode='contain' source={require('../../assets/Images/Homee/FlatList/ratingStar.png')}/>
      <Text style={styles.ratingtxt}>4.5</Text>
    </ImageBackground>
    <TouchableOpacity style={styles.FavBtn}>
    <Image style={styles.favImg} resizeMode='contain' source={require('../../assets/Images/Homee/FlatList/fav.png')}/>
    </TouchableOpacity>
    </ImageBackground>
  </View>
  <View style={{height:'100%',width:'47%'}}>
    <Text style={{fontSize:RF(18),fontFamily:'Inter-Medium',color:"#313131"}}>Finance Basics for young women.</Text>
   <Text style={{fontSize:RF(11),fontFamily:'Inter-SemiBold',marginTop:RFP(1),color:"#3F51B5"}}> J.K. Rowling</Text>
   <Text style={{fontSize:RF(11),fontFamily:'Inter-Regular',marginTop:RFP(0.2),color:"#313131"}}> Released on Dec, 2020</Text>
  </View>
</View>
<View style={{height:RF(50),width:'90%',alignSelf:'center',flexDirection:'row',marginTop:RFP(1)}}>
<View style={{height:'100%',width:'33%',borderRightWidth:1.5,borderColor:'#F1F1F1'}}>
  <View style={{flexDirection:'row',justifyContent:'center',marginTop:RF(5)}}>
    <Image style={{height:RF(21),width:RF(21)}} resizeMode='contain' source={require('../../assets/Images/CommonImages/ratingStar.png')}/>
    <Text style={{color:'#000',fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(5)}}>4.5</Text>
  </View>
  <Text style={{color:'#000',fontSize:RF(12),fontFamily:'Inter-Regular',alignSelf:'center',marginTop:RF(5)}}>6.8K reviews</Text>
</View>
<View style={{height:'100%',width:'33%',borderRightWidth:1.5,borderColor:'#F1F1F1',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#000',fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(5)}}>5.6 MB</Text>
  <Text style={{color:'#000',fontSize:RF(12),fontFamily:'Inter-Regular',alignSelf:'center',marginTop:RF(5)}}>Size</Text>
</View>
<View style={{height:'100%',width:'33%',borderColor:'#F1F1F1',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#000',fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RF(5)}}>784</Text>
  <Text style={{color:'#000',fontSize:RF(12),fontFamily:'Inter-Regular',alignSelf:'center',marginTop:RF(5)}}>Pages</Text>
</View>



</View>
<TouchableOpacity style={{height:RF(48),width:'90%',alignSelf:'center',backgroundColor:'#3F51B5',justifyContent:'center',alignItems:'center',marginTop:RFP(1),borderRadius:90}}>
<Text style={{color:'#FFF',fontSize:RF(14),fontFamily:'Inter-SemiBold',marginLeft:RF(5)}}>Read Book</Text>

</TouchableOpacity>

<Text style={{marginTop:RFP(2),marginLeft:'5%',fontSize:RF(16),fontFamily:'Inter-Bold',color:'#313131'}}>About this Ebook</Text>
<Text style={{height:RF(90),width:'90%',alignSelf:'center',marginTop:RFP(1),fontSize:RF(12),fontFamily:'Inter-Regular',color:'#313131'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
<View style={styles.SubContainer}>
        <Text style={styles.HeadingTxt}>Ratings & Reviews</Text>
        <TouchableOpacity>
        <Image style={styles.ArrowImage} resizeMode='contain' source={require('../../assets/Images/Homee/arrow.png')} />
        </TouchableOpacity>
        </View>
    </View>

   </SafeAreaView>
  )
}

export default EbookDetail

const styles = StyleSheet.create({
  RatingImage:{height:RF(27),width:RF(58),marginTop:RF(30),right:RF(6),flexDirection:'row'},
  ratingStar:{height:RF(10),width:RF(10),marginLeft:RF(13),marginTop:RF(2)},
  ratingtxt:{fontSize:RF(9),marginTop:RF(2),marginLeft:RF(4),color:'#FFFF',fontFamily:'Inter-Medium'},
  FavBtn:{height:RF(25),width:RF(25),borderRadius:30,backgroundColor:'#FFF',marginTop:RF(25),right:RF(20),justifyContent:'center',alignItems:'center'},
  favImg:{height:RF(14),width:RF(16)},
  SubContainer:{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:RF(10),marginTop:RFP(1)},
  HeadingTxt:{fontSize:RF(16),fontFamily:'Inter-Bold',marginLeft:RFP(1),color:'#000'},
  ArrowImage:{height:RF(22),width:RF(22),tintColor:'#009688'},



})