// TP 2 - Etape 1.2 : fonctions pures de validation (renvoient null si ok, sinon le message d'erreur)
export const validerEmail = (email) => {
  if (!email || !email.trim()) return "L'email est obligatoire";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim()) ? null : 'Email invalide';
};

export const validerNom = (nom) => {
  return nom && nom.trim().length > 0 ? null : 'Le nom est obligatoire';
};

export const validerPrenom = (prenom) => {
  return prenom && prenom.trim().length > 0 ? null : 'Le prénom est obligatoire';
};

export const validerMdp = (mdp) => {
  if (!mdp) return 'Le mot de passe est obligatoire';
  if (mdp.length < 6) return 'Le mot de passe doit contenir au moins 6 caractères';
  return null;
};

export const validerConfirmation = (mdp, confirmation) => {
  if (!confirmation) return 'Veuillez confirmer le mot de passe';
  if (mdp !== confirmation) return 'Les mots de passe diffèrent';
  return null;
};

export const validerCgu = (cgu) => {
  return cgu ? null : 'Vous devez accepter les CGU';
};

export const validerTelephone = (tel) => {
  if (!tel || !tel.trim()) return null;
  return null;
};

// TP 2 - Etape 1.2 : validation globale du formulaire d'inscription
export const validerFormulaire = (form, cgu) => {
  const resultats = {
    nom: validerNom(form.nom),
    prenom: validerPrenom(form.prenom),
    email: validerEmail(form.email),
    telephone: validerTelephone(form.telephone),
    mdp: validerMdp(form.mdp),
    confirmation: validerConfirmation(form.mdp, form.confirmation),
    cgu: validerCgu(cgu),
  };
  return Object.fromEntries(
    Object.entries(resultats).filter(([, message]) => message !== null)
  );
};

// TP 2 - Etape 4.2 : validation simplifiee pour le formulaire de connexion
export const validerMdpSaisi = (mdp) =>
  mdp ? null : 'Le mot de passe est obligatoire';

export const validerFormulaireLogin = (form) => {
  const resultats = {
    email: validerEmail(form.email),
    mdp: validerMdpSaisi(form.mdp),
  };
  return Object.fromEntries(
    Object.entries(resultats).filter(([, message]) => message !== null)
  );
};
