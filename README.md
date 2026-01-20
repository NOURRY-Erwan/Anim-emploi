
# Anim’emploi – Territoire de Morlaix

Plateforme de mise en relation pour les structures jeunesse et les animateurs.

## 🌍 Comment partager avec vos collègues ?

Par défaut, ce site stocke les données uniquement sur **votre** ordinateur (LocalStorage). Pour que vos collègues voient vos annonces et que vous voyiez leurs CV, suivez ces étapes :

### 1. Hébergement (Mettre le site en ligne)
Le plus simple est **Vercel** :
1. Créez un compte sur [Vercel.com](https://vercel.com).
2. Connectez votre GitHub et importez ce projet.
3. Une fois déployé, vous aurez une adresse URL à partager.

### 2. Partage des données (Base de données)
Nous utilisons **Supabase** pour synchroniser les données entre tous les utilisateurs :
1. Créez un projet gratuit sur [Supabase](https://supabase.com).
2. Dans les paramètres du projet (API), récupérez :
   - `Project URL`
   - `Anon Key`
3. Ouvrez le fichier `src/context/AppContext.tsx` (ou demandez-moi de le faire).
4. Remplissez les variables `SUPABASE_URL` et `SUPABASE_KEY`.
5. Dans l'interface Supabase, créez les tables : `job_offers`, `cv_submissions`, `structures`, `users`.

## 🛠️ Développement local
```bash
npm install
npm run dev
```

## 📝 Note RGPD
Les CV contiennent des données personnelles. Assurez-vous de configurer les politiques de sécurité (RLS) sur Supabase pour que seuls les administrateurs et structures puissent voir les CV.
