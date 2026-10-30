import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser ét produkt med billede, navn, pris og en knap
//genbruges i både kollektionen (knap: Gem) og favoritter (knap: Fjern)
export default function ProductCard({ produkt, knapTekst, onPress }) {
  return (
    <View style={GlobalStyles.productCard}>
      {/* produktbilledet: API'et sender billedet som en url i feltet "thumbnail" */}
      <Image source={{ uri: produkt.thumbnail }} style={GlobalStyles.productImage} />

      {/* teksten til højre for billedet: produktets navn og pris */}
      <View style={{ flex: 1 }}>
        <Text style={GlobalStyles.productTitle}>{produkt.title}</Text>
        <Text style={GlobalStyles.productPrice}>$ {produkt.price}</Text>
      </View>

      {/* knappen til højre, teksten og funktionen bestemmes af skærmen der bruger komponenten */}
      <Pressable style={GlobalStyles.smallBtn} onPress={onPress}>
        <Text style={GlobalStyles.smallBtnText}>{knapTekst}</Text>
      </Pressable>
    </View>
  );
}