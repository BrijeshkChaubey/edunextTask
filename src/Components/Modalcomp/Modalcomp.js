import { View, Text, StyleSheet, Modal, FlatList, Button } from 'react-native'
import React from 'react'
import Modalcard from '../Modalcard/Modalcard'
import { texts } from '../../Constants/Text'
import { styles } from './styles'

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
        padding: 15,
        borderRadius: 10,
        height: '85%',
      }}>
      <Text style={styles.HeaderText}>Fee details</Text>
      <View style={styles.innerroots}>
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
      
      </View>
      <View style={styles.amount}>
        <Text style={styles.HeaderText} >Sub Total</Text>
        <Text style={styles.Paidtext}> {`${texts.ruppes_symbol} ${data.Newamount}`}</Text>
      </View>
      
      <Text style={styles.HeaderText}>Total Ammount</Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Sub Total</Text>
        <Text style={styles.Paidtext}> {`${texts.ruppes_symbol} ${data.Newamount}`} </Text>
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
