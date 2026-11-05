//nyheder der vises på opslagstavlen på forsiden
export const NYHEDER = [
  { id: '1', titel: 'Ny kollektion', tekst: 'CHANEL Efterår-Vinter 2026 Ready-to-Wear Kollektionen fås nu i butikker.' },
  { id: '2', titel: 'Styling event', tekst: 'Book en personlig styling med din Fashion Advisor.' },
  {
    id: '3',
    titel: 'N°5, 100 års berømmelse',
    tekst: 'Oplev historien om N°5, et symbol på modernitet og elegance.',
  },
];

//den kunde der er "logget ind" i prototypen, yndlingskategorien bruges til anbefalinger
export const KUNDE = {
  navn: 'Mathilde Mandal',
  yndlingskategori: 'womens-bags',
};

//adressen på det online API, som produkterne fra kollektionen hentes fra
export const PRODUCTS_URL = 'https://dummyjson.com/products/category/';

//kategorierne man kan vælge imellem i kollektionen (navn = vises i appen, slug = bruges i API'et)
export const KATEGORIER = [
  { navn: 'Tasker', slug: 'womens-bags' },
  { navn: 'Sko', slug: 'womens-shoes' },
  { navn: 'Smykker', slug: 'womens-jewellery' },
];

//de Fashion Advisors kunden kan booke hos og skrive med
export const FASHION_ADVISORS = ['Maria Jensen', 'Sofie Lund', 'Kent Lee', 'Camilla Pau'];

//arrangementer og private sales, der vises på profilen
//arrangementer og private sales, der vises på profilen
export const ARRANGEMENTER = [
  {
    id: '3',
    titel: 'Year-End Dinner',
    tekst: 'Torsdag 3. december 2026 · København · Eksklusiv middag for at fejre højtiden',
    billede: require('../assets/juleevent.png'),
  },
  { id: '1', titel: 'Private sale', tekst: '12. december · Kun for inviterede VIC kunder' },
  { id: '2', titel: 'Forårskollektion preview', tekst: '10. januar · Champagne og styling' },
];

//de Fashion Advisors kunden har skrevet med, deres billede og seneste besked (statisk eksempel)
export const CHATS = [
  {
    id: '1',
    fa: 'Maria Jensen',
    billede: require('../assets/logo.png'),
    besked: 'Hej Sofie, den nye taske er kommet hjem i din farve.',
  },
  {
    id: '2',
    fa: 'Anna Berg',
    billede: require('../assets/logo.png'),
    besked: 'Tak for dit besøg i går, jeg håber du bliver glad for dine flotte nye sko!',
  },
];