
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const RecruitersPage: React.FC = () => {
  const { currentUser } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold font-montserrat text-morlaix-red mb-4">Espace Recruteurs</h1>
      <div className="prose max-w-none text-gray-700">
        <p className="text-lg">
          Bienvenue dans votre espace dédié. Créez votre compte pour simplifier vos recrutements et vous mettre en relation avec des animateurs qualifiés du territoire.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comment ça marche ?</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Créez votre compte Structure :</strong> Cliquez sur "Créer un compte" et renseignez le nom de votre structure et un email. C'est gratuit et rapide.
          </li>
           <li>
            <strong>Connectez-vous à votre espace :</strong> Une fois votre compte créé, connectez-vous pour accéder à votre tableau de bord personnel.
          </li>
          <li>
            <strong>Gérez vos offres :</strong> Publiez, modifiez et archivez vos offres d'emploi en toute autonomie.
          </li>
          <li>
            <strong>Recevez les candidatures :</strong> Les animateurs intéressés vous contacteront directement via les informations que vous aurez fournies.
          </li>
        </ol>
        <p className="mt-6 bg-blue-50 border-l-4 border-morlaix-blue p-4 rounded-r-lg">
          <strong>Notre objectif :</strong> vous offrir un outil simple et autonome pour gérer vos recrutements et trouver les meilleurs profils pour vos équipes.
        </p>
        <div className="mt-10 text-center">
            {currentUser ? (
                 <Link
                    to="/mon-compte"
                    className="inline-block px-10 py-4 bg-morlaix-red text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
                >
                    Accéder à mon compte
                </Link>
            ) : (
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                        to="/connexion"
                        className="w-full sm:w-auto text-center px-8 py-4 bg-white border-2 border-morlaix-blue text-morlaix-blue font-bold rounded-lg shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
                    >
                        Se connecter
                    </Link>
                    <Link
                        to="/inscription"
                        className="w-full sm:w-auto text-center px-8 py-4 bg-morlaix-red text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
                    >
                        Créer un compte
                    </Link>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default RecruitersPage;
