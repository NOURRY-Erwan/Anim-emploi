
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const TrashIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>;
const ArrowLeftIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>;
const DownloadIcon = ({ className }: { className: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>;

const AdminCVListPage: React.FC = () => {
    const { cvSubmissions, deleteCVSubmission } = useAppContext();

    const handleDelete = (id: string, name: string) => {
        if (window.confirm(`Êtes-vous sûr de vouloir supprimer la candidature de ${name} ?`)) {
            deleteCVSubmission(id);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex items-center">
                    <Link to="/admin/dashboard" className="text-morlaix-blue hover:text-blue-700 p-2 -ml-2">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </Link>
                    <h1 className="text-3xl font-bold font-montserrat text-gray-800 ml-2">CVthèque</h1>
                </div>
                <p className="text-gray-600">{cvSubmissions.length} candidature{cvSubmissions.length !== 1 ? 's' : ''} reçue{cvSubmissions.length !== 1 ? 's' : ''}</p>
            </div>
            
            <div className="overflow-x-auto border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidat</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commune</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diplôme(s)</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CV</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cvSubmissions.length > 0 ? (
                            cvSubmissions.map(cv => (
                                <tr key={cv.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-semibold text-gray-900">{cv.firstName} {cv.lastName}</div>
                                        <div className="text-sm text-gray-500">{cv.age} ans</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{cv.commune}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{cv.contact}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{cv.diploma}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cv.cvFileDataUrl && cv.cvFileName ? (
                                            <a 
                                                href={cv.cvFileDataUrl} 
                                                download={cv.cvFileName} 
                                                className="inline-flex items-center text-sm font-medium text-morlaix-blue hover:text-blue-700"
                                                title={`Télécharger ${cv.cvFileName}`}
                                            >
                                                <DownloadIcon className="h-5 w-5 mr-1" />
                                                Télécharger
                                            </a>
                                        ) : (
                                            <span className="text-sm text-gray-400">Aucun</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleDelete(cv.id, `${cv.firstName} ${cv.lastName}`)} className="text-morlaix-red hover:text-red-700" title="Supprimer">
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                    Aucun CV n'a été déposé pour le moment.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCVListPage;