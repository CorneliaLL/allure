import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import BookingItem from '../components/BookingItem';
import NewsCard from '../components/NewsCard';
import { KUNDE, ARRANGEMENTER } from '../data/const';
import { GlobalStyles } from '../styles/GlobalStyles';

//kundens profil med bookinger og arrangementer
export default function ProfileScreen({ navigation, bookinger, removeBooking }) {
  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      {/* kundens navn kommer fra const.js, da kunden allerede er "logget ind" i prototypen */}
      <Text style={GlobalStyles.sectionTitle}>Hej {KUNDE.navn}</Text>

      {/* knap der navigerer til booking i ProfileStack */}
      <View style={GlobalStyles.sectionSpacing}>
        <ButtonComponent title="Book tid" onPress={() => navigation.navigate('Book tid')} />
      </View>

      {/* mine bookinger: en BookingItem pr. booking, eller en tekst hvis der ingen er */}
      <Text style={GlobalStyles.sectionTitle}>Mine bookinger</Text>
      <View style={GlobalStyles.sectionSpacing}>
        {bookinger.length === 0 ? (
          <Text>Du har ingen bookinger endnu.</Text>
        ) : (
          bookinger.map((booking) => (
            <BookingItem key={booking.key} booking={booking} onCancel={removeBooking} />
          ))
        )}
      </View>

      {/* arrangementer og private sales, genbruger NewsCard fra forsiden */}
      <Text style={GlobalStyles.sectionTitle}>Arrangementer</Text>
      {ARRANGEMENTER.map((arrangement) => (
        <NewsCard key={arrangement.id} nyhed={arrangement} />
      ))}
    </ScrollView>
  );
}