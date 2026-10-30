import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FASHION_ADVISORS } from '../data/const';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import ButtonComponent from './ButtonComponent';

//formular til at oprette en booking
export default function BookingForm({ onSubmit, favoritter }) {

  //egen state for hvert felt i formularen, så vi kan følge med i hvad kunden skriver/vælger
  const [dato, setDato] = useState(new Date()); //valgt dato, starter på i dag
  const [valgtFA, setValgtFA] = useState(FASHION_ADVISORS[0]); //starter med den første FA valgt
  const [kommentar, setKommentar] = useState('');
  const [attachFavorites, setAttachFavorites] = useState(false); //om kunden vil vedhæfte sine favoritter

  //navnene på produkterne i favoritter
  const produktNavne = favoritter.map((p) => p.title);

  //samler felterne til et booking objekt og sender det videre til BookingScreen
  const handleSubmit = () => {
    const booking = {
      id: Date.now().toString(), //unikt id ud fra tidspunktet
      dato: dato.toLocaleDateString('da-DK'), //datoen som tekst i dansk format, fx "30.10.2026"
      valgtFA,
      kommentar,
      favoritter: attachFavorites ? produktNavne : [], //tom liste hvis kunden ikke vil vedhæfte
    };
    onSubmit(booking);
  };

  return (
    <View style={GlobalStyles.formContainer}>
      {/* kalender hvor kunden vælger en dato, man kan ikke vælge en dato der er gået */}
      <Text style={GlobalStyles.inputLabel}>Vælg dato</Text>
      <DateTimePicker
        value={dato}
        mode="date"
        display="inline"
        minimumDate={new Date()}
        accentColor={Colors.primary}
        themeVariant="light"
        onChange={(event, valgtDato) => {
          if (valgtDato) setDato(valgtDato);
        }}
      />

      {/* en knap pr. FA: den valgte vises som primary (sort), de andre som secondary (hvid) */}
      <Text style={GlobalStyles.inputLabel}>Vælg Fashion Advisor</Text>
      <View style={GlobalStyles.faOptionsRow}>
        {FASHION_ADVISORS.map((fa) => (
          <View key={fa} style={GlobalStyles.faOption}>
            <ButtonComponent
              title={fa}
              variant={valgtFA === fa ? 'primary' : 'secondary'}
              onPress={() => setValgtFA(fa)}
            />
          </View>
        ))}
      </View>

      {/* valgfri kommentar til FA'en */}
      <Text style={GlobalStyles.inputLabel}>Kommentar</Text>
      <TextInput
        style={GlobalStyles.textInput}
        placeholder="Kommentar til din FA..."
        value={kommentar}
        onChangeText={setKommentar}
      />

      {/* vedhæft favoritter: knappen skifter mellem til og fra, sort = vedhæftet */}
      <Text style={GlobalStyles.inputLabel}>Favoritter ({produktNavne.length} produkter)</Text>
      <ButtonComponent
        title={attachFavorites ? '✓ Favoritter vedhæftet' : 'Vedhæft mine favoritter'}
        variant={attachFavorites ? 'primary' : 'secondary'}
        onPress={() => setAttachFavorites(!attachFavorites)}
      />

      {/* sender formularen af sted til handleSubmit */}
      <View style={{ marginTop: 20 }}>
        <ButtonComponent title="Bekræft booking" onPress={handleSubmit} />
      </View>
    </View>
  );
}