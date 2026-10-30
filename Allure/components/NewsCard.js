import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser én nyhed på opslagstavlen med titel og tekst
export default function NewsCard({ nyhed }) {
  return (
    <View style={GlobalStyles.newsCard}>
      <Text style={GlobalStyles.newsTitle}>{nyhed.titel}</Text>
      <Text style={GlobalStyles.newsText}>{nyhed.tekst}</Text>
    </View>
  );
}