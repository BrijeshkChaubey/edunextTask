import { View, Text, Button, Image, StyleSheet ,Modal, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import React, { useState } from 'react';
import Payment from '../../Constants/Payment.json'


import Icon from 'react-native-vector-icons/dist/AntDesign';
import Unpaidlist from '../Unpaidlist/Unpaidlist';
import Paidlist from '../Paidlist/Paidlist';
import { useSelector } from 'react-redux';
import CustomYearpicker from '../../Components/Customyearpicker/customYearpicker';
import { styles } from './styles';

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
            <Image source={require('../../../Assets//moneyimage.png')}  style={{height:27,width:35,margin:5}}/>
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




export default InstallmentDetails