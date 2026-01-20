
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; isButton?: boolean; onButtonClick?: () => void }> = ({ to, children, onClick, isButton, onButtonClick }) => {
    if (isButton) {
        return (
            <button
                onClick={onButtonClick}
                className="block text-left w-full py-2 px-3 rounded md:p-0 text-slate-600 hover:text-animem-blue font-semibold transition-colors"
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
                `block py-2 px-3 rounded md:p-0 transition-all ${
                isActive
                    ? 'text-animem-blue font-bold border-b-2 border-animem-blue md:border-b-0'
                    : 'text-slate-600 hover:text-animem-blue font-semibold'
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
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                        <div className="w-10 h-10 bg-gradient-to-tr from-animem-blue to-animem-dark rounded-xl flex items-center justify-center shadow-lg shadow-animem-blue/20">
                            <span className="text-white font-black text-xl">A</span>
                        </div>
                        <span className="self-center text-2xl font-montserrat font-black tracking-tighter text-slate-800">
                            Anim’<span className="text-animem-blue">emploi</span>
                        </span>
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
                    </button>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto mt-4 md:mt-0`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 border border-slate-100 rounded-2xl bg-slate-50 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent">
                            <li><NavItem to="/" onClick={closeMenu}>Accueil</NavItem></li>
                            <li><NavItem to="/offres" onClick={closeMenu}>Offres</NavItem></li>
                            <li><NavItem to="/structures" onClick={closeMenu}>Structures</NavItem></li>
                            
                            {currentUser ? (
                                <>
                                    {currentUser.role === 'admin' ? (
                                        <li><NavItem to="/admin/dashboard" onClick={closeMenu}>Admin</NavItem></li>
                                    ) : (
                                        <li><NavItem to="/mon-compte" onClick={closeMenu}>Compte</NavItem></li>
                                    )}
                                    <li><NavItem to="#" isButton onButtonClick={handleLogout}>Déconnexion</NavItem></li>
                                </>
                            ) : (
                                <>
                                    <li><NavItem to="/espace-animateurs" onClick={closeMenu}>Animateurs</NavItem></li>
                                    <li><NavItem to="/espace-recruteurs" onClick={closeMenu}>Recruteurs</NavItem></li>
                                    <li className="mt-4 md:mt-0 flex flex-col md:flex-row gap-2">
                                        <Link to="/connexion" onClick={closeMenu} className="text-slate-700 hover:text-animem-blue transition-colors px-4 py-2 rounded-xl text-sm font-bold text-center">Connexion</Link>
                                        <Link to="/inscription" onClick={closeMenu} className="bg-animem-red text-white px-5 py-2 rounded-xl text-sm font-black hover:bg-rose-600 transition-all shadow-md shadow-rose-200 text-center">Inscription</Link>
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
