import React from 'react';
import { View, Text, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser ét produkt med billede, navn og pris
export default function ProductCard({ produkt }) {
  return (
    <View style={GlobalStyles.productCard}>
      {/* produktbilledet: API'et sender billedet som en url i feltet "thumbnail" */}
      <Image source={{ uri: produkt.thumbnail }} style={GlobalStyles.productImage} />

      {/* teksten til højre for billedet: produktets navn og pris */}
      <View style={{ flex: 1 }}>
        <Text style={GlobalStyles.productTitle}>{produkt.title}</Text>
        <Text style={GlobalStyles.productPrice}>$ {produkt.price}</Text>
      </View>
    </View>
  );
}