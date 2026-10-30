import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ref, push, remove, onValue } from 'firebase/database';
import { rtdb } from './database/firebase';
import HomeStack from './navigation/HomeStack';
import ProfileStack from './navigation/ProfileStack';
import ChatStack from './navigation/ChatStack';
import FavoritesScreen from './screens/FavoritesScreen';
import { GlobalStyles, Colors } from './styles/GlobalStyles';

//opretter Tab Navigatoren, som er fanerne i bunden af appen
const Tab = createBottomTabNavigator();

//laver Firebase objektet { key: data } om til en liste, hvor hver del også har sin key
//key bruges til at finde og slette den rigtige del i databasen
const tilListe = (data) => Object.keys(data || {}).map((key) => ({ key, ...data[key] }));

//favoritter og bookinger hentes fra Firebase og sendes som props, så flere skærme kan bruge dem
export default function App() {
  const [favoritter, setFavoritter] = useState([]);
  const [bookinger, setBookinger] = useState([]);

  //lytter på "Favorites" og "Bookings" i Firebase, så listerne opdateres med det samme (som CarList i øvelse 05)
  useEffect(() => {
    const unsubscribeFavorites = onValue(ref(rtdb, 'Favorites'), (snapshot) => {
      setFavoritter(tilListe(snapshot.val()));
    });
    const unsubscribeBookings = onValue(ref(rtdb, 'Bookings'), (snapshot) => {
      setBookinger(tilListe(snapshot.val()));
    });

    //stopper lytterne, når appen lukkes
    return () => {
      unsubscribeFavorites();
      unsubscribeBookings();
    };
  }, []);

  //gemmer et produkt i favoritter i Firebase, men kun hvis det ikke allerede er gemt
  const addFavorite = async (produkt) => {
    const findes = favoritter.filter((f) => f.id === produkt.id).length > 0;
    if (findes) {
      return Alert.alert('Allerede gemt', `${produkt.title} er allerede i dine favoritter.`);
    }
    try {
      await push(ref(rtdb, 'Favorites'), {
        id: produkt.id,
        title: produkt.title,
        price: produkt.price,
        thumbnail: produkt.thumbnail,
      });
      Alert.alert('Gemt', `${produkt.title} er gemt i dine favoritter.`);
    } catch (e) {
      Alert.alert(e?.message || 'Noget gik galt.');
    }
  };

  //fjerner en favorit fra Firebase ud fra dens key
  const removeFavorite = (key) => {
    remove(ref(rtdb, `Favorites/${key}`));
  };

  //gemmer en ny booking i Firebase
  const addBooking = async (booking) => {
    try {
      await push(ref(rtdb, 'Bookings'), booking);
    } catch (e) {
      Alert.alert(e?.message || 'Noget gik galt.');
    }
  };

  //fjerner en booking fra Firebase ud fra dens key
  const removeBooking = (key) => {
    remove(ref(rtdb, `Bookings/${key}`));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //farver og styling hentes fra GlobalStyles, så al styling ligger samlet ét sted
          headerStyle: GlobalStyles.header,
          headerTitleStyle: GlobalStyles.headerTitle,
          tabBarStyle: GlobalStyles.tabBar,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.inactive,

          //vælger ikon ud fra hvilken fane det er og om den er aktiv
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Hjem') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Favoritter') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* funktion så vi selv kan sende favoritter og bookinger med til HomeStack */}
        <Tab.Screen name="Hjem" options={{ headerShown: false }}>
          {(props) => (
            <HomeStack {...props} addFavorite={addFavorite} favoritter={favoritter} addBooking={addBooking} />
          )}
        </Tab.Screen>

        {/* funktion så vi selv kan sende bookinger og favoritter med til ProfileStack */}
        <Tab.Screen name="Profil" options={{ headerShown: false }}>
          {(props) => (
            <ProfileStack
              {...props}
              bookinger={bookinger}
              removeBooking={removeBooking}
              addBooking={addBooking}
              favoritter={favoritter}
            />
          )}
        </Tab.Screen>

        {/* funktion så vi selv kan sende favoritter og removeFavorite med */}
        <Tab.Screen name="Favoritter">
          {(props) => <FavoritesScreen {...props} favoritter={favoritter} removeFavorite={removeFavorite} />}
        </Tab.Screen>

        <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}