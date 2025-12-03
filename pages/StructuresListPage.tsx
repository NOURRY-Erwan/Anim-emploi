
import React, { useMemo, useState } from 'react';
import { COMMUNES } from '../constants';
import { useAppContext } from '../hooks/useAppContext';
import StructureCard from '../components/StructureCard';
import StructureModal from '../components/StructureModal';
import { Structure } from '../types';

const ArrowPathIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>;

const StructuresListPage: React.FC = () => {
  const { structures, resetData } = useAppContext();
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
          <div className="text-center py-12 bg-white rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
            <p className="text-gray-500">Aucune structure ne correspond à vos critères de recherche.</p>
            {structures.length === 0 && (
                 <button 
                    onClick={resetData}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-morlaix-blue border border-morlaix-blue rounded-md hover:bg-blue-50 transition-colors"
                 >
                    <ArrowPathIcon className="h-4 w-4" />
                    Charger les données de démonstration
                 </button>
            )}
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
