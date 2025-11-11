
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const SubmitCVPage: React.FC = () => {
    const { addCVSubmission } = useAppContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        diploma: '',
        experience: '',
        contact: ''
    });
    const [cvFile, setCvFile] = useState<File | undefined>(undefined);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addCVSubmission({ ...formData, cvFile });
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
                 <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Âge</label>
                    <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                 <div>
                    <label htmlFor="diploma" className="block text-sm font-medium text-gray-700">Diplôme(s)</label>
                    <input type="text" name="diploma" id="diploma" value={formData.diploma} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" placeholder="BAFA, BAFD, BPJEPS..." />
                </div>
                 <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact (mail ou téléphone)</label>
                    <input type="text" name="contact" id="contact" value={formData.contact} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" />
                </div>
                 <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Expérience / Spécialités</label>
                    <textarea name="experience" id="experience" value={formData.experience} onChange={handleChange} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue" placeholder="Ex: 3 étés en centre de loisirs, spécialité grands jeux..." />
                </div>
                 <div>
                    <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700">Fichier CV (PDF, Word)</label>
                    <input type="file" name="cvFile" id="cvFile" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-morlaix-blue file:text-white hover:file:bg-blue-700" accept=".pdf,.doc,.docx" />
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
