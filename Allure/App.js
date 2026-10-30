import React from 'react';
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

export default function App() {
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
        {/* fanerne med en stack har deres egen header, så fanens header skjules */}
        <Tab.Screen name="Hjem" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profil" component={ProfileStack} options={{ headerShown: false }} />
        <Tab.Screen name="Favoritter" component={FavoritesScreen} />
        <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}