import React from 'react';
import {View, Text} from 'react-native';
import {Login} from '../Screens';

export default function(Stack) {
  return (
    <Stack.Screen
      name="login"
      component={Login}
      options={{headerShown: false}}
    />
  );
}
