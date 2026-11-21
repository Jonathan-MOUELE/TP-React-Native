import * as SQLite from 'expo-sqlite';

// Etape 2.1 : connexion unique (singleton) a la base SQLite
let dbInstance = null;

export const getDb = async () => {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync('app.db');
  }
  return dbInstance;
};
