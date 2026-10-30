//nyheder der vises på opslagstavlen på forsiden
export const NYHEDER = [
  { id: '1', titel: 'Ny kollektion', tekst: 'Forårskollektionen er ankommet i butikken.' },
  { id: '2', titel: 'Private sale', tekst: 'Eksklusivt udsalg for faste kunder i næste uge.' },
  { id: '3', titel: 'Styling event', tekst: 'Book en personlig styling med din Fashion Advisor.' },
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
export const ARRANGEMENTER = [
  { id: '1', titel: 'Private sale', tekst: '12. november · Kun for inviterede kunder' },
  { id: '2', titel: 'Forårskollektion preview', tekst: '20. november · Champagne og styling' },
];

//de Fashion Advisors kunden har skrevet med, og deres seneste besked (statisk eksempel)
export const CHATS = [
  { id: '1', fa: 'Maria Jensen', besked: 'Hej Sofie, den nye taske er kommet hjem i din farve.' },
  { id: '2', fa: 'Anna Berg', besked: 'Tak for dit besøg i går, du er velkommen igen.' },
];