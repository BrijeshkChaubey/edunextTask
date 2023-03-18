import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Color';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    margin: 20,
    marginTop: 80,
    padding: 15,
    borderRadius: 10,
    height: '85%',
  },
  HeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    borderWidth: 1,
    borderColor: Colors.Red,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.Light_red,
    padding: 2,
    height: 40,
    marginBottom: 15,
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
    color: Colors.ruppecolor,
  },
  Feedetails: {
    fontWeight: 'bold',
    color: Colors.Brown,
  },
  innerroots: {
    borderWidth: 1,
    borderColor: Colors.Blue,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: 20,
    backgroundColor: Colors.Light_Blue,
  },
  Paidtext: {
    fontWeight: 'bold',
    color: Colors.Red,
  },
  Viewstyle: {
    width: 80,
    height: 60,
    alignSelf: 'center',
    borderRadius: 30,
  },
});
