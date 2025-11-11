import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold text-morlaix-blue">Anim'emploi</h3>
            <p className="mt-2 text-gray-400">Le portail des animateurs du territoire de Morlaix</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-morlaix-blue transition-colors">Accueil</Link></li>
              <li><Link to="/offres" className="hover:text-morlaix-blue transition-colors">Offres d'emploi</Link></li>
              <li><Link to="/cv" className="hover:text-morlaix-blue transition-colors">Déposer un CV</Link></li>
              <li><Link to="/publier" className="hover:text-morlaix-blue transition-colors">Publier une offre</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Légal</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="hover:text-morlaix-blue transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-morlaix-blue transition-colors">Mentions Légales & RGPD</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Anim'emploi - Morlaix Communauté. Tous droits réservés.</p>
           <div className="mt-2">
            <Link to="/connexion" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Administration</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;