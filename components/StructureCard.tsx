
import React from 'react';
import { Structure } from '../types';

const MapPinIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const UsersIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M5.125 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM1.875 14.25a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z" /></svg>;
const ChevronRightIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const CalendarDaysIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>;

interface StructureCardProps {
    structure: Structure;
    onViewDetails: () => void;
}

const StructureCard: React.FC<StructureCardProps> = ({ structure, onViewDetails }) => {
    return (
        <button 
            onClick={onViewDetails}
            className="w-full text-left bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morlaix-blue"
            aria-label={`Voir les détails pour ${structure.name}`}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Left Part: Name and Location */}
                <div className="flex-grow">
                    <h3 className="text-lg font-bold font-montserrat text-morlaix-blue">{structure.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1.5 mt-1">
                        <MapPinIcon className="h-4 w-4 text-morlaix-red flex-shrink-0" />
                        {structure.commune}
                    </p>
                </div>

                {/* Middle Part: Key Info */}
                <div className="flex-shrink-0 grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm text-gray-700 w-full sm:w-auto">
                    <div className="flex items-center gap-2" title="Public accueilli">
                        <UsersIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0" />
                        <span className="truncate">{structure.ageGroup}</span>
                    </div>
                    <div className="flex items-center gap-2" title="Périodes d'ouverture">
                        <CalendarDaysIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0" />
                        <span className="truncate">{structure.openingPeriods}</span>
                    </div>
                </div>

                {/* Right Part: Action */}
                <div className="flex-shrink-0 self-end sm:self-center">
                    <div className="hidden sm:flex items-center gap-1 text-morlaix-blue font-semibold">
                       <span>Voir plus</span>
                       <ChevronRightIcon className="h-5 w-5" />
                    </div>
                    <div className="sm:hidden px-4 py-2 bg-morlaix-blue text-white rounded-md text-sm font-semibold">
                        Détails
                    </div>
                </div>
            </div>
        </button>
    );
};

export default StructureCard;