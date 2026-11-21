// TP 1 - Partie A (Etape 8) : react-native-gesture-handler en 1re ligne + NavigationContainer + DrawerNavigator
// TP 2 - Etape 5 : bascule entre LoginScreen et InscriptionScreen selon l'etat `ecran`
// TP 3 - Etape 7.2 : affichage de l'application connectee quand `utilisateur` est defini
import 'react-native-gesture-handler';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './tp1/navigation/DrawerNavigator';
import { LoginScreen } from './tp2/screens/LoginScreen';
import { InscriptionScreen } from './tp2/screens/InscriptionScreen';
import styles from './AppStyles';

export default function App() {
  const [ecran, setEcran] = useState('login');
  const [utilisateur, setUtilisateur] = useState(null);

  // Si un utilisateur est connecte : on affiche la navigation complete (TP 1 + TP 3)
  if (utilisateur) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar style="dark" />
          <NavigationContainer>
            <DrawerNavigator
              utilisateur={utilisateur}
              onDeconnexion={() => setUtilisateur(null)}
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    );
  }

  // Sinon : ecrans de connexion ou d'inscription (TP 2)
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
