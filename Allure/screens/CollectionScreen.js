import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { PRODUCTS_URL, KATEGORIER, KUNDE } from '../data/const';
import ProductCard from '../components/ProductCard';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyles } from '../styles/GlobalStyles';

//skærm med anbefalinger og den nyeste kollektion, som hentes fra et online API
export default function CollectionScreen() {
  const [anbefalinger, setAnbefalinger] = useState([]); //produkter fra kundens yndlingskategori
  const [produkter, setProdukter] = useState([]); //produkterne i den valgte kategori
  const [kategori, setKategori] = useState(KATEGORIER[0].slug); //valgt kategori, starter med tasker
  const [search, setSearch] = useState(''); //det kunden skriver i søgefeltet
  const [msg, setMsg] = useState(''); //fejlbesked, hvis API'et ikke svarer

  //henter anbefalinger: de første 3 produkter fra kundens yndlingskategori (statisk eksempel)
  const hentAnbefalinger = async () => {
    try {
      const response = await fetch(PRODUCTS_URL + KUNDE.yndlingskategori);
      const json = await response.json();
      setAnbefalinger(json.products.slice(0, 3));
    } catch (error) {
      setMsg('Error: ' + error);
    }
  };

  //henter produkterne for den valgte kategori
  const hentProdukter = async () => {
    try {
      const response = await fetch(PRODUCTS_URL + kategori);
      const json = await response.json();
      setProdukter(json.products);
    } catch (error) {
      setMsg('Error: ' + error);
    }
  };

  //anbefalingerne hentes én gang, når skærmen åbnes
  useEffect(() => {
    hentAnbefalinger();
  }, []);

  //produkterne hentes når skærmen åbnes og igen hver gang kategorien skiftes
  useEffect(() => {
    hentProdukter();
  }, [kategori]);

  //søgefunktion: viser kun produkter hvor navnet indeholder det kunden har skrevet
  const filtreredeProdukter = produkter.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      {/* anbefalinger til kunden */}
      <Text style={GlobalStyles.sectionTitle}>Anbefalet til dig</Text>
      {anbefalinger.map((produkt) => (
        <ProductCard key={produkt.id} produkt={produkt} />
      ))}

      {/* den nyeste kollektion med søgefelt og kategorier */}
      <Text style={GlobalStyles.sectionTitle}>Nyeste kollektion</Text>
      <TextInput
        style={GlobalStyles.searchInput}
        placeholder="Søg i kollektionen..."
        value={search}
        onChangeText={setSearch}
      />

      {/* en knap pr. kategori, den valgte er sort og de andre hvide */}
      <View style={GlobalStyles.categoryRow}>
        {KATEGORIER.map((k) => (
          <ButtonComponent
            key={k.slug}
            title={k.navn}
            variant={kategori === k.slug ? 'primary' : 'secondary'}
            onPress={() => setKategori(k.slug)}
          />
        ))}
      </View>

      {/* produkterne der matcher søgningen */}
      {filtreredeProdukter.map((produkt) => (
        <ProductCard key={produkt.id} produkt={produkt} />
      ))}

      {/* vises kun hvis der er en fejlbesked */}
      <Text>{msg ? msg : ''}</Text>
    </ScrollView>
  );
}