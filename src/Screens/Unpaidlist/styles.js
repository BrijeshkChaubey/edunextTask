import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 10,
      backgroundColor: 'rgb(250,240,240)',
      marginVertical: 5,
      margin: 10,
      padding: 5,
      height: 80,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width:0, height: 2},
      shadowRadius: 10,
      elevation: 10,
      
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
  