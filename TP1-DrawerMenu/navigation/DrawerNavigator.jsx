import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import { ProfilScreen } from '../screens/ProfilScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Menu Principal"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 260,
          height: '100%',
          zIndex: 9999,
        },
        drawerType: 'front',
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: '#333333',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}
    >
      <Drawer.Screen
        name="Menu Principal"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
