import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Utiliser './' permet au projet d'être déployé n'importe où (racine ou sous-dossier)
  // sans avoir à modifier le code. Très utile pour Vercel, Netlify ou GitHub Pages.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});