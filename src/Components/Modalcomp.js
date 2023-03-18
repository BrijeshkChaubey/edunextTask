import { View, Text, StyleSheet, Modal, FlatList, Button } from 'react-native'
import React from 'react'
import Modalcard from './Modalcard'
import { texts } from '../Constants/Text'

const Modalcomp = ({...props}) => {
    const data= props
    console.log("Modalcomp",data.data.feecycle)
  return (
    
     <Modal transparent={true} visible={ data.visible}>
    <View style={{backgroundColor: '#000000aa'}}>
    <View
      style={{
        backgroundColor: '#ffffff',
        margin: 20,
        marginTop: 80,
        padding: 20,
        borderRadius: 10,
        height: '80%',
      }}>
      <Text style={styles.HeaderText}>Fee details</Text>
      <FlatList
        data={data.data.feecycle}
        renderItem={({item}) => (
          <Modalcard
            componentname={item.componentname}
            payableamount={item.payableamount}
            periodname={item.periodname}
          />
        )}
      />
      <View style={styles.amount}>
        <Text>Sub Total</Text>
        <Text> {`${texts.ruppes_symbol} ${data.Newamount}`}</Text>
      </View>
      <Text style={styles.HeaderText}>Total Ammount</Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Sub Total</Text>
        <Text> {`${texts.ruppes_symbol} ${data.Newamount}`} </Text>
      </View>
      <View
        style={{
          width: 80,
          height: 60,
          alignSelf: 'center',
          borderRadius: 30,
        }}>
        <Button title="Select" onPress={() => {data.Modalfunctionality()}} />
      </View>
    </View>
  </View>
   </Modal>
  )
}

export default Modalcomp
const styles = StyleSheet.create({
    root: {
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
      margin: 10,
      padding: 5,
      height: 80,
    },
    HeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    amount: {
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    innerroot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    insideroot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    Paidtext: {
      fontWeight: 'bold',
      color: 'red',
    },
    ruppe: {
      fontWeight: 'bold',
      color: '#9370db',
    },
    Feedetails: {
      fontWeight: 'bold',
      color: 'brown',
    },
  });
  