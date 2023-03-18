import {  StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
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