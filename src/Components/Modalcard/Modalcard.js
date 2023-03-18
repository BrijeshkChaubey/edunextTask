import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from  '@react-native-community/checkbox';
import { styles } from './styles';
import { texts } from '../../Constants/Text';

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
    
   
      <Text style={styles.ruppe}> {`${texts.Totalefee}${texts.ruppes_symbol} ${data.payableamount}`}</Text>
    </View>
  )
}

