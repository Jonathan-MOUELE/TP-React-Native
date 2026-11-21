import { getDb } from './connexion';

// TP 3 - Etape 1.1 : table produits et 24 articles de depart
const PRODUITS_DE_DEPART = [
  ['Clavier Logitech MX Mechanical', 'Informatique', 149.9, 12],
  ['Souris Razer DeathAdder V3', 'Informatique', 69.9, 40],
  ['Écran Samsung Odyssey 27"', 'Informatique', 249, 7],
  ['Casque Sony WH-1000XM5', 'Informatique', 329, 15],
  ['Webcam Logitech Brio 4K', 'Informatique', 139.9, 0],
  ['SSD Samsung 990 Pro 1 To', 'Informatique', 109, 22],
  ['Téléviseur TCL 55" QLED 4K', 'Maison', 449, 5],
  ['Cafetière Nespresso Vertuo', 'Maison', 119, 9],
  ['Bouilloire Smeg Années 50', 'Maison', 149, 25],
  ['Aspirateur robot Roborock S8', 'Maison', 549, 4],
  ['Lampe Philips Hue Go', 'Maison', 79.9, 0],
  ['Enceinte Sonos Era 100', 'Maison', 249, 14],
  ['Tapis de yoga Manduka PRO', 'Sport', 89, 33],
  ['Haltères réglables Bowflex', 'Sport', 199, 11],
  ['Corde à sauter Nike Speed', 'Sport', 24.9, 50],
  ['Gourde isotherme Hydro Flask', 'Sport', 39.9, 27],
  ['Montre Garmin Forerunner 265', 'Sport', 449, 6],
  ['Sac de sport Under Armour', 'Sport', 49, 14],
  ['React Native in Action', 'Livres', 39.9, 20],
  ['Eloquent JavaScript (4e éd.)', 'Livres', 34.9, 16],
  ['Clean Code — Robert C. Martin', 'Livres', 42, 8],
  ['Atomic Habits — James Clear', 'Livres', 22.5, 13],
  ['Dune — Frank Herbert', 'Livres', 14.9, 0],
  ['Le Mythe de Sisyphe — Camus', 'Livres', 11, 10],
];

export const initProduits = async () => {
  const db = await getDb();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS produits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      categorie TEXT NOT NULL,
      prix REAL NOT NULL,
      stock INTEGER NOT NULL DEFAULT 0
    );
  `);

  const { n } = await db.getFirstAsync('SELECT COUNT(*) AS n FROM produits');
  if (n > 0) return;

  await db.withTransactionAsync(async () => {
    for (const [nom, categorie, prix, stock] of PRODUITS_DE_DEPART) {
      await db.runAsync(
        'INSERT INTO produits (nom, categorie, prix, stock) VALUES (?, ?, ?, ?)',
        nom,
        categorie,
        prix,
        stock
      );
    }
  });
};

// TP 3 - Etape 4.1 : insertion d'un produit
export const insererProduit = async (nom, categorie, prix, stock) => {
  const db = await getDb();
  const resultat = await db.runAsync(
    'INSERT INTO produits (nom, categorie, prix, stock) VALUES (?, ?, ?, ?)',
    nom,
    categorie,
    prix,
    stock
  );
  return resultat.lastInsertRowId;
};

// TP 3 - Etape 5.1 & 6.1 : recherche, filtre categorie et pagination SQL
const FILTRE = 'nom LIKE ? AND (? IS NULL OR categorie = ?)';
const parametresFiltre = (recherche, categorie) => [
  `%${recherche.trim()}%`,
  categorie,
  categorie,
];

export const listerProduits = async ({
  recherche = '',
  categorie = null,
  limite = -1,
  decalage = 0,
} = {}) => {
  const db = await getDb();
  return db.getAllAsync(
    `SELECT id, nom, categorie, prix, stock FROM produits
     WHERE ${FILTRE}
     ORDER BY nom, id
     LIMIT ? OFFSET ?`,
    ...parametresFiltre(recherche, categorie),
    limite,
    decalage
  );
};

export const compterProduits = async ({ recherche = '', categorie = null } = {}) => {
  const db = await getDb();
  const { n } = await db.getFirstAsync(
    `SELECT COUNT(*) AS n FROM produits WHERE ${FILTRE}`,
    ...parametresFiltre(recherche, categorie)
  );
  return n;
};

export const listerCategories = async () => {
  const db = await getDb();
  const lignes = await db.getAllAsync(
    'SELECT DISTINCT categorie FROM produits ORDER BY categorie'
  );
  return lignes.map((ligne) => ligne.categorie);
};
