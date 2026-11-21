import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  contenu: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  titre: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
    textAlign: 'center',
  },
  champ: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#111827',
  },
  champCase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 14,
  },
  labelCase: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    paddingRight: 10,
  },
  erreur: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
    textAlign: 'center',
  },
  succes: {
    color: '#059669',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  bouton: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  boutonPresse: {
    opacity: 0.8,
  },
  boutonTexte: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  lienZone: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  lienTexte: {
    fontSize: 14,
    color: '#6B7280',
  },
  lienAction: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
  },
});
