
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { COMMUNES } from '../constants';

const SubmitCVPage: React.FC = () => {
    const { addCVSubmission } = useAppContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        commune: '',
        diploma: '',
        experience: '',
        contact: ''
    });
    const [certifications, setCertifications] = useState<string[]>([]);
    const [cvFile, setCvFile] = useState<File | undefined>(undefined);
    const [gdprConsent, setGdprConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setCertifications(prev => 
            checked ? [...prev, value] : prev.filter(c => c !== value)
        );
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            // Limitation technique LocalStorage (demo) : max 300Ko
            if (file.size > 300 * 1024) {
                alert("Pour cette version de démonstration, le fichier ne doit pas dépasser 300 Ko.");
                e.target.value = ""; // Reset input
                setCvFile(undefined);
                return;
            }
            setCvFile(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!gdprConsent) {
            alert("Veuillez valider la politique de confidentialité (RGPD) pour continuer.");
            return;
        }
        addCVSubmission({ ...formData, certifications, cvFile });
        setSubmitted(true);
        setTimeout(() => navigate('/offres'), 3000);
    };

    if (submitted) {
        return (
            <div className="text-center bg-white p-12 rounded-lg shadow-xl max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-morlaix-green">CV déposé avec succès !</h2>
                <p className="mt-4 text-gray-600">Votre candidature a été enregistrée et sera visible par les recruteurs. Bonne chance !</p>
            </div>
        );
    }
    
    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold font-montserrat text-gray-800 mb-2">Déposer un CV</h1>
            <p className="text-gray-600 mb-6">Mettez en avant votre profil auprès des structures du territoire.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Âge</label>
                        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                    </div>
                     <div>
                        <label htmlFor="commune" className="block text-sm font-medium text-gray-700">Commune de résidence</label>
                        <select name="commune" id="commune" value={formData.commune} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue bg-white">
                            <option value="" disabled>-- Sélectionnez --</option>
                            {COMMUNES.sort().map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
                 <div>
                    <label htmlFor="diploma" className="block text-sm font-medium text-gray-700">Diplôme(s)</label>
                    <input type="text" name="diploma" id="diploma" value={formData.diploma} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" placeholder="BAFA, BAFD, BPJEPS..." />
                </div>
                
                <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">Qualifications complémentaires</legend>
                    <div className="mt-2 flex flex-wrap gap-4">
                        <div className="flex items-center">
                            <input id="cert-SB" value="SB" onChange={handleCertificationChange} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" />
                            <label htmlFor="cert-SB" className="ml-2 block text-sm text-gray-900">SB</label>
                        </div>
                        <div className="flex items-center">
                            <input id="cert-APFS" value="APFS" onChange={handleCertificationChange} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" />
                            <label htmlFor="cert-APFS" className="ml-2 block text-sm text-gray-900">APFS / PSC1</label>
                        </div>
                        <div className="flex items-center">
                            <input id="cert-BNSSA" value="BNSSA" onChange={handleCertificationChange} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue" />
                            <label htmlFor="cert-BNSSA" className="ml-2 block text-sm text-gray-900">BNSSA</label>
                        </div>
                    </div>
                </fieldset>

                 <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact (mail ou téléphone)</label>
                    <input type="text" name="contact" id="contact" value={formData.contact} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                 <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Expérience / Spécialités</label>
                    <textarea name="experience" id="experience" value={formData.experience} onChange={handleChange} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" placeholder="Ex: 3 étés en centre de loisirs, spécialité grands jeux..." />
                </div>
                 <div>
                    <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700">Fichier CV (PDF, Word) - Max 300Ko</label>
                    <input type="file" name="cvFile" id="cvFile" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-morlaix-blue file:text-white hover:file:bg-blue-700" accept=".pdf,.doc,.docx" />
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="gdpr"
                            name="gdpr"
                            type="checkbox"
                            checked={gdprConsent}
                            onChange={(e) => setGdprConsent(e.target.checked)}
                            required
                            className="h-4 w-4 rounded border-gray-300 text-morlaix-blue focus:ring-morlaix-blue"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="gdpr" className="font-medium text-gray-700">J'ai lu le RGPD et je le valide</label>
                        <p className="text-gray-500">En cochant cette case, j'accepte que mes données soient transmises aux services et structures cherchant à recruter.</p>
                    </div>
                </div>

                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-morlaix-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morlaix-green transition-colors">
                        Déposer mon CV
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubmitCVPage;
