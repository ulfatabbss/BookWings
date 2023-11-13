import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopTab from '../../Components/TopTab'
import { RF, RFP } from '../../Utilities/Responsive'

const FAQ = () => {
  const [down, setDown] = useState<boolean>(false);
  const [down1, setDown1] = useState<boolean>(false);
  const [down2, setDown2] = useState<boolean>(false);
  const [down3, setDown3] = useState<boolean>(false);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e9e7ed'}}>
    <TopTab name={'FAQ’s'} back='0' Edit='false'/>
    <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
    <View
          style={{
            height: down ? RF(130) : RF(35),
            width: '90%',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 20,
            backgroundColor:'#f1f1f1',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: RF(35),
              backgroundColor:'#f1f1f1',
              borderRadius: RF(20),
            }}>
            <Text
              numberOfLines={1}
              style={[
                {
                  fontSize: RF(12),
                  fontFamily: 'Inter-SemiBold',
                  marginLeft: '5%',
                  width: '70%',
                  borderBottomWidth: 1,
                  color: '#313131',
                },
              ]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </Text>
            <TouchableOpacity
              onPress={down ? () => setDown(false) : () => setDown(true)}>
              <Image
                style={{
                  height: RF(17),
                  width: RF(17),
                  marginRight: '5%',
                 
                }}
                resizeMode="contain"
                source={
                  down
                  ? require('../../assets/Images/FAQ/Up.png')
                    : require('../../assets/Images/FAQ/down.png')
                }></Image>
            </TouchableOpacity>
          </View>
          {/* condition true View */}
          {down ? (
            <View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  backgroundColor: '#E1E4E8',
                  height: 1,
                }}></View>
              <Text
                style={[
                  {
                    fontSize: RF(12),
                    fontFamily: 'Inter-Light',
                    alignSelf: 'center',
                    width: '90%',
                    marginTop: RFP(1.4),
                    color: "#000",
                  },
                ]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            height: down1 ? RF(130) : RF(35),
            width: '90%',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 20,
            backgroundColor:'#f1f1f1',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: RF(35),
              backgroundColor:'#f1f1f1',
              borderRadius: RF(20),
            }}>
            <Text
              numberOfLines={1}
              style={[
                {
                  fontSize: RF(12),
                  fontFamily: 'Inter-SemiBold',
                  marginLeft: '5%',
                  width: '70%',
                  borderBottomWidth: 1,
                  color: '#313131',
                },
              ]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </Text>
            <TouchableOpacity
              onPress={down1 ? () => setDown1(false) : () => setDown1(true)}>
              <Image
                style={{
                  height: RF(17),
                  width: RF(17),
                  marginRight: '5%',
                 
                }}
                resizeMode="contain"
                source={
                  down1
                  ? require('../../assets/Images/FAQ/Up.png')
                    : require('../../assets/Images/FAQ/down.png')
                }></Image>
            </TouchableOpacity>
          </View>
          {/* condition true View */}
          {down1 ? (
            <View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  backgroundColor: '#E1E4E8',
                  height: 1,
                }}></View>
              <Text
                style={[
                  {
                    fontSize: RF(12),
                    fontFamily: 'Inter-Light',
                    alignSelf: 'center',
                    width: '90%',
                    marginTop: RFP(1.4),
                    color: "#000",
                  },
                ]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            height: down2 ? RF(130) : RF(35),
            width: '90%',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 20,
            backgroundColor:'#f1f1f1',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: RF(35),
              backgroundColor:'#f1f1f1',
              borderRadius: RF(20),
            }}>
            <Text
              numberOfLines={1}
              style={[
                {
                  fontSize: RF(12),
                  fontFamily: 'Inter-SemiBold',
                  marginLeft: '5%',
                  width: '70%',
                  borderBottomWidth: 1,
                  color: '#313131',
                },
              ]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </Text>
            <TouchableOpacity
              onPress={down2 ? () => setDown2(false) : () => setDown2(true)}>
              <Image
                style={{
                  height: RF(17),
                  width: RF(17),
                  marginRight: '5%',
                 
                }}
                resizeMode="contain"
                source={
                  down2
                  ? require('../../assets/Images/FAQ/Up.png')
                    : require('../../assets/Images/FAQ/down.png')
                }></Image>
            </TouchableOpacity>
          </View>
          {/* condition true View */}
          {down2 ? (
            <View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  backgroundColor: '#E1E4E8',
                  height: 1,
                }}></View>
              <Text
                style={[
                  {
                    fontSize: RF(12),
                    fontFamily: 'Inter-Light',
                    alignSelf: 'center',
                    width: '90%',
                    marginTop: RFP(1.4),
                    color: "#000",
                  },
                ]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            height: down3 ? RF(130) : RF(35),
            width: '90%',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 20,
            backgroundColor:'#f1f1f1',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: RF(35),
              backgroundColor:'#f1f1f1',
              borderRadius: RF(20),
            }}>
            <Text
              numberOfLines={1}
              style={[
                {
                  fontSize: RF(12),
                  fontFamily: 'Inter-SemiBold',
                  marginLeft: '5%',
                  width: '70%',
                  borderBottomWidth: 1,
                  color: '#313131',
                },
              ]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </Text>
            <TouchableOpacity
              onPress={down3 ? () => setDown3(false) : () => setDown3(true)}>
              <Image
                style={{
                  height: RF(17),
                  width: RF(17),
                  marginRight: '5%',
                 
                }}
                resizeMode="contain"
                source={
                  down3
                  ? require('../../assets/Images/FAQ/Up.png')
                    : require('../../assets/Images/FAQ/down.png')
                }></Image>
            </TouchableOpacity>
          </View>
          {/* condition true View */}
          {down3 ? (
            <View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  backgroundColor: '#E1E4E8',
                  height: 1,
                }}></View>
              <Text
                style={[
                  {
                    fontSize: RF(12),
                    fontFamily: 'Inter-Light',
                    alignSelf: 'center',
                    width: '90%',
                    marginTop: RFP(1.4),
                    color: "#000",
                  },
                ]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </Text>
            </View>
          ) : null}
        </View>
       
  
      </View>
      </SafeAreaView>
  )
}

export default FAQ

const styles = StyleSheet.create({
 
})