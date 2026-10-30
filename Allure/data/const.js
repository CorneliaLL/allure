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