// TP 1 - Partie B (Etape 3) : creation du Bottom Tab Navigator
// TP 1 - Partie C (Etape 3) : ajout des icones Ionicons dans les onglets
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AccueilScreen } from '../screens/AccueilScreen';
import { ParametresScreen } from '../screens/ParametresScreen';
import { ProduitsScreen } from '../../tp3/screens/ProduitsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ utilisateur, onDeconnexion }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Partie B (Etape 3) : evite d'avoir deux en-tetes superposes (Drawer + Tab)
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#6B7280',
        // Partie C (Etape 3) : choix de l'icone selon le nom de l'onglet
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Catalogue') {
            iconName = 'cart';
          } else if (route.name === 'Paramètres') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil">
        {(props) => <AccueilScreen {...props} utilisateur={utilisateur} />}
      </Tab.Screen>
      {/* Lien avec le TP 3 : liste des produits SQLite */}
      <Tab.Screen name="Catalogue">
        {(props) => (
          <ProduitsScreen
            {...props}
            utilisateur={utilisateur}
            onDeconnexion={onDeconnexion}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Paramètres" component={ParametresScreen} />
    </Tab.Navigator>
  );
}
