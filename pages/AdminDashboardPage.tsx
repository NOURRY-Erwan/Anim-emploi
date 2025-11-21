
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const PlusIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
const PencilIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>;
const TrashIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>;
const ArrowPathIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>;

const AdminDashboardPage: React.FC = () => {
    const { structures, deleteStructure, logout, cvSubmissions, resetData } = useAppContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleDelete = (id: string, name: string) => {
        if (window.confirm(`Êtes-vous sûr de vouloir supprimer la structure "${name}" ?`)) {
            deleteStructure(id);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-montserrat text-gray-800">Tableau de bord</h1>
                    <p className="mt-1 text-gray-600">Gérez les structures et les candidatures du territoire.</p>
                </div>
                <button onClick={handleLogout} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 font-semibold self-start sm:self-center">
                    Déconnexion
                </button>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-morlaix-blue p-6 rounded-r-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold text-gray-800">CVthèque - Candidatures Reçues</h2>
                <p className="mt-2 text-gray-600">
                    Vous avez reçu <span className="font-bold text-morlaix-blue">{cvSubmissions.length}</span> candidature{cvSubmissions.length !== 1 ? 's' : ''}.
                </p>
                <Link to="/admin/cvs" className="mt-4 inline-block bg-morlaix-blue text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors font-bold text-sm">
                    Consulter les CV
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Gestion des Structures</h2>
                 <Link to="/admin/structures/new" className="inline-flex items-center gap-2 bg-morlaix-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-semibold text-sm">
                    <PlusIcon className="h-5 w-5" />
                    Ajouter une structure
                </Link>
            </div>

            <div className="overflow-x-auto border rounded-lg mb-12">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commune</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {structures.length > 0 ? (
                            structures.map((structure) => (
                                <tr key={structure.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-semibold text-gray-900">{structure.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{structure.commune}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end items-center gap-4">
                                            <Link to={`/admin/structures/edit/${structure.id}`} className="text-morlaix-blue hover:text-blue-700" title="Modifier">
                                                <PencilIcon className="h-5 w-5" />
                                            </Link>
                                            <button onClick={() => handleDelete(structure.id, structure.name)} className="text-morlaix-red hover:text-red-700" title="Supprimer">
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                             <tr>
                                <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                                    Aucune structure n'a été ajoutée pour le moment.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Maintenance Section */}
            <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Zone de maintenance</h3>
                <div className="bg-red-50 border border-red-100 rounded-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-red-800">
                        <p className="font-semibold">Réinitialiser les données</p>
                        <p>Utilisez ce bouton si vous avez mis à jour le code du site mais que les nouvelles structures n'apparaissent pas. Cela effacera toutes les modifications locales et rechargera les données par défaut du site.</p>
                    </div>
                    <button 
                        onClick={resetData} 
                        className="flex-shrink-0 flex items-center gap-2 bg-white border border-red-300 text-red-700 px-4 py-2 rounded hover:bg-red-100 transition-colors font-semibold text-sm"
                    >
                        <ArrowPathIcon className="h-5 w-5" />
                        Réinitialiser les données par défaut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
