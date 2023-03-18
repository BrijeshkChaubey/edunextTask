import {  StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    root: {
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
      margin:10,
      padding:5,
      height:80
    },
   
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      rightContainer: {
          padding: 10,
          flex: 3,
        },
        HeaderTextDue:{ fontSize: 15,
          fontWeight: 'bold',color:'red',paddingLeft:15 },
      HeaderText:{ fontSize: 18,
        fontWeight: 'bold',margin:5 },
        HeaderText1:{ fontSize: 18,
          fontWeight: 'bold' },
      HeaderTextUnPaid:{ fontSize: 18,
        fontWeight: 'bold',color:'red',paddingLeft:15 },
        HeaderTextPaid:{ fontSize: 18,
          fontWeight: 'bold',color:'green',paddingLeft:15 },
    });
    