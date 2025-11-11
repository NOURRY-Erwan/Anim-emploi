
import React from 'react';
import { Link } from 'react-router-dom';

const StructuresPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold font-montserrat text-morlaix-red mb-4">Espace Structures</h1>
      <div className="prose max-w-none text-gray-700">
        <p className="text-lg">
          Bienvenue dans votre espace dédié. Anim'emploi est conçu pour simplifier vos recrutements et vous mettre en relation avec des animateurs qualifiés et motivés du territoire de Morlaix.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comment ça marche ?</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Préparez votre offre :</strong> Rassemblez toutes les informations nécessaires (titre du poste, dates, diplômes requis, description des missions, contact).
          </li>
          <li>
            <strong>Publiez en quelques clics :</strong> Cliquez sur le bouton "Publier une offre" ci-dessous et remplissez le formulaire. C'est simple, rapide et gratuit.
          </li>
          <li>
            <strong>Recevez les candidatures :</strong> Les animateurs intéressés vous contacteront directement via les informations que vous aurez fournies.
          </li>
          <li>
            <strong>Gérez vos annonces :</strong> Une fois le poste pourvu, vous pouvez archiver votre annonce pour qu'elle n'apparaisse plus dans les recherches actives.
          </li>
        </ol>
        <p className="mt-6 bg-blue-50 border-l-4 border-morlaix-blue p-4 rounded-r-lg">
          <strong>Notre objectif :</strong> vous faire gagner du temps et faciliter la recherche de personnel compétent pour assurer la qualité de l'accueil de vos publics.
        </p>
        <div className="mt-10 text-center">
          <Link
            to="/publier"
            className="inline-block px-10 py-4 bg-morlaix-red text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            Publier une offre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StructuresPage;