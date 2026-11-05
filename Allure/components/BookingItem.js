import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser én booking i listen under "Mine bookinger"
export default function BookingItem({ booking, onCancel }) {
  return (
    <View style={GlobalStyles.bookingItem}>
      <View style={{ flex: 1 }}>
        <Text style={GlobalStyles.bookingItemText}>
          {booking.dato} – {booking.valgtFA}
        </Text>

        {/* kommentaren vises kun, hvis kunden har skrevet en */}
        {booking.kommentar ? (
          <Text style={GlobalStyles.bookingItemComment}>{booking.kommentar}</Text>
        ) : null}

        {/* Firebase gemmer ikke tomme lister, så vi tjekker først, om der overhovedet er favoritter */}
        {booking.favoritter && booking.favoritter.length > 0 ? (
          <Text style={GlobalStyles.bookingItemComment}>Favoritter: {booking.favoritter.join(', ')}</Text>
        ) : null}
      </View>

      {/* annullér knappen sender bookingens id videre til onCancel, som fjerner den fra listen */}
        <Pressable style={GlobalStyles.smallBtn} onPress={() => onCancel(booking.key)}>
        <Text style={GlobalStyles.smallBtnText}>Annullér</Text>
        </Pressable>
    </View>
  );
}