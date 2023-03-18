import { View, Text, Button, Image, StyleSheet ,Modal, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import React, { useState } from 'react';
import Payment from './Payment.json'


import Icon from 'react-native-vector-icons/dist/AntDesign';
import Unpaidlist from './src/Components/Unpaidlist';
import Paidlist from './src/Components/Paidlist';
import { useSelector } from 'react-redux';
import CustomYearpicker from './src/Components/customYearpicker';

const InstallmentDetails = () => {
  const data= Payment.data.installment_data
  const selector = useSelector(state => state);
  console.log("Selector",selector)
   
    const data2= Payment.data.paid_template_installment_data['8__XX__Pre School Fee Receipt']
    console.log( "Data",data)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [visible,setVisible]=useState(false)
  return (
    <View style={{backgroundColor:'#FFF',
    flex:1}}>
    <View style={{backgroundColor:'#00008b',
    height:'13%',
    borderBottomLeftRadius:22,
    borderBottomRightRadius:22  }}>
    <View style={{flexDirection:'row' ,marginTop:'15%',marginLeft:'4%'}}> 
        <Icon name="arrowleft" size={20} color="white"/>
    
        <Text style={{color:'white'}}>      Online fee payment</Text>
        </View>
   </View>
   <ScrollView style={{flex:1}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{alignItems:'flex-start'}}>
    <Text  style={styles.HeaderText1}>Fee payment</Text></View>
    <View  style={{alignItems:'flex-end'}}>
      <CustomYearpicker/>
    </View>
    </View>
   
      <View>
        <View style={styles.root}>
        <Text style={styles.HeaderTextDue}> Due fee</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('./Assets/moneyimage.png')}  style={{height:27,width:35,margin:5}}/>
            <Text style={styles.HeaderText}>₹ {selector.Selectamount}</Text>
           </View>
           
            <Button title='paynow'/>
        </View>
        </View>
    
        <Text style={styles.HeaderTextUnPaid}>Unpaid Installment</Text>
        <FlatList 
      data={Object.keys(data)}
      renderItem={(({item })=>(
        <Unpaidlist item={item}items={data[item]} feecycle={data[item].feecycle} />
       
      ))}
      />
      <Text  style={styles.HeaderTextPaid}>Paid Installment</Text>
        <FlatList 
      data={Object.keys(data2)}
      renderItem={(({item})=>(
        <Paidlist item={item}items={data2[item]}/>
       
      ))}
      />
      
      
       
     

        
       
       
      </View>
      </ScrollView>
      <View style={{backgroundColor:'#00008b',
    height:'4%',
  
}}></View>
  
    </View>
    
  )
}


const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    margin:10,
    padding:5,
    height:80
  },
 
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    rightContainer: {
        padding: 10,
        flex: 3,
      },
      HeaderTextDue:{ fontSize: 15,
        fontWeight: 'bold',color:'red',paddingLeft:15 },
    HeaderText:{ fontSize: 18,
      fontWeight: 'bold',margin:5 },
      HeaderText1:{ fontSize: 18,
        fontWeight: 'bold' },
    HeaderTextUnPaid:{ fontSize: 18,
      fontWeight: 'bold',color:'red',paddingLeft:15 },
      HeaderTextPaid:{ fontSize: 18,
        fontWeight: 'bold',color:'green',paddingLeft:15 },
  });
  

export default InstallmentDetails