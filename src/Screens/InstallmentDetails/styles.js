import {StyleSheet} from 'react-native';
import { Colors } from '../../Constants/Color';
import { hp, wp } from '../../Constants/Dimensions';

export const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: Colors.Blue,
    borderRadius: 10,
    backgroundColor: Colors.White,
    marginVertical: hp('1.5%'),
    margin: hp('2%'),
    padding: hp('0.5%'),
    height: hp("10%"),
    shadowColor: Colors.Dark_blue,
    shadowOpacity: 0.26,
    shadowOffset: { width:0, height: 5},
    shadowRadius: 10,
    elevation: 10,
    
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: hp("3%"),
  },
  checkbox: {
    alignSelf: 'center',
  },
 
  HeaderTextDue: {
    fontSize: hp("2%"),
    fontWeight: 'bold',
    color: Colors.Red,
    paddingLeft: wp("3%"),
  },
  HeaderText: {fontSize: hp("2.3%"), fontWeight: 'bold', margin: hp("0.8%")},
  HeaderText1: {fontSize:  hp("2.3%"), fontWeight: 'bold'},
  HeaderTextUnPaid: {
    fontSize: hp("2.2%"),
    fontWeight: 'bold',
    color: Colors.Red,
    paddingLeft: hp('2.5%'),
  },
  HeaderTextPaid: {
    fontSize: hp("2.3%"),
    fontWeight: 'bold',
    color: Colors.Green,
    paddingLeft: hp('2.5%'),
  },

  header: {
    backgroundColor: Colors.Dark_blue,
    height: hp('13%'),
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  inneeView1: {
  flexDirection: 'row',
   marginTop: hp('8%'),
    marginLeft: wp('5%')},
    innerroot:{
      flexDirection:'row'
      ,justifyContent:'space-between'
    },
    innerView2:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: hp('1.5%'),
    },
    footer:{
      backgroundColor:Colors.Dark_blue ,
       height: hp('6%')
    }
});
