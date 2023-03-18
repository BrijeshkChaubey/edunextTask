import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Modalcard from './Modalcard';
import {useDispatch} from 'react-redux';
import {
  AddselectedamountAction,
  SubselectedamountAction,
} from '../redux/action';
import {texts} from '../Constants/Text';
import Modalcomp from './Modalcomp';

const Unpaidlist = ({...props}) => {
  const data = props;
  var Newamount = 0;
  for (let i = 0; i < data.feecycle.length; i++) {
    Newamount = Newamount + parseInt(data.feecycle[i].payableamount);
  }
  console.log('AddedAmount', Newamount);

  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Value, setValue] = useState(false);
  const openmodal = () => {
    setVisible(true);
  };
  const ammount = data.items.paidamount;
  const changeamount = newValue => {
    setToggleCheckBox(newValue);
    if (newValue === true) {
      dispatch(AddselectedamountAction(ammount));
    } else {
      dispatch(SubselectedamountAction(ammount));
    }
  };
  const Modalfunctionality = () => {
    Returnfrommodal();
    setVisible(false);
    changeamount(true);
  };
  const Returnfrommodal = () => {
    setToggleCheckBox(true);
  };
  return (
    <View>
      <View>
      <Modalcomp visible={visible} Newamount={Newamount} data={data} Modalfunctionality={Modalfunctionality}  />
      </View>

      <View style={styles.root}>
        <View style={styles.innerroot}>
          <View style={styles.innerroot}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => {
                changeamount(newValue);
              }}
            />
            <Text style={styles.HeaderText}>{data.item}</Text>
          </View>

          <Text style={styles.ruppe}>₹ {data.items.paidamount}</Text>
        </View>
        <View style={styles.insideroot}>
          <Text style={styles.Paidtext}>
            Duedate:{data.items.installment_to_date}
          </Text>
          <TouchableOpacity onPress={openmodal}>
            <Text style={styles.Feedetails}>Feedetail >> </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Unpaidlist;

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    margin: 10,
    padding: 5,
    height: 80,
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
