import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Color";
import { hp, wp } from "../../Constants/Dimensions";

export const styles = StyleSheet.create({
    root: {
      borderWidth: 1,
      borderColor: Colors.Red,
      borderRadius: 10,
      backgroundColor: Colors.Light_red,
      marginVertical: hp('1.5%'),
      margin: hp('2%'),
      padding: hp('0.5%'),
      height: hp("10%"),
      shadowColor: Colors.Black,
      shadowOpacity: 0.26,
      shadowOffset: { width:0, height: 2},
      shadowRadius: 10,
      elevation: 10,
      
    },
    HeaderText: {
      fontSize: hp('2%'),
      fontWeight: 'bold',
    },
 
    innerroot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    insideroot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp('2.8%'),
    },
    Paidtext: {
      fontWeight: 'bold',
      color: Colors.Red,
    },
    ruppe: {
      fontWeight: 'bold',
      color: Colors.ruppecolor,
    },
    Feedetails: {
      fontWeight: 'bold',
      color: Colors.Brown,
    },
  });
  