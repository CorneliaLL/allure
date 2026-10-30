import { StyleSheet } from 'react-native';

//alle farver samlet ét sted, så de kan genbruges i både styling og navigation
export const Colors = {
  primary: '#000000',
  background: '#FFFFFF',
  inactive: '#B0B0B0',
  textLight: '#FFFFFF',
  textGrey: '#555555',
};

export const GlobalStyles = StyleSheet.create({
  //generel baggrund for alle skærme
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  //overskrift øverst på hver skærm
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
    letterSpacing: 1,
  },

  //header øverst på skærmene (bruges i App.js og i stack navigatorerne)
  header: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Colors.textLight,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },

  //tab bar i bunden af appen (bruges i App.js)
  tabBar: {
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },

    //stort billede øverst på forsiden (fashion show)
  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: 4,
    marginBottom: 8,
  },
  heroText: {
    fontSize: 13,
    color: Colors.textGrey,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 20,
  },

  //rækken med knapperne "Book tid" og "Se nyeste kollektion"
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },

  //boks rundt om en nyhed på opslagstavlen
  newsCard: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 4,
  },
  newsText: {
    fontSize: 14,
    color: Colors.textGrey,
  },

  //primær knap (sort baggrund)
  primaryBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  primaryBtnText: {
    color: Colors.textLight,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  //sekundær knap (hvid med sort kant)
  secondaryBtn: {
    flex: 1,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

    //søgefeltet øverst i kollektionen
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    paddingLeft: 12,
    fontSize: 15,
    marginBottom: 12,
  },

  //rækken med kategori knapperne (tasker, sko, smykker)
  categoryRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },

  //boks rundt om ét produkt: billede til venstre og tekst til højre
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },

  //produktbilledet fra API'et, fast størrelse så alle produkter står ens
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },

  //produktnavn og pris
  productTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.primary,
  },
  productPrice: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 4,
  },
});