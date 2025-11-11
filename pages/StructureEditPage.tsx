
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { Structure } from '../types';
import { COMMUNES } from '../constants';

const initialFormData: Omit<Structure, 'id' | 'userId'> = {
    name: '',
    commune: COMMUNES[0],
    address: '',
    ageGroup: '',
    openingPeriods: '',
    team: '',
    educationalObjectives: [],
    activities: [],
    openingHours: '',
    contact: {
        email: '',
        phone: '',
        registrationLink: '',
    },
    website: '',
};

const StructureEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { structures, addStructure, updateStructure, currentUser } = useAppContext();
    
    const isEditMode = Boolean(id);
    const [formData, setFormData] = useState<Omit<Structure, 'id' | 'userId'>>(initialFormData);
    const [objectivesStr, setObjectivesStr] = useState('');
    const [activitiesStr, setActivitiesStr] = useState('');

    useEffect(() => {
        if (!currentUser) {
            navigate('/connexion');
            return;
        }

        let structureToEdit: Structure | undefined;

        if (isEditMode) { // Admin editing a specific structure
             structureToEdit = structures.find(s => s.id === id);
             if (structureToEdit && currentUser.role !== 'admin' && currentUser.id !== structureToEdit.userId) {
                // User trying to edit a structure that is not theirs
                navigate('/mon-compte');
                return;
             }
        } else if (currentUser.role === 'structure') { // User editing their own structure
             structureToEdit = structures.find(s => s.id === currentUser.structureId);
        }
        
        if (structureToEdit) {
            setFormData(structureToEdit);
            setObjectivesStr(structureToEdit.educationalObjectives.join('\n'));
            setActivitiesStr(structureToEdit.activities.join('\n'));
        } else if (isEditMode) {
            navigate('/admin/dashboard');
        }

    }, [id, isEditMode, structures, navigate, currentUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.startsWith('contact.')) {
            const contactField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, [contactField]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentUser) return;

        const finalData = {
            ...formData,
            educationalObjectives: objectivesStr.split('\n').filter(line => line.trim() !== ''),
            activities: activitiesStr.split('\n').filter(line => line.trim() !== ''),
        };

        const structureId = isEditMode ? id : currentUser.structureId;

        if (structureId) {
            const structureData: Structure = { ...finalData, id: structureId, userId: currentUser.id };
            updateStructure(structureData);
        } else if (currentUser.role === 'admin') { // Admin creating new structure
            addStructure({ ...finalData, userId: 'admin-owned' }); // Or some other logic
        }

        if (currentUser.role === 'admin') {
            navigate('/admin/dashboard');
        } else {
            navigate('/mon-compte');
        }
    };

    const getCancelPath = () => {
        return currentUser?.role === 'admin' ? '/admin/dashboard' : '/mon-compte';
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">
                {isEditMode ? 'Modifier la structure' : 'Gérer ma structure'}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom de la structure</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                     <div>
                        <label htmlFor="commune" className="block text-sm font-medium text-gray-700">Commune</label>
                        <select name="commune" id="commune" value={formData.commune} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue bg-white">
                            <option value="">-- Sélectionnez --</option>
                            {COMMUNES.sort().map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse</label>
                    <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700">Public accueilli</label>
                        <input type="text" name="ageGroup" id="ageGroup" value={formData.ageGroup} onChange={handleChange} required placeholder="Ex: Enfants de 3 à 12 ans" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                    <div>
                        <label htmlFor="openingPeriods" className="block text-sm font-medium text-gray-700">Périodes d'ouverture</label>
                        <input type="text" name="openingPeriods" id="openingPeriods" value={formData.openingPeriods} onChange={handleChange} required placeholder="Ex: Mercredis et vacances scolaires" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                     <div>
                        <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700">Horaires d’accueil</label>
                        <input type="text" name="openingHours" id="openingHours" value={formData.openingHours} onChange={handleChange} required placeholder="Ex: 7h30 - 18h30" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                    <div>
                        <label htmlFor="team" className="block text-sm font-medium text-gray-700">Équipe d'animation</label>
                        <input type="text" name="team" id="team" value={formData.team} onChange={handleChange} required placeholder="Ex: 1 directrice BAFD, 4 animateurs BAFA" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                </div>

                <div>
                    <label htmlFor="educationalObjectives" className="block text-sm font-medium text-gray-700">Objectifs éducatifs (un par ligne)</label>
                    <textarea name="educationalObjectives" id="educationalObjectives" value={objectivesStr} onChange={(e) => setObjectivesStr(e.target.value)} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                
                 <div>
                    <label htmlFor="activities" className="block text-sm font-medium text-gray-700">Activités proposées (une par ligne)</label>
                    <textarea name="activities" id="activities" value={activitiesStr} onChange={(e) => setActivitiesStr(e.target.value)} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>

                <fieldset className="border-t border-gray-200 pt-6">
                    <legend className="text-base font-medium text-gray-900">Contact & Liens</legend>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="contact.email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="contact.email" id="contact.email" value={formData.contact.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                        </div>
                         <div>
                            <label htmlFor="contact.phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input type="tel" name="contact.phone" id="contact.phone" value={formData.contact.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                        </div>
                         <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Site web</label>
                            <input type="url" name="website" id="website" value={formData.website || ''} onChange={handleChange} placeholder="https://..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                        </div>
                         <div>
                            <label htmlFor="contact.registrationLink" className="block text-sm font-medium text-gray-700">Lien d'inscription</label>
                            <input type="url" name="contact.registrationLink" id="contact.registrationLink" value={formData.contact.registrationLink || ''} onChange={handleChange} placeholder="https://..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                        </div>
                    </div>
                </fieldset>
                
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={() => navigate(getCancelPath())} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-semibold">
                        Annuler
                    </button>
                    <button type="submit" className="px-6 py-2 bg-morlaix-red text-white font-bold rounded-md shadow-sm hover:bg-red-700 transition-colors">
                        Enregistrer les modifications
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StructureEditPage;
