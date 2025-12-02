
import React from 'react';
import { Structure, SocialNetwork } from '../types';

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
const ArrowTopRightOnSquareIcon: React.FC<{className: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>;

// --- Social Icons ---
const FacebookIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>;
const InstagramIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.089c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>;
const LinkedInIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const TwitterIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const TikTokIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 1.62-.07 3.23-.37 4.82-.57 3.01-2.9 5.27-5.9 5.65-2.22.27-4.5-.39-6.18-1.92-1.32-1.2-1.96-2.93-1.89-4.7.07-2.02 1.05-3.87 2.72-5.04 1.47-1.03 3.28-1.34 5.04-1.01v4.05c-.41-.18-.84-.23-1.27-.19-.88.08-1.68.53-2.18 1.25-.65.91-.59 2.15.15 3.02.66.78 1.68 1.11 2.68.96 1.25-.19 2.15-1.31 2.13-2.58V.02h-3.91z"/></svg>;

const getSocialIcon = (type: SocialNetwork) => {
    switch (type) {
        case 'Facebook': return <FacebookIcon />;
        case 'Instagram': return <InstagramIcon />;
        case 'LinkedIn': return <LinkedInIcon />;
        case 'Twitter': return <TwitterIcon />;
        case 'TikTok': return <TikTokIcon />;
        default: return <GlobeAltIcon className="w-6 h-6" />;
    }
}

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
                        <h4 className="font-semibold text-gray-700 mb-2">Contact & Liens</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                {structure.contact.email && <a href={`mailto:${structure.contact.email}`} className="flex items-center gap-2 text-morlaix-blue hover:underline"><EnvelopeIcon className="h-4 w-4" /> {structure.contact.email}</a>}
                                {structure.contact.phone && <a href={`tel:${structure.contact.phone}`} className="flex items-center gap-2 text-morlaix-blue hover:underline"><PhoneIcon className="h-4 w-4" /> {structure.contact.phone}</a>}
                                {structure.contact.registrationLink && structure.contact.registrationLink !== '#' && <a href={structure.contact.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-white bg-morlaix-green px-3 py-1 rounded-full text-xs hover:bg-green-700 mt-2"><span>Lien d'inscription</span> <ArrowTopRightOnSquareIcon className="h-3 w-3" /></a>}
                            </div>
                            
                            <div className="space-y-3">
                                {/* Social Links */}
                                {structure.socialLinks && structure.socialLinks.length > 0 && (
                                    <div className="flex gap-3">
                                        {structure.socialLinks.map((link, idx) => (
                                            <a 
                                                key={idx} 
                                                href={link.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-morlaix-blue transition-colors"
                                                title={link.type}
                                            >
                                                {getSocialIcon(link.type)}
                                            </a>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Other Links */}
                                {structure.otherLinks && structure.otherLinks.length > 0 && (
                                    <ul className="space-y-1">
                                        {structure.otherLinks.map((link, idx) => (
                                            <li key={idx}>
                                                <a 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex items-center gap-2 text-sm text-morlaix-blue hover:underline"
                                                >
                                                    <GlobeAltIcon className="h-4 w-4" />
                                                    {link.label || 'Site web'}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
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

export default StructureModal;