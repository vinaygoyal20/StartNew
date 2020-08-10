import React, {Fragment, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Home, Fav, Message, Profile} from '../Screens';
import TabBar from './TabNavigator';
import CustomDrawer from '../Components/CustomDrawer';

const Drawer = createDrawerNavigator();



export default function Routes(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="tabStack" component={TabBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
