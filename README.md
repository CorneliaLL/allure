# Allure

Allure er en prototype af en mobilapplikation bygget i React Native (Expo), der styrker relationen mellem kunde og Fashion Advisor hos luksusbrands. Prototypen viser kundens interface: kunden er allerede logget ind og kan se nyheder, udforske kollektionen, gemme favoritter, booke en tid og skrive med sin Fashion Advisor.

## Funktioner
- **Hjem:** opslagstavle med billede fra seneste fashion show og nyheder, samt genveje til booking og kollektion
- **Kollektion:** personlige anbefalinger, søgefunktion og kategorier (tasker, sko, smykker). Produkter kan gemmes med " Gem"
- **Favoritter:** liste over gemte produkter, som kan fjernes
- **Booking:** vælg dato i en kalender, vælg Fashion Advisor, skriv en kommentar og vedhæft dine favoritter
- **Profil:** mine bookinger med mulighed for at annullere, arrangementer og private sales, samt knap til at booke en tid
- **Chat:** liste over de Fashion Advisors kunden har skrevet med og en samtale med chatbobler
- **Database:** favoritter, bookinger og chatbeskeder gemmes i Firebase Realtime Database, så de huskes, når appen lukkes

## Sådan køres appen
1. Klon dette repository: `git clone https://github.com/CorneliaLL/allure.git`
2. Naviger ind i mappen: `cd allure/Allure`
3. Installer dependencies: `npm install`
4. Start appen: `npx expo start`
5. Scan QR-koden med Expo Go-appen på din telefon

## Demovideo
Link til demovideo: `INDSÆT LINK`

## Teknologier
- React Native / Expo
- React Navigation (bottom tabs og stack)
- Firebase Realtime Database (favoritter, bookinger og chat)
- DummyJSON API (produkter i kollektionen)
- react-native-gifted-chat (chat)
- @react-native-community/datetimepicker (kalender i booking)

## Struktur
```
App.js                  fanerne i bunden og data fra Firebase
navigation/             HomeStack, ProfileStack og ChatStack
screens/                skærmene i appen
components/             genbrugelige komponenter (knap, produktkort, bookingrække, nyhedskort, bookingformular)
data/const.js           statiske data (kunde, nyheder, arrangementer, Fashion Advisors, chats)
database/firebase.js    forbindelse til Firebase
styles/GlobalStyles.js  al styling og alle farver samlet ét sted
```

## Begrænsninger (prototype)
- Ingen login: kunden er allerede logget ind, og data som navn, nyheder og arrangementer er statiske eksempler
- Anbefalinger er et statisk eksempel baseret på kundens yndlingskategori
- Produkterne kommer fra et test-API. I en rigtig version ville brandet levere sin egen kollektion
- Chatten har ikke svar fra Fashion Advisoren, da der endnu ikke er et Fashion Advisor-interface
- Databasen kører i test mode uden sikkerhedsregler