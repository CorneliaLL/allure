import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from '../screens/ChatListScreen';
import ConversationScreen from '../screens/ConversationScreen';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

const Stack = createStackNavigator();

//stack navigator til Chat fanen: starter på listen over chats og "pusher" til samtalen
export default function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle,
        headerTintColor: Colors.textLight,
      }}
    >
      <Stack.Screen name="Chats" component={ChatListScreen} />
      <Stack.Screen name="Samtale" component={ConversationScreen} />
    </Stack.Navigator>
  );
}