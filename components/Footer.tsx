
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-animem-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">A</span>
                </div>
                <span className="text-xl font-montserrat font-black text-white">Anim’emploi</span>
            </div>
            <p className="text-slate-400">Le portail des animateurs et des structures jeunesse du territoire de Morlaix.</p>
          </div>
          <div>
            <h4 className="font-black text-white uppercase text-sm tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-animem-blue transition-colors">Accueil</Link></li>
              <li><Link to="/offres" className="hover:text-animem-blue transition-colors">Offres d'emploi</Link></li>
              <li><Link to="/cv" className="hover:text-animem-blue transition-colors">Déposer un CV</Link></li>
              <li><Link to="/structures" className="hover:text-animem-blue transition-colors">Annuaire structures</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white uppercase text-sm tracking-widest mb-6">Légal & Contact</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="hover:text-animem-blue transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-animem-blue transition-colors">Mentions Légales</Link></li>
              <li><Link to="/contact" className="hover:text-animem-blue transition-colors">RGPD</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Anim’emploi – Morlaix Communauté. Tous droits réservés.</p>
           <div className="mt-4 flex justify-center gap-4">
            <Link to="/connexion" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">Administration</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
