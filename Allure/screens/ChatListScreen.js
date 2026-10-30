import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { CHATS } from '../data/const';
import { GlobalStyles } from '../styles/GlobalStyles';

//viser en liste over de Fashion Advisors kunden har skrevet med (fanen "Chat")
export default function ChatListScreen({ navigation }) {
  return (
    <View style={GlobalStyles.screenContainer}>
      <FlatList
        data={CHATS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //trykker man på en chat, sendes FA'ens navn og besked med til samtalen
          <Pressable
            style={GlobalStyles.chatItem}
            onPress={() => navigation.navigate('Samtale', { id: item.id, fa: item.fa, besked: item.besked })}
          >
            <Text style={GlobalStyles.newsTitle}>{item.fa}</Text>
            <Text style={GlobalStyles.newsText}>{item.besked}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}