import React from 'react';
import { View, Text, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser én nyhed eller ét arrangement med titel, tekst og evt. billede
export default function NewsCard({ nyhed }) {
  return (
    <View style={GlobalStyles.newsCard}>
      <Text style={GlobalStyles.newsTitle}>{nyhed.titel}</Text>
      <Text style={GlobalStyles.newsText}>{nyhed.tekst}</Text>

      {/* billedet vises under teksten, men kun hvis nyheden har et (fx en invitation) */}
      {nyhed.billede ? <Image source={nyhed.billede} style={GlobalStyles.newsImage} /> : null}
    </View>
  );
}