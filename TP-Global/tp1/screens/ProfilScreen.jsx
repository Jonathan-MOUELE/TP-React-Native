import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// TP 1 - Partie A (Etape 6) : Ecran Profil (+ infos utilisateur connecte du TP 2)
export const ProfilScreen = ({ utilisateur, onDeconnexion }) => {
  return (
    <View style={styles.centre}>
      <Ionicons name="person-circle" size={80} color="#2563EB" />
      <Text style={styles.titre}>
        {utilisateur ? `${utilisateur.prenom} ${utilisateur.nom}` : 'Mon Profil'}
      </Text>
      <Text style={styles.email}>
        {utilisateur ? utilisateur.email : 'Bienvenue sur votre profil'}
      </Text>

      {onDeconnexion && (
        <Pressable
          onPress={onDeconnexion}
          style={({ pressed }) => [styles.bouton, pressed && styles.boutonPresse]}
        >
          <Text style={styles.boutonTexte}>Se déconnecter</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  titre: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginTop: 12,
  },
  email: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 6,
    marginBottom: 24,
  },
  bouton: {
    backgroundColor: '#EF4444',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
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
