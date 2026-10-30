import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import CollectionScreen from '../screens/CollectionScreen';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

const Stack = createStackNavigator();

//stack navigator til Hjem fanen: starter på forsiden og "pusher" til booking eller kollektion
export default function HomeStack({ addFavorite, favoritter, addBooking }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle,
        headerTintColor: Colors.textLight,
      }}
    >
      {/* skærmen hedder "Forside", så den ikke har samme navn som fanen "Hjem" */}
      <Stack.Screen name="Forside" component={HomeScreen} options={{ title: 'Allure' }} />
      {/* funktion så vi selv kan sende addBooking og favoritter med til BookingScreen */}
      <Stack.Screen name="Book tid">
        {(props) => <BookingScreen {...props} addBooking={addBooking} favoritter={favoritter} />}
      </Stack.Screen>

      {/* funktion så vi selv kan sende addFavorite med til CollectionScreen */}
      <Stack.Screen name="Kollektion">
        {(props) => <CollectionScreen {...props} addFavorite={addFavorite} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}