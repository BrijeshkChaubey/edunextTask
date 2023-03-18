import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Color";

export const styles = StyleSheet.create({
    root: {
      borderWidth: 1,
      borderColor: Colors.Red,
      borderRadius: 10,
      backgroundColor: Colors.Light_red,
      marginVertical: 5,
      margin: 10,
      padding: 5,
      height: 80,
      shadowColor: Colors.Black,
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
      borderColor: Colors.Red,
      borderRadius: 10,
      backgroundColor: Colors.White,
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
      color: Colors.Red,
    },
    ruppe: {
      fontWeight: 'bold',
      color: '#9370db',
    },
    Feedetails: {
      fontWeight: 'bold',
      color: Colors.Brown,
    },
  });
  