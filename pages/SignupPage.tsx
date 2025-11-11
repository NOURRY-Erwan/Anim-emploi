
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [structureName, setStructureName] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères.');
            return;
        }
        const user = signup(email, password, structureName);
        if (user) {
            navigate('/mon-compte');
        } else {
            setError('Un problème est survenu. Cet email est peut-être déjà utilisé.');
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold font-montserrat text-gray-800 mb-6 text-center">
                    Créer un compte Structure
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="structureName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nom de votre structure
                        </label>
                        <input
                            type="text"
                            name="structureName"
                            id="structureName"
                            value={structureName}
                            onChange={(e) => setStructureName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email de contact
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-morlaix-red">{error}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-morlaix-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morlaix-red transition-colors"
                        >
                            S'inscrire
                        </button>
                    </div>
                </form>
                 <p className="mt-6 text-center text-sm text-gray-600">
                    Déjà un compte ?{' '}
                    <Link to="/connexion" className="font-medium text-morlaix-blue hover:text-blue-700">
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
