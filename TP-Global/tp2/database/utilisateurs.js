// TP 2 - Etape 2.3 : requetes SQLite sur la table utilisateurs (parametres ? contre l'injection SQL)
import { getDb } from './connexion';

// Etape 2.3 : inscription d'un nouvel utilisateur
export const insererUtilisateur = async (u) => {
  const db = await getDb();
  const res = await db.runAsync(
    `INSERT INTO utilisateurs (nom, prenom, email, telephone, mdp, newsletter, cgu)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    u.nom.trim(),
    u.prenom.trim(),
    u.email.trim().toLowerCase(),
    u.telephone ? u.telephone.trim() : null,
    u.mdp,
    u.newsletter ? 1 : 0,
    u.cgu ? 1 : 0
  );
  return res.lastInsertRowId;
};

// Etape 2.3 : lister les utilisateurs inscrits (sans renvoyer le mot de passe)
export const listerUtilisateurs = async () => {
  const db = await getDb();
  return db.getAllAsync(
    'SELECT id, nom, prenom, email, telephone FROM utilisateurs'
  );
};

// Etape 4.1 : verifier email + mot de passe pour la connexion
export const verifierConnexion = async (email, mdp) => {
  const db = await getDb();
  return db.getFirstAsync(
    `SELECT id, nom, prenom, email FROM utilisateurs
     WHERE email = ? AND mdp = ?`,
    email.trim().toLowerCase(),
    mdp
  );
};
