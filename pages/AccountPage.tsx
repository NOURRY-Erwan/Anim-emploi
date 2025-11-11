
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { JobOffer, Structure } from '../types';
import JobOfferCard from '../components/JobOfferCard';
import JobOfferModal from '../components/JobOfferModal';

const PlusIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
const PencilIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>;


const AccountPage: React.FC = () => {
    const { currentUser, logout, jobOffers, toggleJobOfferStatus, getStructureByUserId } = useAppContext();
    const navigate = useNavigate();
    const [selectedOffer, setSelectedOffer] = useState<JobOffer | null>(null);
    const [structure, setStructure] = useState<Structure | null>(null);

    useEffect(() => {
        if(currentUser) {
            const s = getStructureByUserId(currentUser.id);
            if(s) setStructure(s);
        }
    }, [currentUser, getStructureByUserId]);

    const myJobOffers = useMemo(() => {
        if (!currentUser) return [];
        return jobOffers.filter(offer => offer.userId === currentUser.id);
    }, [jobOffers, currentUser]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!currentUser || !structure) {
        return <p>Chargement...</p>;
    }
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-montserrat text-gray-800">Mon Compte</h1>
                    <p className="mt-1 text-gray-600">Bienvenue, {structure.name}.</p>
                </div>
                <button onClick={handleLogout} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 font-semibold self-start sm:self-center">
                    Déconnexion
                </button>
            </div>

            <div className="bg-blue-50 border-l-4 border-morlaix-blue p-6 rounded-r-lg shadow-sm mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className='md:col-span-2'>
                    <h2 className="text-xl font-semibold text-gray-800">Informations de ma structure</h2>
                    <p className="mt-2 text-gray-600">
                       Assurez-vous que les informations de votre structure sont à jour pour les visiteurs de l'annuaire.
                    </p>
                </div>
                 <div className='flex items-center justify-start md:justify-end'>
                    <Link to={`/admin/structures/edit/${currentUser.structureId}`} className="inline-flex items-center gap-2 bg-morlaix-blue text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors font-bold text-sm">
                         <PencilIcon className="h-5 w-5" />
                        Modifier mes infos
                    </Link>
                </div>
            </div>

             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Mes offres d'emploi ({myJobOffers.length})</h2>
                 <Link to="/publier" className="inline-flex items-center gap-2 bg-morlaix-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-semibold text-sm">
                    <PlusIcon className="h-5 w-5" />
                    Publier une nouvelle offre
                </Link>
            </div>

             <div className="space-y-4 mt-6">
                {myJobOffers.length > 0 ? (
                  myJobOffers.map(offer => (
                    <JobOfferCard 
                      key={offer.id} 
                      offer={offer} 
                      onViewDetails={() => setSelectedOffer(offer)} 
                    />
                  ))
                ) : (
                  <div className="text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-gray-500">Vous n'avez publié aucune offre pour le moment.</p>
                  </div>
                )}
            </div>

             {selectedOffer && (
                <JobOfferModal 
                  offer={selectedOffer} 
                  onClose={() => setSelectedOffer(null)}
                  onToggleStatus={() => {
                    toggleJobOfferStatus(selectedOffer.id);
                    setSelectedOffer(prev => prev ? {...prev, active: !prev.active} : null);
                  }}
                />
            )}
        </div>
    );
};

export default AccountPage;
