// TP 1 - Partie A (Etape 7) : creation du Drawer Navigator
// TP 1 - Partie B (Etape 4) : integration de TabNavigator dans "Menu Principal"
// TP 1 - Partie C (Etape 2) : ajout des icones Ionicons dans le Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import { ProfilScreen } from '../screens/ProfilScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ utilisateur, onDeconnexion }) {
  return (
    // initialRouteName : ecran affiche par defaut au lancement
    <Drawer.Navigator
      initialRouteName="Menu Principal"
      screenOptions={{
        drawerActiveTintColor: '#2563EB',
        drawerInactiveTintColor: '#1F2937',
        drawerActiveBackgroundColor: '#EEF2FF',
      }}
    >
      {/* Partie B (Etape 4) : "Menu Principal" affiche la barre d'onglets (TabNavigator) */}
      <Drawer.Screen
        name="Menu Principal"
        options={{
          // Partie C (Etape 2) : icone maison dans le menu lateral
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      >
        {(props) => (
          <TabNavigator
            {...props}
            utilisateur={utilisateur}
            onDeconnexion={onDeconnexion}
          />
        )}
      </Drawer.Screen>

      {/* Partie A (Etape 7) + Partie C (Etape 2) : ecran Profil avec icone */}
      <Drawer.Screen
        name="Profil"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      >
        {(props) => (
          <ProfilScreen
            {...props}
            utilisateur={utilisateur}
            onDeconnexion={onDeconnexion}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
