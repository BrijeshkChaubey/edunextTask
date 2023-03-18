import {StyleSheet} from 'react-native';
import { Colors } from '../../Constants/Color';

export const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:Colors.White ,
    marginVertical: 5,
    margin: 10,
    padding: 5,
    height: 80,
    shadowColor: Colors.Black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
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
  HeaderTextDue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.Red,
    paddingLeft: 15,
  },
  HeaderText: {fontSize: 18, fontWeight: 'bold', margin: 5},
  HeaderText1: {fontSize: 18, fontWeight: 'bold'},
  HeaderTextUnPaid: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Red,
    paddingLeft: 15,
  },
  HeaderTextPaid: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Green,
    paddingLeft: 15,
  },

  innerView: {
    backgroundColor: '#00008b',
    height: '13%',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  inneeView1: {
  flexDirection: 'row',
   marginTop: '15%',
    marginLeft: '4%'},
    innerroot:{
      flexDirection:'row'
      ,justifyContent:'space-between'
    },
    innerView2:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    }
});
