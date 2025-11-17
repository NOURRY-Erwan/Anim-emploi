import React from 'react';
import { Link } from 'react-router-dom';

const BriefcaseIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);

const UserPlusIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.5 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);


const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-800">
          Bienvenue sur <span className="text-morlaix-blue">Anim’emploi</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          🎯Bienvenue sur le portail de l’animation du territoire de Morlaix Communauté
        </p>

        <div className="mt-8 max-w-3xl mx-auto text-gray-700 space-y-3">
          <p>
            Vous êtes animateur ou structure jeunesse ? Ce site est là pour vous mettre en relation facilement !
          </p>
          <p>
            ➜ Déposez, consultez ou répondez à des offres d’emploi dans le domaine de l’animation, du périscolaire, des accueils de loisirs et des séjours.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            to="/offres" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-morlaix-blue text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            <BriefcaseIcon className="h-6 w-6" />
            Je cherche un emploi
          </Link>
          <Link 
            to="/publier" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-morlaix-red text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            <UserPlusIcon className="h-6 w-6" />
            Je recrute
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-morlaix-blue">
            <h3 className="text-xl font-bold font-montserrat text-gray-800">👥 Je suis animateur / animatrice</h3>
            <p className="mt-2 text-gray-600">Tu cherches un emploi, un stage ou un complément d’activité dans l’animation ?</p>
             <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Consulte les offres locales publiées par les structures du territoire.</li>
                <li>Crée ton profil candidat pour être contacté directement.</li>
            </ul>
        </div>
         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-morlaix-green">
            <h3 className="text-xl font-bold font-montserrat text-gray-800">Pourquoi ce site ?</h3>
            <p className="mt-2 text-gray-600">Ce portail a été créé pour :</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Faciliter la mise en relation entre animateurs et structures locales.</li>
                <li>Valoriser les métiers de l’animation sur le territoire.</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-morlaix-red">
            <h3 className="text-xl font-bold font-montserrat text-gray-800">🏕️ Je représente une structure jeunesse</h3>
            <p className="mt-2 text-gray-600">Tu souhaites recruter un animateur, un directeur ou un personnel saisonnier ?</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Publie gratuitement tes offres d’emploi.</li>
                <li>Gagne du temps en recevant des candidatures ciblées sur ton territoire.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;