import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';

export default function Header({onPressLeft}) {
  const navigation = useNavigation();
  return (
    <View
      style={{height: moderateScale(48), justifyContent:"center", backgroundColor: colors.themeMain}}>
      <Text
        onPress={() => navigation.openDrawer()}
        style={{fontSize: 16, fontWeight: 'bold', color: colors.white}}>
        Open Drawer
      </Text>
    </View>
  );
}
