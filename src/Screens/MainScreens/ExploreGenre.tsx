import { Dimensions, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import { RF } from '../../Utilities/Responsive'

const GenreData=[
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Romance.png'),
    txt:'Romance',
  },
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Thriller.png'),
    txt:'Thriller',
  },
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Romance.png'),
    txt:'Romance',
  },
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Thriller.png'),
    txt:'Thriller',
  },
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Romance.png'),
    txt:'Romance',
  },
  {
    image:require('../../assets/Images/Homee/GenreFlatList/Thriller.png'),
    txt:'Thriller',
  }
]

const ExploreGenre = () => {
  const GenreListView=({item}:{item:{image:any,txt:String }})=>(
    <ImageBackground style={{height:RF(83),width:Dimensions.get('window').width/2.3,borderRadius:RF(10),marginRight:RF(10),padding:RF(10)}} resizeMode='contain' source={item.image}>
      <Text style={{fontSize:RF(16),fontFamily:'Inter-Medium',color:'#FFF',marginTop:RF(40)}}>{item.txt}</Text>

    </ImageBackground>
  )
  return (
    <SafeAreaView style={styles.safeArea}>
    <TopTab name={'Explore by Genre'} back='0' Edit='false'/>
       <View style={styles.BelowTopTabView}>
       <View style={styles.FLatListView}>
       <FlatList numColumns={2} showsHorizontalScrollIndicator={false} renderItem={GenreListView} data={GenreData}/>

 
         </View>
 
       </View>
    </SafeAreaView>
  )
}

export default ExploreGenre

const styles = StyleSheet.create({
  safeArea:{flex:1,backgroundColor:'#e9e7ed'},
  BelowTopTabView:{height:'100%',width:'100%',backgroundColor:'#FFF'},
  FLatListView:{width:'90%',alignSelf:'center'},
})