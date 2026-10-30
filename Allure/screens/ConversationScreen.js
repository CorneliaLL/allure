import React, { useState, useEffect, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import { FontAwesome } from '@expo/vector-icons';
import { ref, push, onValue } from 'firebase/database';
import { rtdb } from '../database/firebase';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

//samtalen med én Fashion Advisor, bygget som chatten i øvelse 10
//beskederne gemmes i Firebase, så chat historikken huskes
//kunden kan skrive, men der kommer ikke svar, da der endnu ikke er et FA interface
export default function ConversationScreen({ route }) {
  const { id, fa, besked } = route.params; //chattens id, FA'ens navn og besked fra ChatListScreen
  const [messages, setMessages] = useState([]);

  //FA'ens seneste besked fra const.js, vises altid som den første besked i samtalen
  const startBesked = {
    _id: 'start',
    text: besked,
    createdAt: 0,
    user: {
      _id: 2, //2 = Fashion Advisoren
      name: fa,
    },
  };

  //lytter på beskederne i denne samtale i Firebase (som CarList i øvelse 05)
  useEffect(() => {
    const unsubscribe = onValue(ref(rtdb, `Messages/${id}`), (snapshot) => {
      const gemte = Object.values(snapshot.val() || {});
      //GiftedChat viser den nyeste besked først, så listen sorteres efter tidspunkt (nyeste først)
      gemte.sort((a, b) => b.createdAt - a.createdAt);
      setMessages([...gemte, startBesked]);
    });
    return unsubscribe; //stopper lytteren, når samtalen lukkes
  }, []);

  //når kunden sender en besked, gemmes den i Firebase, og onValue opdaterer så chatten
  const onSend = useCallback(async (messages = []) => {
    const nyBesked = messages[0];
    try {
      await push(ref(rtdb, `Messages/${id}`), {
        _id: nyBesked._id,
        text: nyBesked.text,
        createdAt: Date.now(), //tidspunktet som et tal, så det kan gemmes i Firebase
        user: nyBesked.user,
      });
    } catch (e) {
      Alert.alert(e?.message || 'Noget gik galt.');
    }
  }, []);

  //kundens bobler er sorte og FA'ens har sort tekst, styling hentes fra GlobalStyles
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: GlobalStyles.bubbleRight,
        }}
        textStyle={{
          right: GlobalStyles.bubbleRightText,
          left: GlobalStyles.bubbleLeftText,
        }}
      />
    );
  };

  //feltet nederst hvor kunden skriver
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={GlobalStyles.inputToolbarContainer}
        textInputProps={{
          ...props.textInputProps,
          placeholder: 'Skriv en besked...',
        }}
      />
    );
  };

  //send knappen som et ikon
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={GlobalStyles.sendButton}>
          <FontAwesome name="send" size={22} color={Colors.primary} />
        </View>
      </Send>
    );
  };

  return (
    <View style={GlobalStyles.mainView}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1, //1 = kunden
        }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
      />
    </View>
  );
}