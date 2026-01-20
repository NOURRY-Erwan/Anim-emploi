import React from 'react';
import { Structure, SocialNetwork } from '../types';

const MapPinIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const UsersIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M5.125 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM1.875 14.25a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z" /></svg>;
const ChevronRightIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const CalendarDaysIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>;
const GlobeAltIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.916 17.916 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;

// --- Social Icons ---
const FacebookIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>;
const InstagramIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.089c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>;
const LinkedInIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const TwitterIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const TikTokIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 1.62-.07 3.23-.37 4.82-.57 3.01-2.9 5.27-5.9 5.65-2.22.27-4.5-.39-6.18-1.92-1.32-1.2-1.96-2.93-1.89-4.7.07-2.02 1.05-3.87 2.72-5.04 1.47-1.03 3.28-1.34 5.04-1.01v4.05c-.41-.18-.84-.23-1.27-.19-.88.08-1.68.53-2.18 1.25-.65.91-.59 2.15.15 3.02.66.78 1.68 1.11 2.68.96 1.25-.19 2.15-1.31 2.13-2.58V.02h-3.91z"/></svg>;

const getSocialIcon = (type: SocialNetwork) => {
    switch (type) {
        case 'Facebook': return <FacebookIcon />;
        case 'Instagram': return <InstagramIcon />;
        case 'LinkedIn': return <LinkedInIcon />;
        case 'Twitter': return <TwitterIcon />;
        case 'TikTok': return <TikTokIcon />;
        default: return <GlobeAltIcon className="w-5 h-5" />;
    }
}

interface StructureCardProps {
    structure: Structure;
    onViewDetails: () => void;
}

const StructureCard: React.FC<StructureCardProps> = ({ structure, onViewDetails }) => {
    return (
        <button 
            onClick={onViewDetails}
            className="w-full text-left bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morlaix-blue group"
            aria-label={`Voir les détails pour ${structure.name}`}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Left Part: Name and Location */}
                <div className="flex-grow">
                    <h3 className="text-lg font-bold font-montserrat text-morlaix-blue group-hover:text-blue-700 transition-colors">{structure.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1.5 mt-1">
                        <MapPinIcon className="h-4 w-4 text-morlaix-red flex-shrink-0" />
                        {structure.commune}
                    </p>
                    
                    {/* Social Icons Preview */}
                    {structure.socialLinks && structure.socialLinks.length > 0 && (
                        <div className="flex gap-2 mt-2">
                             {structure.socialLinks.map((link, idx) => (
                                <span key={idx} className="text-gray-400 group-hover:text-morlaix-blue transition-colors">
                                    {getSocialIcon(link.type)}
                                </span>
                             ))}
                        </div>
                    )}
                </div>

                {/* Middle Part: Key Info */}
                <div className="flex-shrink-0 grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm text-gray-700 w-full sm:w-auto">
                    <div className="flex items-center gap-2" title="Public accueilli">
                        <UsersIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0" />
                        <span className="truncate max-w-[150px]">{structure.ageGroup}</span>
                    </div>
                    <div className="flex items-center gap-2" title="Périodes d'ouverture">
                        <CalendarDaysIcon className="h-5 w-5 text-morlaix-blue flex-shrink-0" />
                        <span className="truncate max-w-[150px]">{structure.openingPeriods}</span>
                    </div>
                </div>

                {/* Right Part: Action */}
                <div className="flex-shrink-0 self-end sm:self-center">
                    <div className="hidden sm:flex items-center gap-1 text-morlaix-blue font-semibold group-hover:translate-x-1 transition-transform">
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