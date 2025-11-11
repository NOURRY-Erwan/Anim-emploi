
import React from 'react';
import { JobOffer } from '../types';
import { useAppContext } from '../hooks/useAppContext';

const MapPinIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>);
const AcademicCapIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>);
const CalendarDaysIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>);
const BuildingOffice2Icon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.25 21H2.75A2.25 2.25 0 01.5 18.75V3.75A2.25 2.25 0 012.75 1.5h18.5A2.25 2.25 0 0123.5 3.75v15a2.25 2.25 0 01-2.25 2.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 10.5h7.5M8.25 14.25h7.5M8.25 18h7.5" /></svg>);
const EnvelopeIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>);
const XMarkIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);
const UserCircleIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const DocumentTextIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const UsersIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClockIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

interface JobOfferModalProps {
    offer: JobOffer;
    onClose: () => void;
    onToggleStatus?: () => void;
}

const JobOfferModal: React.FC<JobOfferModalProps> = ({ offer, onClose, onToggleStatus }) => {
    const { currentUser } = useAppContext();
    const canManage = currentUser && (currentUser.role === 'admin' || currentUser.id === offer.userId);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-full flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold font-montserrat text-gray-800">{offer.title}</h2>
                        <p className="text-morlaix-red font-semibold flex items-center gap-2 mt-1">
                            <BuildingOffice2Icon className="h-5 w-5" /> {offer.structure}
                        </p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <XMarkIcon className="h-8 w-8" />
                    </button>
                </div>

                <div className="p-6 space-y-6 overflow-y-auto">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Description du poste</h4>
                        <p className="text-gray-600 whitespace-pre-wrap">{offer.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><UserCircleIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Type de poste</p><p className="font-semibold text-gray-800">{offer.positionType}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><DocumentTextIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Type de contrat</p><p className="font-semibold text-gray-800">{offer.contractType}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><CalendarDaysIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Date de début</p><p className="font-semibold text-gray-800">{new Date(offer.startDate).toLocaleDateString('fr-FR')}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><CalendarDaysIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Date de fin</p><p className="font-semibold text-gray-800">{new Date(offer.endDate).toLocaleDateString('fr-FR')}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3 md:col-span-2"><AcademicCapIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Diplômes requis</p><p className="font-semibold text-gray-800">{offer.diplomas.join(', ')}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><UsersIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Tranches d'âge</p><p className="font-semibold text-gray-800">{offer.ageGroups.join(', ')}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><ClockIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Périodes d'activité</p><p className="font-semibold text-gray-800">{offer.activityPeriods.join(', ')}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><MapPinIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Commune</p><p className="font-semibold text-gray-800">{offer.commune}</p></div></div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"><EnvelopeIcon className="h-6 w-6 text-morlaix-blue" /><div><p className="text-sm text-gray-500">Contact</p><a href={`mailto:${offer.contact}`} className="font-semibold text-morlaix-blue hover:underline">{offer.contact}</a></div></div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                     <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${offer.active ? 'bg-morlaix-green' : 'bg-gray-500'}`}>{offer.active ? 'Statut : Ouvert' : 'Statut : Archivé'}</span>
                    <div className="flex gap-4">
                         {canManage && onToggleStatus && <button onClick={onToggleStatus} className={`px-4 py-2 rounded-md font-semibold text-white ${offer.active ? 'bg-morlaix-red hover:bg-red-700' : 'bg-morlaix-green hover:bg-green-700'}`}>{offer.active ? 'Archiver l\'offre' : 'Réactiver l\'offre'}</button>}
                        <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-semibold">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobOfferModal;
