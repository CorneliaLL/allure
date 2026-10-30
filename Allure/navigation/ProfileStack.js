import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import BookingScreen from '../screens/BookingScreen';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

const Stack = createStackNavigator();

//stack navigator til Profil fanen: starter på profilen og "pusher" til booking
export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle,
        headerTintColor: Colors.textLight,
      }}
    >
      <Stack.Screen name="Min profil" component={ProfileScreen} />
      <Stack.Screen name="Book tid" component={BookingScreen} />
    </Stack.Navigator>
  );
}