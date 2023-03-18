import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        margin:10,
        padding:5,
        height:80
      },
      innerroot:{
        flexDirection:'row'
        ,justifyContent:'space-between'
      },
      insideroot:{
        flexDirection:'row'
        ,justifyContent:'space-between',
        marginTop:20
      },
      HeaderText:{ fontSize: 18,
        fontWeight: 'bold' },
      Paidtext:{
        fontWeight:'bold',
        color:'green',
      },
      ruppe:{
        fontWeight:'bold',
        color:'#9370db'
      }
})