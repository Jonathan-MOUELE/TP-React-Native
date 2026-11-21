// Point d'entree global : Authentification (React_FB -> React Native + SQLite)
// puis Navigation (TP 1 Drawer + Bottom Tabs) et Catalogue Produits (TP 3)
import 'react-native-gesture-handler';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './tp1/navigation/DrawerNavigator';
import Connexion from './tp2/screens/connection';
import Inscription from './tp2/screens/inscription';

export default function App() {
  const [ecran, setEcran] = useState('connexion');
  const [utilisateur, setUtilisateur] = useState(null);

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

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {ecran === 'connexion' ? (
        <Connexion
          onConnecte={setUtilisateur}
          onAllerInscription={() => setEcran('inscription')}
        />
      ) : (
        <Inscription onAllerConnexion={() => setEcran('connexion')} />
      )}
    </SafeAreaProvider>
  );
}
