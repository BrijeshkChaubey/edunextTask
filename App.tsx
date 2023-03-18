/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import InstallmentDetails from './InstallmentDetails';
import { store } from './src/redux/store';


const App=()=>{
  return (
    <Provider store={store}>
        <InstallmentDetails/>
    </Provider>
  
   
  )
}

export default App;
