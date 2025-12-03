
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { JobOffer, Diploma, PositionType, ContractType, AgeGroup, ActivityPeriod } from '../types';
import { COMMUNES } from '../constants';
import JobOfferCard from '../components/JobOfferCard';
import JobOfferModal from '../components/JobOfferModal';

const XMarkIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

const initialFilters = {
    searchTerm: '',
    diplomas: [] as Diploma[],
    commune: '',
    showInactive: false,
    positionType: 'all',
    contractType: 'all',
    ageGroups: [] as AgeGroup[],
    activityPeriods: [] as ActivityPeriod[],
    startDate: '',
    endDate: '',
};

const JobOffersPage: React.FC = () => {
  const { jobOffers, toggleJobOfferStatus } = useAppContext();
  const [selectedOffer, setSelectedOffer] = useState<JobOffer | null>(null);
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && name !== 'showInactive') {
        return; // Handled by handleCheckboxFilterChange
    }
     if (name === 'showInactive') {
        const { checked } = e.target as HTMLInputElement;
        setFilters(prev => ({...prev, [name]: checked}));
    } else {
        setFilters(prev => ({...prev, [name]: value}));
    }
  };

  const handleCheckboxFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterKey: 'diplomas' | 'ageGroups' | 'activityPeriods'
  ) => {
    const { value, checked } = e.target;
    const item = value as Diploma | AgeGroup | ActivityPeriod;
    setFilters(prev => {
        const currentValues = prev[filterKey] as Array<Diploma | AgeGroup | ActivityPeriod>;
        const newValues = checked
            ? [...currentValues, item]
            : currentValues.filter(v => v !== item);
        return { ...prev, [filterKey]: newValues };
    });
  };

  const resetFilters = () => {
      setFilters(initialFilters);
  };

  const filteredOffers = useMemo(() => {
    return jobOffers.filter(offer => {
      const searchTermMatch =
        offer.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        offer.structure.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      const diplomaMatch = filters.diplomas.length === 0 || filters.diplomas.some(d => offer.diplomas.includes(d));
      const ageGroupMatch = filters.ageGroups.length === 0 || filters.ageGroups.some(ag => offer.ageGroups.includes(ag));
      const activityPeriodMatch = filters.activityPeriods.length === 0 || filters.activityPeriods.some(ap => offer.activityPeriods.includes(ap));
      
      const communeMatch = filters.commune === '' || offer.commune === filters.commune;
      const positionMatch = filters.positionType === 'all' || offer.positionType === filters.positionType;
      const contractMatch = filters.contractType === 'all' || offer.contractType === filters.contractType;
      
      const startDateMatch = filters.startDate === '' || new Date(offer.startDate) >= new Date(filters.startDate);
      const endDateMatch = filters.endDate === '' || new Date(offer.endDate) <= new Date(filters.endDate);

      const activeMatch = filters.showInactive || offer.active;

      return searchTermMatch && diplomaMatch && ageGroupMatch && activityPeriodMatch && communeMatch && positionMatch && contractMatch && startDateMatch && endDateMatch && activeMatch;
    });
  }, [jobOffers, filters]);

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
                <h1 className="text-3xl font-bold font-montserrat text-gray-800">Offres d'emploi</h1>
                <p className="mt-2 text-gray-600">Trouvez votre prochaine mission d'animation sur le territoire de Morlaix.</p>
            </div>
            <button 
                onClick={resetFilters}
                className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-morlaix-blue transition-colors border border-gray-300 px-3 py-1.5 rounded-md hover:border-morlaix-blue bg-white"
            >
                <XMarkIcon className="h-4 w-4" />
                Réinitialiser les filtres
            </button>
        </div>
        
        <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <input
                    type="text"
                    name="searchTerm"
                    placeholder="Recherche (poste, structure...)"
                    value={filters.searchTerm}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue"
                  />
                  <select
                    name="commune"
                    value={filters.commune}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue bg-white"
                  >
                    <option value="">Toutes les communes</option>
                    {COMMUNES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <select
                    name="positionType"
                    value={filters.positionType}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue bg-white"
                  >
                    <option value="all">Tous les postes</option>
                    {Object.values(PositionType).map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select
                    name="contractType"
                    value={filters.contractType}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue bg-white"
                  >
                    <option value="all">Tous les contrats</option>
                    {Object.values(ContractType).map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <div className="flex flex-col">
                    <label htmlFor="startDate" className="text-sm text-gray-600">Début après le</label>
                    <input type="date" name="startDate" id="startDate" value={filters.startDate} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue"/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="endDate" className="text-sm text-gray-600">Fin avant le</label>
                    <input type="date" name="endDate" id="endDate" value={filters.endDate} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-morlaix-blue focus:border-morlaix-blue"/>
                  </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <details className="border rounded-md p-2" open={filters.diplomas.length > 0}><summary className="cursor-pointer font-semibold">Diplômes requis</summary><div className="mt-2 grid grid-cols-2 gap-2">{Object.values(Diploma).map(d => (<div key={d} className="flex items-center"><input type="checkbox" id={`diploma-${d}`} value={d} checked={filters.diplomas.includes(d)} onChange={e => handleCheckboxFilterChange(e, 'diplomas')} className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" /><label htmlFor={`diploma-${d}`} className="ml-2 text-sm text-gray-700">{d}</label></div>))}</div></details>
                <details className="border rounded-md p-2" open={filters.ageGroups.length > 0}><summary className="cursor-pointer font-semibold">Tranches d'âge</summary><div className="mt-2 grid grid-cols-2 gap-2">{Object.values(AgeGroup).map(ag => (<div key={ag} className="flex items-center"><input type="checkbox" id={`age-${ag}`} value={ag} checked={filters.ageGroups.includes(ag)} onChange={e => handleCheckboxFilterChange(e, 'ageGroups')} className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" /><label htmlFor={`age-${ag}`} className="ml-2 text-sm text-gray-700">{ag}</label></div>))}</div></details>
                <details className="border rounded-md p-2" open={filters.activityPeriods.length > 0}><summary className="cursor-pointer font-semibold">Périodes d'activité</summary><div className="mt-2 grid grid-cols-1 gap-2">{Object.values(ActivityPeriod).map(ap => (<div key={ap} className="flex items-center"><input type="checkbox" id={`activity-${ap}`} value={ap} checked={filters.activityPeriods.includes(ap)} onChange={e => handleCheckboxFilterChange(e, 'activityPeriods')} className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" /><label htmlFor={`activity-${ap}`} className="ml-2 text-sm text-gray-700">{ap}</label></div>))}</div></details>
            </div>
             <div className="flex items-center justify-self-start pt-2">
                <input
                    type="checkbox"
                    id="showInactive"
                    name="showInactive"
                    checked={filters.showInactive}
                    onChange={handleFilterChange}
                    className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue"
                />
                <label htmlFor="showInactive" className="ml-2 block text-sm text-gray-900">
                    Afficher les offres archivées
                </label>
            </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOffers.length > 0 ? (
          filteredOffers.map(offer => (
            <JobOfferCard 
              key={offer.id} 
              offer={offer} 
              onViewDetails={() => setSelectedOffer(offer)} 
            />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500">Aucune offre ne correspond à vos critères de recherche.</p>
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

export default JobOffersPage;
