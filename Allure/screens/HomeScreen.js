import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import NewsCard from '../components/NewsCard';
import { NYHEDER } from '../data/const';
import { GlobalStyles } from '../styles/GlobalStyles';

//forsiden: en opslagstavle man kan scrolle i, med fashion show, knapper og nyheder
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      {/* billede fra seneste fashion show, ligger i assets mappen */}
      <Image source={require('../assets/fashionshow.png')} style={GlobalStyles.heroImage} />
      <Text style={GlobalStyles.heroText}>Seneste fashion show</Text>

      {/* knapper der navigerer til skærmene i HomeStack */}
      <View style={GlobalStyles.buttonRow}>
        <ButtonComponent title="Book tid" onPress={() => navigation.navigate('Book tid')} />
        <ButtonComponent
          title="Se nyeste kollektion"
          variant="secondary"
          onPress={() => navigation.navigate('Kollektion')}
        />
      </View>

      {/* opslagstavlen: en NewsCard pr. nyhed i listen */}
      <Text style={GlobalStyles.sectionTitle}>Nyheder</Text>
      {NYHEDER.map((nyhed) => (
        <NewsCard key={nyhed.id} nyhed={nyhed} />
      ))}
    </ScrollView>
  );
}