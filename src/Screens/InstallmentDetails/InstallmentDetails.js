import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Payment from '../../Constants/Payment.json';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Unpaidlist from '../Unpaidlist/Unpaidlist';
import Paidlist from '../Paidlist/Paidlist';
import {useSelector} from 'react-redux';
import CustomYearpicker from '../../Components/Customyearpicker/customYearpicker';
import {styles} from './styles';
import {texts} from '../../Constants/Text';
import { Colors } from '../../Constants/Color';
import { hp, wp } from '../../Constants/Dimensions';

const InstallmentDetails = () => {
  const data = Payment.data.installment_data;
  const selector = useSelector(state => state);
  

  const data2 =
    Payment.data.paid_template_installment_data[
      '8__XX__Pre School Fee Receipt'
    ];
  console.log('Data', data);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <View
        style={styles.header}>
        <View
          style={styles.inneeView1}>
          <Icon name="arrowleft" size={20} color={Colors.White} />

          <Text style={{color: Colors.White}}>   {`${texts.Online_fee_payment}`} </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.innerroot}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.HeaderText1}>{`${texts.Fee_payment}`}</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <CustomYearpicker />
          </View>
        </View>

        <View>
          <View style={styles.root}>
            <Text style={styles.HeaderTextDue}> {`${texts.Due_fee}`}</Text>
            <View
              style={styles.innerView2}>
              <View style={{flexDirection: 'row'}}>
                <Card.Cover
               
                source={require('../../../Assets//moneyimage.png')}
                style={{height: hp("4%"), width: wp("9%"), margin:wp("0.5%")}}
                resizeMode="contain"
              />
                
                <Text style={styles.HeaderText}>
                  {`${texts.ruppes_symbol} ${selector.Selectamount}`}
                </Text>
              </View>

              <Button title="paynow" />
            </View>
          </View>

          <Text style={styles.HeaderTextUnPaid}> {`${texts.Unpaid_Installment}`}</Text>
          <FlatList
            data={Object.keys(data)}
            renderItem={({item}) => (
              <Unpaidlist
                item={item}
                items={data[item]}
                feecycle={data[item].feecycle}
              />
            )}
          />
          <Text style={styles.HeaderTextPaid}>{`${texts.paid_Installment}`}</Text>
          <FlatList
            data={Object.keys(data2)}
            renderItem={({item}) => (
              <Paidlist item={item} items={data2[item]} />
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
};

export default InstallmentDetails;
