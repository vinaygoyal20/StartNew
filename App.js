/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {Provider} from 'react-redux';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};



export default App;
