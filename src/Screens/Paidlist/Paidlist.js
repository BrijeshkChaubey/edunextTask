import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { texts } from '../../Constants/Text'

const Paidlist = ({...props}) => {
   const  data=props
    
  return (
    <View  style={styles.root}>
    <View style={styles.innerroot}>
       
        <Text style={styles.HeaderText}>{data.item}</Text>
        <Text style={styles.ruppe}>{`${texts.ruppes_symbol} ${data.items.totalpaidamount}`} </Text>
    </View>
    <View style={styles.insideroot}>
        <Text style={styles.Paidtext}> {`${texts.Duedate}${data.items.installment_intimate_date}`}</Text>
        <Text  style={styles.Paidtext}> {`${texts.Fee_status}${data.items.status}`}</Text>
        
    </View>
</View>
  )
}

export default Paidlist

