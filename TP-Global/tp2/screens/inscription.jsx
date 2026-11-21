import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './authStyles';
import { validerInscription } from '../utils/validation';
import { initDb, insererUtilisateur, listerUtilisateurs } from '../database';

// Conversion React Native du composant Inscription (React_FB) avec SQLite
function Inscription({ onAllerConnexion }) {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmation: '',
    cgu: false,
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
    const messageErreur = validerInscription(form);
    if (messageErreur) {
      setErreur(messageErreur);
      setSucces(false);
      return;
    }

    try {
      await insererUtilisateur({
        nom: form.nom,
        prenom: form.prenom,
        email: form.email,
        password: form.password,
        cgu: form.cgu,
      });
      console.log(await listerUtilisateurs());
      setErreur('');
      setSucces(true);
    } catch (e) {
      if (String(e.message).includes('UNIQUE')) {
        setErreur('Cet email est déjà utilisé.');
      } else {
        setErreur("Impossible d'enregistrer l'utilisateur.");
      }
      setSucces(false);
      console.log(e);
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
            <Text style={styles.titre}>Créer un compte</Text>

            <View style={styles.champ}>
              <Text style={styles.label}>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder="Dupont"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="words"
                value={form.nom}
                onChangeText={(t) => handleChange('nom', t)}
              />
            </View>

            <View style={styles.champ}>
              <Text style={styles.label}>Prénom</Text>
              <TextInput
                style={styles.input}
                placeholder="Marie"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="words"
                value={form.prenom}
                onChangeText={(t) => handleChange('prenom', t)}
              />
            </View>

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

            <View style={styles.champ}>
              <Text style={styles.label}>Confirmer le mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                value={form.confirmation}
                onChangeText={(t) => handleChange('confirmation', t)}
              />
            </View>

            <View style={styles.champCase}>
              <Text style={styles.labelCase}>
                J'accepte les conditions d'utilisation
              </Text>
              <Switch
                value={form.cgu}
                onValueChange={(val) => handleChange('cgu', val)}
              />
            </View>

            {erreur ? <Text style={styles.erreur}>{erreur}</Text> : null}
            {succes ? (
              <Text style={styles.succes}>
                Inscription réussie, {form.prenom} !
              </Text>
            ) : null}

            <Pressable
              onPress={handleSubmit}
              style={({ pressed }) => [
                styles.bouton,
                pressed && styles.boutonPresse,
              ]}
            >
              <Text style={styles.boutonTexte}>S'inscrire</Text>
            </Pressable>

            <View style={styles.lienZone}>
              <Text style={styles.lienTexte}>Déjà un compte ?</Text>
              <Pressable onPress={onAllerConnexion}>
                <Text style={styles.lienAction}>Se connecter</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Inscription;
