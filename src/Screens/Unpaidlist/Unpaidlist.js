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
import Modalcard from '../../Components/Modalcard/Modalcard';
import {useDispatch} from 'react-redux';
import {
  AddselectedamountAction,
  SubselectedamountAction,
} from '../../redux/action';
import {texts} from '../../Constants/Text';
import Modalcomp from '../../Components/Modalcomp/Modalcomp';
import { styles } from './styles';

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

          <Text style={styles.ruppe}>{`${texts.ruppes_symbol} ${data.items.paidamount}`} </Text>
        </View>
        <View style={styles.insideroot}>
          <Text style={styles.Paidtext}>
          {`${texts.Duedate}${data.items.installment_to_date}`}
            
          </Text>
          <TouchableOpacity onPress={openmodal}>
            <Text style={styles.Feedetails}>{`${texts.Feedetail}`} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Unpaidlist;

