
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; isButton?: boolean; onButtonClick?: () => void }> = ({ to, children, onClick, isButton, onButtonClick }) => {
    if (isButton) {
        return (
            <button
                onClick={onButtonClick}
                className="block text-left w-full py-2 px-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-morlaix-blue transition-colors"
            >
                {children}
            </button>
        )
    }
    
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `block py-2 px-3 rounded md:p-0 ${
                isActive
                    ? 'text-white bg-morlaix-blue md:bg-transparent md:text-morlaix-blue md:font-bold'
                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-morlaix-blue transition-colors'
                }`
            }
        >
            {children}
        </NavLink>
    );
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, logout } = useAppContext();
    const navigate = useNavigate();

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogout = () => {
        closeMenu();
        logout();
        navigate('/');
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
                        <span className="self-center text-2xl font-montserrat font-bold whitespace-nowrap text-morlaix-blue">
                            Anim’emploi
                        </span>
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Ouvrir le menu principal</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li><NavItem to="/" onClick={closeMenu}>Accueil</NavItem></li>
                            <li><NavItem to="/offres" onClick={closeMenu}>Offres d'emploi</NavItem></li>
                            <li><NavItem to="/structures" onClick={closeMenu}>Les Structures</NavItem></li>
                            
                            {currentUser ? (
                                <>
                                    {currentUser.role === 'admin' ? (
                                        <li><NavItem to="/admin/dashboard" onClick={closeMenu}>Tableau de bord</NavItem></li>
                                    ) : (
                                        <li><NavItem to="/mon-compte" onClick={closeMenu}>Mon Compte</NavItem></li>
                                    )}
                                    <li><NavItem to="#" isButton onButtonClick={handleLogout}>Déconnexion</NavItem></li>
                                </>
                            ) : (
                                <>
                                    <li><NavItem to="/espace-animateurs" onClick={closeMenu}>Espace Animateurs</NavItem></li>
                                    <li><NavItem to="/espace-recruteurs" onClick={closeMenu}>Espace Recruteurs</NavItem></li>
                                    <li className="md:hidden"><NavItem to="/connexion" onClick={closeMenu}>Connexion</NavItem></li>
                                    <li className="md:hidden"><NavItem to="/inscription" onClick={closeMenu}>Inscription</NavItem></li>
                                    <li className="hidden md:flex items-center gap-2">
                                        <Link to="/connexion" className="text-gray-700 hover:text-morlaix-blue transition-colors px-3 py-2 rounded-md text-sm font-medium">Connexion</Link>
                                        <Link to="/inscription" className="bg-morlaix-red text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">Inscription</Link>
                                    </li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
