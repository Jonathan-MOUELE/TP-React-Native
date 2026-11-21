import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // TP 3 - Etape 3.1 : styles de base et cartes
  ecran: { flex: 1, backgroundColor: '#F3F4F6' },
  centre: { justifyContent: 'center', alignItems: 'center', padding: 24 },
  messageErreur: { color: '#B91C1C', fontSize: 16, textAlign: 'center', marginBottom: 16 },
  bouton: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  boutonPresse: { opacity: 0.7 },
  boutonTexte: { color: '#fff', fontSize: 16, fontWeight: '600' },
  liste: { paddingHorizontal: 16, paddingBottom: 24 },
  entete: { paddingVertical: 16 },
  titre: { fontSize: 24, fontWeight: '700', color: '#111827' },
  sousTitre: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  separateur: { height: 10 },
  vide: { textAlign: 'center', color: '#6B7280', fontSize: 16, marginTop: 40 },
  carte: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carteGauche: { flex: 1, paddingRight: 12 },
  nom: { fontSize: 16, fontWeight: '600', color: '#111827' },
  categorie: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  prix: { fontSize: 17, fontWeight: '700', color: '#2563EB' },
  stock: { fontSize: 12, color: '#047857', marginTop: 4, textAlign: 'right' },
  rupture: { color: '#B91C1C', fontWeight: '600' },

  // TP 3 - Etape 4.3 : bouton ajouter
  boutonAjout: { alignSelf: 'flex-start', marginTop: 12, paddingVertical: 10 },

  // TP 3 - Etape 5.3 : recherche et puces categories
  fixe: { paddingHorizontal: 16, paddingTop: 16 },
  champRecherche: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 12,
  },
  listePuces: { flexGrow: 0, flexShrink: 0 },
  puces: { paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center' },
  puce: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  puceActive: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  puceTexte: { fontSize: 14, color: '#374151' },
  puceTexteActive: { color: '#fff', fontWeight: '600' },

  // TP 3 - Etape 6.3 : spinner pagination
  pied: { paddingVertical: 16 },

  // TP 3 - Etape 7.1 : en-tete utilisateur et deconnexion
  ligneTitre: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  lienDeconnexion: { color: '#2563EB', fontSize: 14, fontWeight: '600', paddingTop: 8 },
  bonjour: { fontSize: 14, color: '#374151', marginTop: 4 },
});
