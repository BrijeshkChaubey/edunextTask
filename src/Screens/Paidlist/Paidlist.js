import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Paidlist = ({...props}) => {
   const  data=props
    console.log("props paid",data)
  return (
    <View  style={styles.root}>
    <View style={styles.innerroot}>
       
        <Text style={styles.HeaderText}>{data.item}</Text>
        <Text style={styles.ruppe}>₹ {data.items.totalpaidamount}</Text>
    </View>
    <View style={styles.insideroot}>
        <Text style={styles.Paidtext}>Duedate:{data.items.installment_intimate_date}</Text>
        <Text  style={styles.Paidtext}>Fee status:{data.items.status}</Text>
        
    </View>
</View>
  )
}

export default Paidlist

