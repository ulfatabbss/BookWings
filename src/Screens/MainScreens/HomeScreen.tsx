import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
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
const GenreData=[
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Romance.png'),
    txt:'Romance',
  },
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Thriller.png'),
    txt:'Thriller',
  }
]

const HomeScreen = () => {
  const [isSearch,setIsSearch]=useState<boolean>(true);

  const ListView=({item}: { item: { BookImage: any,name:String,Rating:string, } })=>(
<View style={{height:RF(315),width:RF(170),marginRight:RFP(1),borderRadius:RF(20)}}>
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
  const GenreListView=({item}:{item:{image:any,txt:String }})=>(
    <ImageBackground style={{height:RF(83),width:RF(160),borderRadius:RF(10),marginRight:RF(10),padding:RF(10)}} resizeMode='contain' source={item.image}>
      <Text style={{fontSize:RF(16),fontFamily:'Inter-Medium',color:'#FFF',marginTop:RF(40)}}>{item.txt}</Text>

    </ImageBackground>
  )
  return (
    <SafeAreaView style={styles.safeArea}>

     {isSearch? <View style={styles.TopTab}>
        <View style={styles.TopTabContainer}>
          <Image style={styles.LogoImg} resizeMode='contain' source={require('../../assets/Images/Homee/Logo.png')} />
          <Text style={styles.LogoTxt}>BookWing</Text>
        </View>
        <View style={styles.TopTabbtns}>
          <TouchableOpacity onPress={()=>setIsSearch(false)}>
          <Image style={styles.searchImg} resizeMode='contain' source={require('../../assets/Images/Homee/search.png')} />
          </TouchableOpacity>
          <Image style={styles.notifyImg} resizeMode='contain' source={require('../../assets/Images/Homee/notifi.png')} />

        </View>
    
          


      </View>: <View style={{height:RFP(10),backgroundColor:"#e9e7ed"}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>setIsSearch(true)}>
          <Image
            style={[styles.img1, ]}
            resizeMode="contain"
            source={require('../../assets/Images/CommonImages/backArrow.png')}></Image>
        </TouchableOpacity>
        <View style={styles.Search_View}>
          <Image
            style={{
              height: RF(16),
              width: RF(16),
              alignSelf: 'center',
              tintColor: 'gray' ,
              marginLeft: RF(10),
            }}
            resizeMode="contain"
            source={require('../../assets/Images/Homee/search.png')}
          />
          <TextInput
            style={[styles.seach_input_txt]}
            placeholderTextColor={'gray'}
            
            placeholder="Search"></TextInput>
        </View>
      </View>
     </View>}
      <ScrollView style={{backgroundColor:'#FFF'}} showsVerticalScrollIndicator={false}>
      <View style={styles.BelowTopTabView}>
        <View style={styles.SubContainer}>
        <Text style={styles.HeadingTxt}>Popular Ebooks</Text>
        <TouchableOpacity>
        <Image style={styles.ArrowImage} resizeMode='contain' source={require('../../assets/Images/Homee/arrow.png')} />
        </TouchableOpacity>
        </View>
        <View style={styles.FLatListView}>
          <FlatList horizontal showsHorizontalScrollIndicator={false} renderItem={ListView} data={ListData} />

        </View>
        <View style={styles.SubContainer}>
        <Text style={styles.HeadingTxt}>Explore by Genre</Text>
        <TouchableOpacity>
        <Image style={styles.ArrowImage} resizeMode='contain' source={require('../../assets/Images/Homee/arrow.png')} />
        </TouchableOpacity>
        </View>
        <View style={[styles.FLatListView,{marginTop:RF(10)}]}>
          <FlatList horizontal showsHorizontalScrollIndicator={false} renderItem={GenreListView} data={GenreData}/>
        </View>
        <View style={styles.SubContainer}>
        <Text style={styles.HeadingTxt}>Recommended for you</Text>
        <TouchableOpacity>
        <Image style={styles.ArrowImage} resizeMode='contain' source={require('../../assets/Images/Homee/arrow.png')} />
        </TouchableOpacity>
        </View>
        <View style={styles.FLatListView}>
          <FlatList horizontal showsHorizontalScrollIndicator={false} renderItem={ListView} data={ListData} />

        </View>



       

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  safeArea:{flex:1,backgroundColor:'#e9e7ed'},
  TopTab:{height:RFP(10),backgroundColor:'#e9e7ed',padding:RF(20),flexDirection:'row',justifyContent:'space-between'},
  TopTabContainer:{flexDirection:'row',alignItems:'center'},
  LogoImg:{height:RF(26),width:RF(44)},
  LogoTxt:{fontSize:RF(18),fontFamily:'Inter-SemiBold',marginLeft:RFP(1)},
  TopTabbtns:{flexDirection:'row',alignItems:'center'},
  notifyImg:{height:RF(22),width:RF(22)},
  BelowTopTabView:{height:'100%',width:'100%',backgroundColor:'#FFF'},
  searchImg:{height:RF(22),width:RF(22),marginRight:RFP(0.8)},
  ArrowImage:{height:RF(22),width:RF(22),tintColor:'#009688'},
  HeadingTxt:{fontSize:RF(16),fontFamily:'Inter-Bold',marginLeft:RFP(1)},
  SubContainer:{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:RF(10),marginTop:RFP(1)},
  FLatListView:{width:'90%',alignSelf:'center'},
  container: {flexDirection: 'row',marginTop: RFP(1),width: '90%',height: RFP(8),alignSelf: 'center',alignItems: 'center',},
  img1: {height: 25,width: 20,},
  Searchbtns: {height: '100%',width: RF(80),backgroundColor: '#F1F2F3',borderRadius: RF(15),alignContent: 'center', justifyContent: 'center',},
  seach_input_txt: {width: '80%',height:'80%',marginLeft: RFP(1), alignSelf: 'center',  fontSize: RF(12), fontFamily: 'Inter-Light'},
  Search_View: {width: '90%',backgroundColor: 'white',marginLeft: RFP(1), borderRadius: RF(20),height: '70%',alignSelf: 'center',flexDirection: 'row',},


  //FlatList Design Below
  bookCover:{width:'100%',height:RF(227),flexDirection:'row',justifyContent:'space-between'},
  RatingImage:{height:RF(27),width:RF(58),marginTop:RF(30),right:RF(6),flexDirection:'row'},
  ratingStar:{height:RF(10),width:RF(10),marginLeft:RF(13),marginTop:RF(2)},
  ratingtxt:{fontSize:RF(9),marginTop:RF(2),marginLeft:RF(4),color:'#FFFF',fontFamily:'Inter-Medium'},
  FavBtn:{height:RF(25),width:RF(25),borderRadius:30,backgroundColor:'#FFF',marginTop:RF(25),right:RF(20),justifyContent:'center',alignItems:'center'},
  favImg:{height:RF(14),width:RF(16)},
  belowcover:{width:'90%',alignSelf:'center',marginTop:RF(5)},
  bookname:{fontSize:RF(14),fontFamily:'Inter-Medium'},
  Readbtn:{height:RF(26),width:RF(93),borderRadius:RF(30),backgroundColor:'#3F51B5',marginTop:RF(10),justifyContent:'center',alignItems:'center',flexDirection:'row'},
  btnTxt:{fontSize:RF(8),fontFamily:'Inter-Medium',color:"#FFF"},
  btnPng:{height:RF(10),width:RF(10),marginLeft:RF(5),tintColor:"#FFF"},
 



})