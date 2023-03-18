import {  StyleSheet } from 'react-native'
import { Colors } from '../../Constants/Color'
export const styles = StyleSheet.create({
  innerView3:{
    backgroundColor: '#00008b',
     height: '4%'
  },
    root: {
        borderWidth: 1,
        borderColor: Colors.Green,
        borderRadius: 10,
       
        marginVertical: 5,
        margin:10,
        padding:5,
        height:80,
        shadowColor: Colors.Black,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: Colors.Light_green
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
        color:Colors.Green,
      },
      ruppe:{
        fontWeight:'bold',
        color:Colors.ruppecolor
      },
      
     
})