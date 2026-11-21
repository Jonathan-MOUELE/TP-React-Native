import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// TP 1 - Partie A (Etape 6) : Ecran Accueil
export const AccueilScreen = ({ utilisateur }) => {
  return (
    <View style={styles.centre}>
      <Ionicons name="home-outline" size={64} color="#2563EB" />
      <Text style={styles.titre}>
        {utilisateur ? `Bienvenue ${utilisateur.prenom} !` : "Bienvenue sur l'accueil"}
      </Text>
      <Text style={styles.sousTitre}>
        Utilisez le menu latéral ou les onglets en bas pour naviguer.
      </Text>
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
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginTop: 14,
    textAlign: 'center',
  },
  sousTitre: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
});
