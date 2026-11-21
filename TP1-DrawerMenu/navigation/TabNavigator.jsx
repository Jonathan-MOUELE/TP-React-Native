import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AccueilScreen } from '../screens/AccueilScreen';
import { ParametresScreen } from '../screens/ParametresScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Masque l'en-tête des onglets pour ne pas doubler celui du Drawer
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Paramètres') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Paramètres" component={ParametresScreen} />
    </Tab.Navigator>
  );
}
