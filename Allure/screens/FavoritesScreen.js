import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser de produkter kunden har gemt (fanen "Favoritter")
export default function FavoritesScreen({ favoritter, removeFavorite }) {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Mine favoritter</Text>
      {favoritter.length === 0 ? (
        //vises hvis kunden ikke har gemt noget endnu
        <Text>Du har ikke gemt nogen favoritter endnu.</Text>
      ) : (
        
        //flatList renderer et ProductCard pr. favorit, med en "Fjern" knap
        <FlatList
          data={favoritter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard produkt={item} knapTekst="Fjern" onPress={() => removeFavorite(item.id)} />
          )}
        />
      )}
    </View>
  );
}