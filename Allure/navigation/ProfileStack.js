import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import BookingScreen from '../screens/BookingScreen';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

const Stack = createStackNavigator();

//stack navigator til Profil fanen: starter på profilen og "pusher" til booking
export default function ProfileStack({ bookinger, removeBooking, addBooking, favoritter }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle,
        headerTintColor: Colors.textLight,
      }}
    >
      {/* funktion så vi selv kan sende bookinger og removeBooking med til ProfileScreen */}
      <Stack.Screen name="Min profil">
        {(props) => <ProfileScreen {...props} bookinger={bookinger} removeBooking={removeBooking} />}
      </Stack.Screen>

      {/* funktion så vi selv kan sende addBooking og favoritter med til BookingScreen */}
      <Stack.Screen name="Book tid">
        {(props) => <BookingScreen {...props} addBooking={addBooking} favoritter={favoritter} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}