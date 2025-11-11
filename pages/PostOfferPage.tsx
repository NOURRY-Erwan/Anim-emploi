
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { Diploma, PositionType, ContractType, AgeGroup, ActivityPeriod } from '../types';

const PostOfferPage: React.FC = () => {
    const { addJobOffer, currentUser, getStructureByUserId } = useAppContext();
    const navigate = useNavigate();
    
    const [structureName, setStructureName] = useState('');

    const [formData, setFormData] = useState({
        title: '',
        positionType: PositionType.ANIMATEUR,
        diplomas: [] as Diploma[],
        contractType: ContractType.CDD,
        ageGroups: [] as AgeGroup[],
        activityPeriods: [] as ActivityPeriod[],
        startDate: '',
        endDate: '',
        contact: '',
        description: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (currentUser) {
            const userStructure = getStructureByUserId(currentUser.id);
            if (userStructure) {
                setStructureName(userStructure.name);
                setFormData(prev => ({...prev, contact: userStructure.contact.email || userStructure.contact.phone || ''}));
            }
        }
    }, [currentUser, getStructureByUserId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'diplomas' | 'ageGroups' | 'activityPeriods') => {
        const { value, checked } = e.target;
        const item = value as Diploma | AgeGroup | ActivityPeriod;
        setFormData(prev => {
            const currentArray = prev[field] as Array<Diploma | AgeGroup | ActivityPeriod>;
            const newArray = checked 
                ? [...currentArray, item] 
                : currentArray.filter(i => i !== item);
            return { ...prev, [field]: newArray };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.diplomas.length === 0) {
            alert('Veuillez sélectionner au moins un diplôme requis.');
            return;
        }
        if (formData.ageGroups.length === 0) {
            alert('Veuillez sélectionner au moins une tranche d\'âge.');
            return;
        }
        if (formData.activityPeriods.length === 0) {
            alert('Veuillez sélectionner au moins une période d\'activité.');
            return;
        }
        addJobOffer(formData);
        setSubmitted(true);
        setTimeout(() => navigate('/mon-compte'), 2000);
    };

    if (submitted) {
        return (
            <div className="text-center bg-white p-12 rounded-lg shadow-xl max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-morlaix-green">Offre publiée avec succès !</h2>
                <p className="mt-4 text-gray-600">Vous allez être redirigé vers votre espace personnel.</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold font-montserrat text-gray-800 mb-2">Publier une offre</h1>
            <p className="text-gray-600 mb-6">Offre pour : <span className="font-bold">{structureName}</span></p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre du poste</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="positionType" className="block text-sm font-medium text-gray-700">Type de poste</label>
                        <select name="positionType" id="positionType" value={formData.positionType} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue bg-white">
                            {Object.values(PositionType).map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="contractType" className="block text-sm font-medium text-gray-700">Type de contrat</label>
                        <select name="contractType" id="contractType" value={formData.contractType} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue bg-white">
                            {Object.values(ContractType).map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Début du contrat</label>
                        <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Fin du contrat</label>
                        <input type="date" name="endDate" id="endDate" value={formData.endDate} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                </div>
                 <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">Diplôme(s) requis (plusieurs choix possibles)</legend>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Object.values(Diploma).map(d => (
                            <div key={d} className="flex items-center">
                                <input id={`diploma-${d}`} value={d} onChange={(e) => handleCheckboxChange(e, 'diplomas')} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" />
                                <label htmlFor={`diploma-${d}`} className="ml-2 block text-sm text-gray-900">{d}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">Tranche(s) d'âge (plusieurs choix possibles)</legend>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {Object.values(AgeGroup).map(ag => (
                            <div key={ag} className="flex items-center">
                                <input id={`ageGroup-${ag}`} value={ag} onChange={(e) => handleCheckboxChange(e, 'ageGroups')} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" />
                                <label htmlFor={`ageGroup-${ag}`} className="ml-2 block text-sm text-gray-900">{ag}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                 <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">Période(s) d'activité (plusieurs choix possibles)</legend>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Object.values(ActivityPeriod).map(ap => (
                            <div key={ap} className="flex items-center">
                                <input id={`activityPeriod-${ap}`} value={ap} onChange={(e) => handleCheckboxChange(e, 'activityPeriods')} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" />
                                <label htmlFor={`activityPeriod-${ap}`} className="ml-2 block text-sm text-gray-900">{ap}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact (mail ou téléphone)</label>
                    <input type="text" name="contact" id="contact" value={formData.contact} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" id="description" value={formData.description} onChange={handleChange} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-morlaix-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morlaix-red transition-colors">
                        Publier l'offre
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostOfferPage;
