import { View, Text, Button, Image, StyleSheet ,Modal, TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react';
import Payment from './Payment.json'

import CheckBox from  '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const InstallmentDetails = () => {
    const data = Payment.data.installment_data
    console.log(data)
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
   <View style={{flex:1}}>
    <View style={{alignItems:'flex-start'}}><Text>Fee payment</Text></View>
    <View  style={{alignItems:'flex-end'}}><Text> calender</Text></View>
      <View>
        <View style={styles.root}>
        <Text style={{color:'red'}}> Due fee</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('./Assets/moneyimage.png')}  style={{height:20,width:23}}/>
           
            <Text>Amount</Text>
            <Button title='paynow'/>
        </View>
        </View>
        <Modal
        transparent={true}
        visible={visible}>
        <View style={{backgroundColor:'#000000aa',flex:1}}>
        <View style={{backgroundColor:'#ffffff',margin:50,padding:40,borderRadius:10,flex:1}}>
            <Text>Modal text</Text>
            <Button title='Select' onPress={()=>setVisible(false)}/>
        </View>

        </View>
        </Modal>
        <Text style={{color:'red'}}>Unpaid installment</Text>
        
       <FlatList
       data={data}
       renderItem={({item})=>(
        <View  style={styles.root}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
        <CheckBox disabled={false}value={toggleCheckBox}onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
        <Text>item</Text>
     </View>

           
            <Text>{data['INSTALLMENT 5'].paidamount}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Due date</Text>
            <TouchableOpacity onPress={()=>setVisible(true)}>
            <Text>Feedetail Button</Text>
            </TouchableOpacity>
           
        </View>
    </View>
       )}/>

        <Text  style={{color:'green'}}>paid installment</Text>

        <View  style={styles.root}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               
                <Text>Installment</Text>
                <Text>Amount</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Due date</Text>
                <Text>Fee status</Text>
                
            </View>
        </View>
      </View>
      </View>
      <View style={{backgroundColor:'#00008b',
    height:'4%',
  
}}></View>
  
    </View>
    
  )
}


const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
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
    label: {
      margin: 8,
    },
  });
  

export default InstallmentDetails