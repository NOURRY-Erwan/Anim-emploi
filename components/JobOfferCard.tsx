
import React from 'react';
import { JobOffer } from '../types';

const MapPinIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>);
const AcademicCapIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>);
const CalendarDaysIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>);
const BuildingOffice2Icon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.25 21H2.75A2.25 2.25 0 01.5 18.75V3.75A2.25 2.25 0 012.75 1.5h18.5A2.25 2.25 0 0123.5 3.75v15a2.25 2.25 0 01-2.25 2.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 10.5h7.5M8.25 14.25h7.5M8.25 18h7.5" /></svg>);
const ClockIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const UserCircleIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const DocumentTextIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;


interface JobOfferCardProps {
    offer: JobOffer;
    onViewDetails: () => void;
}

const JobOfferCard: React.FC<JobOfferCardProps> = ({ offer, onViewDetails }) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] border-l-8 ${offer.active ? 'border-morlaix-blue' : 'border-gray-400'}`}>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-sm font-semibold text-morlaix-blue">{offer.positionType} ({offer.contractType})</span>
                        <h3 className="text-xl font-bold font-montserrat text-gray-800">{offer.title}</h3>
                        <p className="text-morlaix-red font-semibold flex items-center gap-2 mt-1">
                            <BuildingOffice2Icon className="h-5 w-5" /> {offer.structure}
                        </p>
                    </div>
                     <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${offer.active ? 'bg-morlaix-green' : 'bg-gray-500'}`}>
                        {offer.active ? 'Ouvert' : 'Archivé'}
                    </span>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-gray-600 text-sm">
                    <div className="flex items-start gap-2">
                        <CalendarDaysIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0 mt-0.5" />
                        <span>Du {new Date(offer.startDate).toLocaleDateString('fr-FR')} au {new Date(offer.endDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                     <div className="flex items-start gap-2">
                        <MapPinIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0 mt-0.5" />
                        <span>{offer.commune}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <AcademicCapIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0 mt-0.5" />
                        <span>{offer.diplomas.join(', ')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <ClockIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0 mt-0.5" />
                        <span>{offer.activityPeriods.join(', ')}</span>
                    </div>
                </div>

                <div className="mt-6 text-right">
                    <button 
                        onClick={onViewDetails}
                        className="bg-morlaix-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Voir les détails
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobOfferCard;