import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import commonStyles from '../styles/commonStyles';
import { textScale, moderateScaleVertical, moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';

export default function ListItemHorizontal(
  {lblText, onPress = () => {}},
  txtStyle = {},
) {
  return (
    <TouchableOpacity style={{paddingVertical:10, paddingHorizontal:moderateScale(16), backgroundColor:colors.black50,marginBottom:10}} onPress={onPress}>
      <Text style={{fontSize:textScale(18), ...txtStyle, }}>{lblText}</Text>
    </TouchableOpacity>
  );
}
