import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// TP 1 - Partie A (Etape 6) : Ecran Parametres
export const ParametresScreen = () => {
  return (
    <View style={styles.centre}>
      <Ionicons name="settings-outline" size={64} color="#2563EB" />
      <Text style={styles.titre}>Bienvenue sur les paramètres</Text>
      <Text style={styles.texte}>Réglages de l'application.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 24,
  },
  titre: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginTop: 14,
    marginBottom: 8,
  },
  texte: {
    fontSize: 15,
    color: '#6B7280',
  },
});
