import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from  '@react-native-community/checkbox';

export default function Modalcard({...props}) {
   const  data=props
    console.log("Modalprop",data)
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
  return (
    <View style={styles.root}>
      <View style={{flexDirection:'row' }}>
      <View style={{flexDirection:'row',width:75}}>
      <CheckBox disabled={false}value={toggleCheckBox}onValueChange={(newValue) => setToggleCheckBox(newValue)} style={{color:'blue'}}/>
      <Text style={styles.HeaderText}>{data.componentname}</Text>
      </View>
      <View style={{ marginLeft:'15%'}}>
      <Text>{data.periodname}</Text>
      </View>

      </View>
    
   
      <Text>Totalfee: ₹{data.payableamount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    backgroundColor: '#fff',
   
    
  },
  HeaderText:{ fontSize: 15,
    fontWeight: 'bold' },
})