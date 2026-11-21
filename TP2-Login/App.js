import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './screens/LoginScreen';
import { InscriptionScreen } from './screens/InscriptionScreen';
import styles from './AppStyles';

export default function App() {
  const [ecran, setEcran] = useState('login');
  const [utilisateur, setUtilisateur] = useState(null);

  // Etape 5 : utilisateur connecte -> ecran de bienvenue + deconnexion
  if (utilisateur) {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.bienvenue}>
          <Text style={styles.titreBienvenue}>
            Bienvenue {utilisateur.prenom} {utilisateur.nom} !
          </Text>
          <Text style={styles.texte}>{utilisateur.email}</Text>
          <Pressable
            onPress={() => setUtilisateur(null)}
            style={({ pressed }) => [styles.bouton, pressed && styles.boutonPresse]}
          >
            <Text style={styles.boutonTexte}>Se déconnecter</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  // Personne n'est connecte : connexion ou inscription
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={styles.racine}>
        <View style={styles.ecran}>
          {ecran === 'login' ? (
            <LoginScreen onConnecte={setUtilisateur} />
          ) : (
            <InscriptionScreen />
          )}
        </View>
        <SafeAreaView edges={['bottom']} style={styles.zoneLien}>
          <Pressable onPress={() => setEcran(ecran === 'login' ? 'inscription' : 'login')}>
            <Text style={styles.lien}>
              {ecran === 'login'
                ? "Pas encore de compte ? S'inscrire"
                : 'Déjà inscrit ? Se connecter'}
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
