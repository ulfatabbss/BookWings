import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Alert,
    ScrollView,
    Dimensions,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  


   
  import OTPTextView from 'react-native-otp-textinput';
import { GenericNavigation } from '../../shared/type/interface';
import { RF, RFP } from '../../Utilities/Responsive';
import { useSelector } from 'react-redux';
  
  const OTP = ({navigation}:GenericNavigation)=> {
    const { otpRoute } = useSelector((state:any)=> state.root.user);
    useEffect(()=>{console.log(otpRoute)},[])
   
    const[otp,setOtp]=useState('');
    const [seconds, setSeconds] = useState(30);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(timer);
          setIsResendEnabled(true); // Enable the button when the timer expires
        }
      }, 1000);
  
      return () => clearInterval(timer);
    }, [seconds]);
    useEffect(()=>{
      console.log(otp)
    },[otp])
  
    const handleResendOTP = () => {
      // Add your logic to resend OTP here
      // For example, you can make an API call to request a new OTP
      setIsResendEnabled(false); // Disable the button after resending
      setSeconds(30); // Reset the timer
    };
    const handleTextChange =  (text: string) => {
      setOtp(text);
  
      // Check if the OTP code is completed (4 digits)
      if (text.length === 4) {
        // console.log('OTP Code Completed:', text);
        // You can perform any desired action here
        console.log(otp)
      }
  
    };
    const handleOTP=()=>{
     
      otpRoute=='SignIn'? navigation.navigate('ResetPassword') :  navigation.navigate('CompleteProfile')  
     }
    
    return (
      <ScrollView>
  
    
      <SafeAreaView
        style={[styles.V1, ]}>
         
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.goBack,]}
            resizeMode="contain"
            source={require('../../assets/Images/CommonImages/backArrow.png')}
          />
        </TouchableOpacity>
      
  
        
        <Image
          style={{height: '40%', width: '90%', alignSelf: 'center'}}
          resizeMode="stretch"
          source={require('../../assets/Images/OTP/OTP.png')}></Image>
        <Text style={[styles.Head_txt,]}>
          Hi there!
        </Text>
        <Text style={[styles.sub_heading_txt,]}>
          Please enter the 4 digit OTP we just sent on Phone Number!
        </Text>
  
        <OTPTextView
          containerStyle={styles.OTP_View}
          textInputStyle={styles.OTP_txt}
          tintColor={'black'}
          handleTextChange={handleTextChange}
          
          
          autoFocus={true}></OTPTextView>
  
        <View style={styles.V5}>
        <TouchableOpacity
            // style={styles.resendButton}
            onPress={handleResendOTP}
            disabled={!isResendEnabled}
          >
            <Text style={[styles.smalltxt,{color:isResendEnabled?'#000':'gray'}]}>Re-send OTP</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.smalltxt,
                {marginRight: '2%'},
              ]}>
              {'Time: '}
            </Text>
            <Text style={[styles.smalltxt, {color: '#EAAE23'}]}>{`00:${seconds < 10 ? `0${seconds}` : seconds} sec`}</Text>
          </View>
        </View>
       
        <TouchableOpacity
          style={[styles.button_View,{backgroundColor:otp.length!=4?'gray':'#3F51B5'}]}
          disabled={otp.length!=4}
          onPress={
            //() => navigation.navigate('CompleteProfile')
            // () => navigation.navigate('ResetPassword')
            handleOTP
}>
          <Text style={styles.btn_txt}>Confirm</Text>
        </TouchableOpacity>
     
      </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default OTP;
  
  const styles = StyleSheet.create({
    smalltxt: {fontSize: RF(11), fontFamily: 'Inter-Medium'},
    goBack: {
      height: RF(20),
      width: RF(20),
      marginLeft: RFP(2),
      marginTop: RFP(2),
    },
    sub_heading_txt: {
      fontSize: RF(11),
      marginTop: '2%',
      fontFamily: 'Inter-Medium',
      width: '90%',
      alignSelf: 'center',
    },
    V1: {
      
      height:Dimensions.get('window').height,
      width:Dimensions.get('window').width,
      backgroundColor: 'white',
    },
    V2: {
      flexDirection: 'row',
      marginTop: '5%',
      width: '90%',
      height: '10%',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    img1: {
      height: 25,
      width: 20,
      alignSelf: 'center',
    },
    V3: {
      flexDirection: 'row',
      width: '90%',
      height: 55,
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginTop: '5%',
    },
    V4: {
      height: '20%',
      width: '20%',
      backgroundColor: '#F0F2F3',
      borderRadius: RF(10),
      flexDirection: 'row',
    },
    V5: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: '7%',
      justifyContent: 'space-between',
    },
    button_View: {
      height: RF(48),
      width: '90%',
      alignSelf: 'center',
     
      flexDirection: 'row',
      borderRadius: RF(25),
      backgroundColor: '#3F51B5',
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
      bottom:RF(20)
    },
    Head_txt: {fontSize: RF(20), fontFamily: 'Inter-Bold', marginLeft: '5%'},
    btn_txt: {fontFamily: 'Inter-Bold', fontSize: RF(14), color: 'white'},
    OTP_View: {
      height: RF(50),
      width: '90%',
      alignSelf: 'center',
      marginVertical: RFP(5),
    },
    OTP_txt: {
      height: '100%',
      width: RF(50),
      fontSize: RF(12),
      fontWeight: '500',
      backgroundColor: '#F0F2F3',
      borderRadius: RF(10),
    },
  });
  