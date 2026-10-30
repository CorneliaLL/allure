import React from 'react';
import { Pressable, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//genbrugelig knap: variant styrer om den ser primær (sort) eller sekundær (hvid) ud
export default function ButtonComponent({ title, onPress, variant = 'primary' }) {

  //vælger den rigtige style ud fra variant
  const btnStyle = variant === 'primary' ? GlobalStyles.primaryBtn : GlobalStyles.secondaryBtn;
  const textStyle = variant === 'primary' ? GlobalStyles.primaryBtnText : GlobalStyles.secondaryBtnText;

  return (
    <Pressable style={btnStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}