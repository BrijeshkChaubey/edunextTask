import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const CustomYearpicker = () => {
    const datas = [
        { label: "2022-23", value: '1' },
        { label: "2021-22", value: '2' },
        { label: "2020-21", value: '3' },
        { label: "2019-20", value: '4' },
    ];
    const [label, setLabel] = useState('');
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  

  return (
    <View style={styles.container}>
   
    <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={datas}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"2022-23"}
        searchPlaceholder="2022-23"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
            setValue(item.value);
            setLabel(item.label)
            setIsFocus(false);
        }}

    />
</View>
  )
}

export default CustomYearpicker

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        
    },
    container: {
       
        width: '300%',
        padding: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        padding: 3,
    },
})