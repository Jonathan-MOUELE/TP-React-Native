// TP 3 - Etape 1.3, 4.1, 5.1, 6.1 : point d'entree unique pour la base produits
export { initDb } from '../../tp2/database/schema';
export {
  listerProduits,
  compterProduits,
  listerCategories,
  insererProduit,
} from './produits';
