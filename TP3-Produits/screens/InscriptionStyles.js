import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contenu: {
    padding: 20,
    paddingBottom: 40,
  },
  titre: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
    textAlign: 'center',
  },
  groupe: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  champ: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#111827',
  },
  champErreur: {
    borderColor: '#EF4444',
  },
  erreur: {
    color: '#EF4444',
    fontSize: 13,
    marginTop: 4,
  },
  ligneSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  libelle: {
    fontSize: 15,
    color: '#374151',
  },
  bouton: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  boutonPresse: {
    opacity: 0.8,
  },
  boutonTexte: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
