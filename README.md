# Anim’emploi – Territoire de Morlaix

Application web de mise en relation pour les structures jeunesse et les animateurs du territoire de Morlaix.

## Prérequis

- Node.js installé sur votre machine.
- Un compte GitHub.
- Un dépôt GitHub créé nommé `Anim-emploi` (pour correspondre à la configuration `vite.config.js`).

## Installation

1. Clonez ce dépôt ou téléchargez les fichiers.
2. Ouvrez un terminal à la racine du projet.
3. Installez les dépendances :

```bash
npm install
```

## Lancement en local (Développement)

Pour tester le site sur votre ordinateur :

```bash
npm run dev
```

Le site sera accessible via l'URL indiquée dans le terminal (généralement `http://localhost:5173`).

## Déploiement sur GitHub Pages

Ce projet est configuré pour être hébergé gratuitement sur GitHub Pages.

### 1. Configuration initiale

Assurez-vous que :
1. Le dépôt GitHub est créé.
2. Le nom du dépôt correspond à la valeur `base` dans `vite.config.js` (actuellement `/Anim-emploi/`). Si votre dépôt s'appelle différemment, modifiez cette valeur dans le fichier `vite.config.js`.
3. Vos fichiers sont "commit" sur git.

### 2. Mettre en ligne

Lancez simplement la commande suivante :

```bash
npm run deploy
```

Cette commande va :
1. Construire le site (Build).
2. Envoyer le dossier `dist` sur la branche `gh-pages` de votre dépôt.

Une fois terminé, votre site sera visible après quelques minutes à l'adresse : `https://<VOTRE-NOM-UTILISATEUR>.github.io/Anim-emploi/`

## Gestion Git

Pour sauvegarder vos modifications sur le code source :

```bash
git add .
git commit -m "Description de vos modifications"
git push origin main
```
