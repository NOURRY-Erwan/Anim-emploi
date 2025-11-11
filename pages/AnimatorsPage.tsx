
import React from 'react';
import { Link } from 'react-router-dom';

const AnimatorsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold font-montserrat text-morlaix-blue mb-4">Espace Animateurs</h1>
      <div className="prose max-w-none text-gray-700">
        <p className="text-lg">
         🎯Bienvenue sur le portail de l’animation du territoire de Morlaix Communauté
Vous êtes animateur ou structure jeunesse ? Ce site est là pour vous mettre en relation facilement !
➜ Déposez, consultez ou répondez à des offres d’emploi dans le domaine de l’animation, du périscolaire, des accueils de loisirs et des séjours.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comment trouver ton prochain job ?</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Consulte les offres :</strong> Clique sur "Voir les offres" pour découvrir toutes les annonces disponibles. Utilise les filtres pour affiner ta recherche par diplôme, commune ou période.
          </li>
          <li>
            <strong>Dépose ton CV :</strong> Rends ton profil visible auprès de toutes les structures du territoire ! Remplis notre formulaire en quelques minutes et télécharge ton CV. C'est le meilleur moyen d'être contacté pour des opportunités.
          </li>
          <li>
            <strong>Postule directement :</strong> Une offre t'intéresse ? Contacte directement la structure grâce aux informations fournies dans l'annonce. Pas d'intermédiaire, pas d'inscription compliquée.
          </li>
        </ul>
        <p className="mt-6 bg-green-50 border-l-4 border-morlaix-green p-4 rounded-r-lg">
          <strong>Notre conseil :</strong> Un CV bien rempli et une description claire de tes spécialités (grands jeux, activités manuelles, sport, etc.) feront la différence !
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/offres"
            className="w-full sm:w-auto text-center px-8 py-4 bg-morlaix-blue text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            Voir les offres
          </Link>
          <Link
            to="/cv"
            className="w-full sm:w-auto text-center px-8 py-4 bg-morlaix-green text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            Déposer mon CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimatorsPage;