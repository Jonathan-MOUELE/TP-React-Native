# TP React Native — BTS SIO

Ce dépôt regroupe les 4 projets React Native développés avec Expo :

## 📁 Structure du projet

- **[TP1-DrawerMenu](./TP1-DrawerMenu)** : Navigation complète combinant un menu latéral (**Drawer Navigation**) et des onglets inférieurs (**Bottom Tabs**) avec des icônes vectorielles (**Ionicons**).
- **[TP2-Login](./TP2-Login)** : Module d'authentification complet avec base de données locale **SQLite** (`expo-sqlite`), écrans de **Connexion** et **Inscription** avec validation regex.
- **[TP3-Produits](./TP3-Produits)** : Gestion d'un catalogue de produits stocké dans une table **SQLite**, avec affichage, recherche et gestion du stock.
- **[TP-Global](./TP-Global)** : Application globale unifiée intégrant les 3 TPs (authentification TP2 menant au menu connecté TP1 avec le catalogue TP3).

## 🚀 Installation & Lancement

Pour lancer l'un des projets, accédez à son dossier et installez ses dépendances :

```bash
cd TP1-DrawerMenu # ou TP2-Login, TP3-Produits, TP-Global
npm install
npx expo start -c
```
