import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//midlertidig skærm, fyldes ud i et senere trin
export default function ConversationScreen() {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Samtale</Text>
    </View>
  );
}