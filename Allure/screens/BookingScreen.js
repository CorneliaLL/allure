import React from 'react';
import { ScrollView, Alert } from 'react-native';
import BookingForm from '../components/BookingForm';
import { GlobalStyles } from '../styles/GlobalStyles';

//skærm der viser booking formularen
export default function BookingScreen({ navigation, addBooking, favoritter }) {

  //kaldes af BookingForm, når kunden trykker "Bekræft booking"
  const handleSubmit = (booking) => {
    addBooking(booking); //gemmer bookingen i App.js state
    Alert.alert('Booking sendt', `Din aftale hos ${booking.valgtFA} er sendt.`);
    navigation.goBack(); //sender kunden tilbage
  };

  return (
    //ScrollView så man kan scrolle ned til knappen, og tastaturet lukker når man scroller
    <ScrollView style={GlobalStyles.screenContainer} keyboardDismissMode="on-drag">
      <BookingForm onSubmit={handleSubmit} favoritter={favoritter} />
    </ScrollView>
  );
}