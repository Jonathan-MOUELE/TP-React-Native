// Validation des formulaires Inscription et Connexion (React_FB -> React Native)
export const validerEmail = (email) => {
  if (!email || !email.trim()) return "L'email est obligatoire.";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim()) ? null : 'Email invalide.';
};

export const validerInscription = (form) => {
  if (!form.nom || !form.nom.trim()) return 'Le nom est obligatoire.';
  if (!form.prenom || !form.prenom.trim()) return 'Le prénom est obligatoire.';
  const errEmail = validerEmail(form.email);
  if (errEmail) return errEmail;
  if (!form.password) return 'Le mot de passe est obligatoire.';
  if (form.password.length < 6) {
    return 'Le mot de passe doit contenir au moins 6 caractères.';
  }
  if (form.password !== form.confirmation) {
    return 'Les mots de passe ne correspondent pas.';
  }
  if (!form.cgu) {
    return "Vous devez accepter les conditions d'utilisation.";
  }
  return null;
};

export const validerConnexion = (form) => {
  const errEmail = validerEmail(form.email);
  if (errEmail) return errEmail;
  if (!form.password) return 'Le mot de passe est obligatoire.';
  return null;
};
