import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './navigation/HomeStack';
import ProfileStack from './navigation/ProfileStack';
import ChatStack from './navigation/ChatStack';
import FavoritesScreen from './screens/FavoritesScreen';
import { GlobalStyles, Colors } from './styles/GlobalStyles';

//opretter Tab Navigatoren, som er fanerne i bunden af appen
const Tab = createBottomTabNavigator();

//favoritterne ligger øverst i appen og sendes som props, så flere skærme kan bruge dem
export default function App() {
  const [favoritter, setFavoritter] = useState([]);

  //lægger et produkt til favoritter, men kun hvis det ikke allerede er gemt
  const addFavorite = (produkt) => {
    const findes = favoritter.filter((f) => f.id === produkt.id).length > 0;
    if (findes) {
      Alert.alert('Allerede gemt', `${produkt.title} er allerede i dine favoritter.`);
    } else {
      setFavoritter([...favoritter, produkt]);
      Alert.alert('Gemt', `${produkt.title} er gemt i dine favoritter.`);
    }
  };

  //fjerner et produkt fra favoritter ud fra dets id
  const removeFavorite = (id) => {
    setFavoritter(favoritter.filter((f) => f.id !== id));
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
        {/* funktion så vi selv kan sende addFavorite med til HomeStack */}
        <Tab.Screen name="Hjem" options={{ headerShown: false }}>
          {(props) => <HomeStack {...props} addFavorite={addFavorite} />}
        </Tab.Screen>

        <Tab.Screen name="Profil" component={ProfileStack} options={{ headerShown: false }} />

        {/* funktion så vi selv kan sende favoritter og removeFavorite med */}
        <Tab.Screen name="Favoritter">
          {(props) => <FavoritesScreen {...props} favoritter={favoritter} removeFavorite={removeFavorite} />}
        </Tab.Screen>

        <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}