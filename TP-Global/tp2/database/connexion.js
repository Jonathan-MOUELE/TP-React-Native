// TP 2 - Etape 2.1 : ouverture unique de la base SQLite (singleton)
import * as SQLite from 'expo-sqlite';

let dbInstance = null;

export const getDb = async () => {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync('app.db');
  }
  return dbInstance;
};
