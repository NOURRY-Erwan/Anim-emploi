
import React from 'react';
import { Link } from 'react-router-dom';

const BriefcaseIcon = ({className}: {className: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
);

const UserPlusIcon = ({className}: {className: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.5 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-100">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-animem-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-animem-red/10 rounded-full blur-3xl"></div>
        
        <div className="relative p-8 md:p-16 text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-animem-blue text-sm font-black rounded-full mb-6">
                TERRITOIRE DE MORLAIX
            </span>
            <h1 className="text-5xl md:text-7xl font-montserrat font-black text-slate-800 leading-tight">
                Bienvenue sur <span className="text-animem-blue">Anim’emploi</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 font-medium">
                Le portail qui connecte les structures jeunesse et les animateurs passionnés.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/offres" 
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-animem-blue text-white font-black rounded-2xl shadow-lg shadow-sky-200 hover:scale-105 transition-all text-lg"
              >
                <BriefcaseIcon className="h-6 w-6" />
                Trouver un job
              </Link>
              <Link 
                to="/publier" 
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-animem-red text-white font-black rounded-2xl shadow-lg shadow-rose-200 hover:scale-105 transition-all text-lg"
              >
                <UserPlusIcon className="h-6 w-6" />
                Je recrute
              </Link>
            </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-animem-blue mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 01-9-3.859M15 7a3 3 0 11-6 0 3 3 0 016 0zm-5 8h.01D17 17a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-xl font-black font-montserrat text-slate-800 mb-3">Pour les Animateurs</h3>
            <p className="text-slate-600 leading-relaxed">Accédez à toutes les offres locales (périscolaire, ALSH, séjours) et déposez votre CV en 2 minutes.</p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-animem-green mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-black font-montserrat text-slate-800 mb-3">Proximité & Confiance</h3>
            <p className="text-slate-600 leading-relaxed">Une plateforme gérée localement pour valoriser les métiers de l'animation sur notre territoire.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-animem-red mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-xl font-black font-montserrat text-slate-800 mb-3">Pour les Structures</h3>
            <p className="text-slate-600 leading-relaxed">Publiez vos offres gratuitement et accédez à une CVthèque de candidats qualifiés du pays de Morlaix.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
