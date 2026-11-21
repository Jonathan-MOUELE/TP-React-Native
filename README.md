# TP React Native — BTS SIO

Ce dépôt regroupe les TP et le projet global réalisés en React Native (Expo).

## Contenu du dépôt

- **TP1-DrawerMenu/** : Navigation par menu latéral (Drawer Navigator) et onglets inférieurs (Bottom Tabs) avec icônes `Ionicons`.
  - `navigation/DrawerNavigator.jsx`, `navigation/TabNavigator.jsx`
  - `screens/AccueilScreen.jsx`, `screens/ProfilScreen.jsx`, `screens/ParametresScreen.jsx`
- **TP2-Login/** : Authentification (Connexion / Inscription), validation des champs et persistance locale SQLite (`expo-sqlite`).
  - `database/connexion.js`, `database/schema.js`, `database/utilisateurs.js`, `database/index.js`
  - `screens/LoginScreen.jsx`, `screens/InscriptionScreen.jsx`, `utils/validation.js`
- **TP3-Produits/** : Catalogue de produits SQLite avec `FlatList`, recherche SQL (`LIKE`), filtres par catégorie, pull-to-refresh et pagination (`LIMIT` / `OFFSET`).
  - `database/produits.js`, `screens/ProduitsScreen.jsx`, `screens/ProduitsStyles.js`
- **TP-Global/** : Conversion du projet ReactJS (`React_FB`) en React Native unifié avec SQLite, Drawer, Bottom Tabs et Catalogue Produits.
  - `App.jsx` : bascule entre authentification et navigation connectée
  - `tp1/` : navigation Drawer + Bottom Tabs (`DrawerNavigator.jsx`, `TabNavigator.jsx`, écrans)
  - `tp2/` : écrans `connection.jsx` et `inscription.jsx` (`authStyles.js`), validation et base SQLite `utilisateurs`
  - `tp3/` : catalogue `ProduitsScreen.jsx` et requêtes SQLite paginées `produits.js`
