import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './authStyles';
import { validerConnexion } from '../utils/validation';
import { initDb, verifierConnexion } from '../database';

// Conversion React Native du composant Connexion (React_FB) avec SQLite
function Connexion({ onConnecte, onAllerInscription }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [erreur, setErreur] = useState('');
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    initDb().catch((e) => console.log('Erreur init base', e));
  }, []);

  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const messageErreur = validerConnexion(form);
    if (messageErreur) {
      setErreur(messageErreur);
      setSucces(false);
      return;
    }

    try {
      const utilisateur = await verifierConnexion(form.email, form.password);
      if (!utilisateur) {
        setErreur('Email ou mot de passe incorrect.');
        setSucces(false);
        return;
      }
      setErreur('');
      setSucces(true);
      onConnecte(utilisateur);
    } catch (e) {
      console.log(e);
      setErreur('Connexion impossible, veuillez réessayer.');
      setSucces(false);
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.contenu}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.form}>
            <Text style={styles.titre}>Se connecter</Text>

            <View style={styles.champ}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="nom@exemple.fr"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={form.email}
                onChangeText={(t) => handleChange('email', t)}
              />
            </View>

            <View style={styles.champ}>
              <Text style={styles.label}>Mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                value={form.password}
                onChangeText={(t) => handleChange('password', t)}
              />
            </View>

            {erreur ? <Text style={styles.erreur}>{erreur}</Text> : null}
            {succes ? (
              <Text style={styles.succes}>Connexion réussie</Text>
            ) : null}

            <Pressable
              onPress={handleSubmit}
              style={({ pressed }) => [
                styles.bouton,
                pressed && styles.boutonPresse,
              ]}
            >
              <Text style={styles.boutonTexte}>Se connecter</Text>
            </Pressable>

            <View style={styles.lienZone}>
              <Text style={styles.lienTexte}>Pas de compte ?</Text>
              <Pressable onPress={onAllerInscription}>
                <Text style={styles.lienAction}>S'inscrire</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Connexion;
