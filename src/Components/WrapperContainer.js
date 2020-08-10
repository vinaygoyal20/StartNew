import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import Loader from './Loader';
import colors from '../styles/colors';

const WrapperContainer = ({children, isLoading,statusBarColor=colors.themeMain,barStyle="light-content"}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.themeMain}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{flex:1,backgroundColor:colors.white}}>
      {children}
      </View>
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default WrapperContainer;