import { getDb } from './connexion';

// Etape 2.2 : creation de la table utilisateurs
export const initDb = async () => {
  const db = await getDb();
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS utilisateurs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      prenom TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      telephone TEXT,
      mdp TEXT NOT NULL,
      newsletter INTEGER DEFAULT 0,
      cgu INTEGER DEFAULT 0
    );
  `);
};
