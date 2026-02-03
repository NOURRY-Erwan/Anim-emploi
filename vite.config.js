
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' configuré à './' pour que les chemins soient relatifs au fichier index.html.
  // C'est indispensable pour GitHub Pages (sous-dossiers).
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Désactive le sourcemap pour alléger le déploiement
    sourcemap: false,
    // Assure que le bundle est généré proprement pour les navigateurs modernes
    target: 'esnext'
  },
  server: {
    historyApiFallback: true,
  }
});
