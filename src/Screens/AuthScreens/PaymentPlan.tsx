import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View ,Platform, TouchableOpacity, TextInput, Modal} from 'react-native'
import React, { useState } from 'react'
import { RF, RFP } from '../../Utilities/Responsive'
import CustomModal from '../../Components/CustomModal'


const PaymentData=[
    {
        month:'free',
        Price:'0',
        clr:'#009688',
        bg:'#e6f5f3'
    },
    {
        month:'1 Month',
        Price:'7.29',
        clr:'#009688',
        bg:'#e6f5f3'
    },{
        month:'3 Months',
        Price:'16.93',
        clr:'#009688',
        bg:'#e6f5f3'
    },
    {
        month:'6 Months',
        Price:'35.68',
        clr:'#009688',
        bg:'#e6f5f3'
    },
    {
        month:'9 Months',
        Price:'65.28',
        clr:'#009688',
        bg:'#e6f5f3'
    },
    {
        month:'12 Months',
        Price:'95.85',
        clr:'#009688',
        bg:'#e6f5f3'
    },

]


const PaymentPlan = () => {
    const [modalvisible,setModalvisible]=useState<Boolean>(false)
    const PaymentFlatList=({ item }: { item: { month: string,Price:String,clr:string,bg:string } })=>(
        <View style={{height:RF(124),width:'98%',alignSelf:'center',borderRadius:RF(10), ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
            },
            android: {
              elevation: 5, // Use elevation for Android
            },
          }),backgroundColor:'#fff',marginVertical:RFP(1)}}>
            <View style={[styles.PriceTagView,{backgroundColor:item.bg}]}>
                <Text style={[styles.MonthTxt,{color:item.clr}]}>{item.month}</Text>
            </View>
            <Text style={styles.PriceTxt}>{'$'+item.Price}</Text>
            <View style={styles.MainSubmitView}>
               {item.Price=='0'?undefined: <View style={styles.InputSubmitView}>
                <TextInput style={styles.inputTxt} placeholder='Purpose your price!' placeholderTextColor={'gray'}/>
                </View>}
                <TouchableOpacity style={[styles.TouchableSubmit,{width:item.Price=='0'?'100%':'30%'}]} onPress={()=>handleSubmit()}>
                    <Text style={styles.SubmitTxt}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    const handleSubmit =()=>{
       
    }

  return (
  <SafeAreaView style={{flex:1,backgroundColor:"#e9e7ed"}}>
   

    <View style={styles.Toptab}>
        <Text style={styles.MainHeadiing}>Pricing Plan</Text>
    </View>
    <View style={styles.container}>
        <Text style={styles.RegularTxt}>Choose a plan or propose your price for negotiation.</Text>
        <View style={{width:"90%",alignSelf:'center',height:'73%'}}>
            <FlatList renderItem={PaymentFlatList} data={PaymentData}/>
        </View>
    </View>
  </SafeAreaView>
  )
}

export default PaymentPlan

const styles = StyleSheet.create({
    container:{height:Dimensions.get('window').height,width:'100%',backgroundColor:'rgb(255,255,255)'},
    Toptab:{height:RFP(10),justifyContent:'center'},
    MainHeadiing:{fontSize:RF(16),fontFamily:'Inter-SemiBold',marginLeft:RFP(2),color:'#313131'},
    RegularTxt:{fontSize:RF(14),fontFamily:'Inter-Regular',margin:RFP(2),color:'#313131'},
    MonthTxt:{ fontSize:RF(8),fontFamily:'Inter-SemiBold'},
    PriceTxt:{fontSize:RF(22),fontFamily:'Inter-SemiBold',marginLeft:RF(15),color:'#3F51B5'},
    SubmitTxt:{fontSize:RF(10),fontFamily:'Inter-SemiBold',color:'#fff'},
    TouchableSubmit:{height:'100%',width:'30%',backgroundColor:'#3F51B5',borderRadius:RF(90),justifyContent:'center',alignItems:'center'},
    inputTxt:{width:'90%',height:'100%',fontSize:RF(8),fontFamily:'Inter-Medium',color:'#000'},
    InputSubmitView:{height:'100%',width:'65%',backgroundColor:'#f1f1f1',borderRadius:RF(90),justifyContent:'center',alignItems:'center'},
    MainSubmitView:{height:RF(30),width:'95%',justifyContent:'space-between',alignSelf:'center',marginTop:RFP(2),flexDirection:'row'},
    PriceTagView:{height:RF(22),padding:RF(3),alignItems:'center',borderRadius:RF(10),justifyContent:'center',backgroundColor:'#e6f5f3',margin:RF(10),width:RF(60)}

})