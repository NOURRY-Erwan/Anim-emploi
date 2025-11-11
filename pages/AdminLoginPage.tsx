
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const user = login(email, password);
        if (user) {
            if (from) {
                 navigate(from, { replace: true });
            } else if (user.role === 'admin') {
                navigate('/admin/dashboard', { replace: true });
            } else {
                 navigate('/mon-compte', { replace: true });
            }
        } else {
            setError('Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold font-montserrat text-gray-800 mb-6 text-center">
                    Connexion
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
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
                            autoComplete="current-password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-morlaix-blue focus:border-morlaix-blue"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-morlaix-red">{error}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-morlaix-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morlaix-blue transition-colors"
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Pas encore de compte ?{' '}
                    <Link to="/inscription" className="font-medium text-morlaix-blue hover:text-blue-700">
                        Inscrivez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
