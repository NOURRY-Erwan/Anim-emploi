
import React, { useMemo, useState } from 'react';
import { COMMUNES } from '../constants';
import { useAppContext } from '../hooks/useAppContext';
import StructureCard from '../components/StructureCard';
import { Structure } from '../types';

// --- Icon components (for the Modal) ---
const MapPinIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const UsersIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M5.125 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM1.875 14.25a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z" /></svg>;
const CalendarDaysIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>;
const UserGroupIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const RocketLaunchIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25c-5.508 0-10.72 2.266-14.634 6.732.362.362.72.72.992 1.077m-1.634 8.732a6 6 0 01-5.84-7.38C2.25 9.143 2.25 7.5 2.25 6c0-1.5.002-3.143.69-4.372M16.5 7.5l-1.5-1.5m0 0l-1.5 1.5m1.5-1.5v1.5m0-1.5h1.5m-1.5 0h-1.5" /></svg>;
const SparklesIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846-.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.455-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456l1.178.398-1.178.398a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const ClockIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const EnvelopeIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const PhoneIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>;
const GlobeAltIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.916 17.916 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
const XMarkIcon: React.FC<{className: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);

// --- Helper components (for the Modal) ---
const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string | React.ReactNode;}> = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 text-morlaix-blue mt-1">{icon}</div>
        <div>
            <p className="font-semibold text-gray-700">{label}</p>
            <div className="text-gray-600">{value}</div>
        </div>
    </div>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-blue-100 text-morlaix-blue text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
        {children}
    </span>
);

// --- Modal Component ---
interface StructureModalProps {
    structure: Structure;
    onClose: () => void;
}

const StructureModal: React.FC<StructureModalProps> = ({ structure, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-full flex flex-col" onClick={e => e.stopPropagation()}>
                <header className="p-6 border-b border-gray-200 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold font-montserrat text-morlaix-blue">{structure.name}</h2>
                        <p className="text-morlaix-red font-semibold flex items-center gap-2 mt-1">
                            <MapPinIcon className="h-5 w-5" /> {structure.commune} &ndash; <span className="text-gray-500 font-normal">{structure.address}</span>
                        </p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Fermer la fenêtre">
                        <XMarkIcon className="h-8 w-8" />
                    </button>
                </header>
                
                <main className="p-6 space-y-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                        <InfoItem icon={<UsersIcon className="w-full h-full" />} label="Public accueilli" value={structure.ageGroup} />
                        <InfoItem icon={<CalendarDaysIcon className="w-full h-full" />} label="Périodes d'ouverture" value={structure.openingPeriods} />
                        <InfoItem icon={<UserGroupIcon className="w-full h-full" />} label="Équipe" value={structure.team} />
                        <InfoItem icon={<ClockIcon className="w-full h-full" />} label="Horaires d’accueil" value={structure.openingHours} />
                    </div>

                    <div className="border-t pt-5">
                         <InfoItem 
                            icon={<RocketLaunchIcon className="w-full h-full" />} 
                            label="Objectifs éducatifs" 
                            value={<div className="flex flex-wrap mt-1">{structure.educationalObjectives.map(o => <Tag key={o}>{o}</Tag>)}</div>} 
                        />
                    </div>
                     <div className="border-t pt-5">
                        <InfoItem 
                            icon={<SparklesIcon className="w-full h-full" />} 
                            label="Activités proposées" 
                            value={<div className="flex flex-wrap mt-1">{structure.activities.map(a => <Tag key={a}>{a}</Tag>)}</div>} 
                        />
                    </div>

                     <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2">Contact & Inscriptions</h4>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                            {structure.contact.email && <a href={`mailto:${structure.contact.email}`} className="flex items-center gap-2 text-morlaix-blue hover:underline"><EnvelopeIcon className="h-4 w-4" /> {structure.contact.email}</a>}
                            {structure.contact.phone && <a href={`tel:${structure.contact.phone}`} className="flex items-center gap-2 text-morlaix-blue hover:underline"><PhoneIcon className="h-4 w-4" /> {structure.contact.phone}</a>}
                            {structure.website && <a href={structure.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-morlaix-blue hover:underline"><GlobeAltIcon className="h-4 w-4" /> Site web</a>}
                             {structure.contact.registrationLink && structure.contact.registrationLink !== '#' && <a href={structure.contact.registrationLink} target="_blank" rel="noopener noreferrer" className="font-bold text-white bg-morlaix-green px-3 py-1 rounded-full text-xs hover:bg-green-700">Lien d'inscription</a>}
                        </div>
                    </div>
                </main>
                
                <footer className="bg-gray-50 p-4 border-t border-gray-200 text-right">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-semibold">Fermer</button>
                </footer>
            </div>
        </div>
    );
};


const StructuresListPage: React.FC = () => {
  const { structures } = useAppContext();
  const [filters, setFilters] = useState({ searchTerm: '', commune: '' });
  const [selectedStructure, setSelectedStructure] = useState<Structure | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredStructures = useMemo(() => {
    return structures
        .filter(structure => {
            const searchTermMatch =
                filters.searchTerm === '' ||
                structure.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                structure.commune.toLowerCase().includes(filters.searchTerm.toLowerCase());
            
            const communeMatch = filters.commune === '' || structure.commune === filters.commune;

            return searchTermMatch && communeMatch;
        })
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
  }, [filters, structures]);
  
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-50 via-white to-green-50">
            <div className='text-center'>
                <h1 className="text-3xl font-bold font-montserrat text-gray-800">Annuaire des Structures Jeunesse</h1>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Explorez les accueils de loisirs, espaces jeunes et autres structures d'animation du territoire de Morlaix.</p>
            </div>
        </div>
        
        <div className="p-6 border-t border-gray-200">
             <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center sm:text-left">Filtres de recherche</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="searchTerm"
                placeholder="Rechercher par nom, commune..."
                value={filters.searchTerm}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue"
                aria-label="Rechercher une structure"
              />
              <select
                name="commune"
                value={filters.commune}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue bg-white"
                aria-label="Filtrer par commune"
              >
                <option value="">Toutes les communes</option>
                {[...COMMUNES].sort().map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredStructures.length > 0 ? (
          filteredStructures.map(structure => (
            <StructureCard 
              key={structure.id} 
              structure={structure} 
              onViewDetails={() => setSelectedStructure(structure)} 
            />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500">Aucune structure ne correspond à vos critères de recherche.</p>
          </div>
        )}
      </div>

      {selectedStructure && (
        <StructureModal
          structure={selectedStructure}
          onClose={() => setSelectedStructure(null)}
        />
      )}
    </div>
  );
};

export default StructuresListPage;
