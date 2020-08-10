import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import ListItemHorizontal from './ListItemHorizontal';
import {moderateScale,moderateScaleVertical} from "../styles/responsiveSize";
const CustomDrawer = (props) => {
  const moveToNewScreen = (screenName, data) => () => {
    props.navigation.navigate(screenName, data);
  };

  const moveToNewTabScreen = (screen) => () => {
    props.navigation.navigate('tabBar', {screen});
  };

  return (
    <DrawerContentScrollView>
      <View style={{paddingTop: moderateScaleVertical(20)}}>
        <TouchableOpacity style={{marginBottom:25,}} onPress={() => props.navigation.closeDrawer()}>
          <Text style={{fontSize:18,fontWeight:"bold"}}> Close</Text>
        </TouchableOpacity>

        <ListItemHorizontal lblText="Home" onPress={moveToNewScreen('home')} />
        <ListItemHorizontal lblText="Fav" onPress={moveToNewScreen('fav')} />
        <ListItemHorizontal lblText="Message" onPress={moveToNewScreen('message')} />
        <ListItemHorizontal lblText="Profile" onPress={moveToNewScreen('profile')} />
        {/* <ListItemWithIcon
          imgUrl={imagePath.doctor}
          onPress={moveToNewTabScreen('doctor')}
          lblText="Doctor"
        />
        <ListItemWithIcon
          imgUrl={imagePath.hospital}
          onPress={moveToNewTabScreen('hospital')}
          lblText="Hospital"
        /> */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
