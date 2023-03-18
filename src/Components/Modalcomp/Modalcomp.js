import { View, Text, StyleSheet, Modal, FlatList, Button } from 'react-native'
import React from 'react'
import Modalcard from '../Modalcard/Modalcard'
import { texts } from '../../Constants/Text'
import { styles } from './styles'

const Modalcomp = ({...props}) => {
    const data= props
   
  return (
    
     <Modal transparent={true} visible={ data.visible}>
    <View style={{backgroundColor: '#000000aa'}}>
    <View
      style={styles.root}>
      <Text style={styles.HeaderText}> {`${texts.Fee_details} `}</Text>
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
        <Text style={styles.HeaderText} > {`${texts.Sub_Total} `}</Text>
        <Text style={styles.Paidtext}> {`${texts.ruppes_symbol} ${data.Newamount}`}</Text>
      </View>
      
      <Text style={styles.HeaderText}>{`${texts.Total_Ammount} `}</Text>

      <View
        style={styles.innerroot}>
        <Text>{`${texts.Sub_Total} `}</Text>
        <Text style={styles.Paidtext}> {`${texts.ruppes_symbol} ${data.Newamount}`} </Text>
      </View>
      <View
        style={styles.Viewstyle}>
        <Button title="Select" onPress={() => {data.Modalfunctionality()}} />
      </View>
    </View>
  </View>
   </Modal>
  )
}

export default Modalcomp
