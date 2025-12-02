
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">Contact & Mentions Légales</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-morlaix-blue mb-3">Nous contacter</h2>
          <p className="text-gray-700">
            Pour toute question concernant le site Anim'emploi, vous pouvez contacter le service jeunesse de Morlaix Communauté.
          </p>
          <ul className="mt-2 text-gray-600 list-none space-y-1">
            <li><strong>Email :</strong> <a href="mailto:servicejeunesse@ville-carantec.com" className="text-morlaix-blue hover:underline">servicejeunesse@ville-carantec.com</a></li>
            <li><strong>Téléphone :</strong> 02 98 78 35 25</li>
            <li><strong>Adresse :</strong> 11 rue Duquesne 29660 Carantec</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-morlaix-blue mb-3">Mentions Légales</h2>
          <div className="prose max-w-none text-gray-700">
            <p><strong>Éditeur du site :</strong> Erwan NOURRY</p>
            <p><strong>Hébergement :</strong> Ce site est une démonstration et n'est pas hébergé publiquement. Le code est fourni pour être déployé sur un service au choix (NAS Synology, Softr, etc.).</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-morlaix-blue mb-3">Politique de Confidentialité et RGPD</h2>
           <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Anim'emploi s'engage à ce que la collecte et le traitement de vos données, effectués à partir de ce site, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
              </p>
              <p>
                <strong>Collecte des données :</strong> Les informations recueillies sur les formulaires "Publier une offre" et "Déposer un CV" sont enregistrées dans un fichier informatisé temporaire pour la gestion des annonces. Elles sont destinées uniquement aux services et structures cherchant à recruter.
              </p>
               <p>
                <strong>Durée de conservation :</strong> Les données sont conservées pendant la durée de la saison de recrutement et sont supprimées par la suite, sauf demande contraire de votre part. Les CV sont conservés pour une durée maximale de 12 mois.
              </p>
              <p>
                <strong>Vos droits :</strong> Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, veuillez vous adresser au contact mentionné ci-dessus.
              </p>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
