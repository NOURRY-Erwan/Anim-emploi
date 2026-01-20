
import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { JobOffer, CVSubmission, Structure, User } from '../types';
import { INITIAL_JOB_OFFERS } from '../constants';
import { createClient } from '@supabase/supabase-js';

/**
 * CONFIGURATION SUPABASE POUR LE PARTAGE RÉEL
 * Pour activer le partage entre vos collègues :
 * 1. Créez un projet sur https://supabase.com
 * 2. Récupérez votre URL et votre Clé Anon
 * 3. Remplacez les valeurs ci-dessous
 */
const SUPABASE_URL = ''; // Exemple: 'https://xyz.supabase.co'
const SUPABASE_KEY = ''; // Votre clé API anon

const supabase = (SUPABASE_URL && SUPABASE_KEY) 
    ? createClient(SUPABASE_URL, SUPABASE_KEY) 
    : null;

// --- Helper for localStorage (Fallback si pas de Supabase) ---
const getFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

const STORAGE_KEYS = {
    STRUCTURES: 'structures_v3',
    JOBS: 'jobOffers_v2',
    CVS: 'cvSubmissions_v3',
    USERS: 'users_v1'
};

const INITIAL_STRUCTURES_DATA: Structure[] = [
  {
    id: 'structure-plougasnou-1',
    userId: 'user-plougasnou-1',
    name: 'Mairie de Plougasnou',
    commune: 'Plougasnou',
    address: '1 Rue des Martyrs, 29630 Plougasnou',
    ageGroup: 'Enfants de 3 à 12 ans',
    openingPeriods: 'Périscolaire, Mercredis & Vacances',
    team: '1 directrice, 5 animateurs BAFA',
    educationalObjectives: ["Favoriser l'autonomie", "Développer la créativité"],
    activities: ["Aide aux devoirs", "Jeux sportifs"],
    openingHours: '7h30-9h00 / 16h30-18h30',
    contact: { email: 'rh@plougasnou.fr' },
    socialLinks: [], otherLinks: []
  }
];

const ADMIN_USER: User = {
  id: 'admin-user-01',
  email: 'admin@animemploi.fr',
  password: 'admin2024',
  structureName: 'Administration',
  structureId: 'admin-structure-01',
  role: 'admin',
};

interface AppContextType {
  jobOffers: JobOffer[];
  addJobOffer: (offer: Omit<JobOffer, 'id' | 'active' | 'userId' | 'structureId' | 'structure' | 'commune'>) => void;
  toggleJobOfferStatus: (id: string) => void;
  cvSubmissions: CVSubmission[];
  addCVSubmission: (cv: Omit<CVSubmission, 'id'> & { cvFile?: File }) => void;
  deleteCVSubmission: (id: string) => void;
  structures: Structure[];
  addStructure: (structure: Omit<Structure, 'id'>) => Structure;
  updateStructure: (structure: Structure) => void;
  deleteStructure: (id: string) => void;
  getStructureByUserId: (userId: string) => Structure | undefined;
  currentUser: User | null;
  login: (email: string, password: string) => User | null;
  logout: () => void;
  signup: (email: string, password: string, structureName: string) => User | null;
  resetData: () => void;
  isShared: boolean;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => getFromLocalStorage<User[]>(STORAGE_KEYS.USERS, [ADMIN_USER]));
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const s = sessionStorage.getItem('currentUser');
    return s ? JSON.parse(s) : null;
  });

  const [structures, setStructures] = useState<Structure[]>(() => getFromLocalStorage<Structure[]>(STORAGE_KEYS.STRUCTURES, INITIAL_STRUCTURES_DATA));
  const [jobOffers, setJobOffers] = useState<JobOffer[]>(() => getFromLocalStorage<JobOffer[]>(STORAGE_KEYS.JOBS, INITIAL_JOB_OFFERS));
  const [cvSubmissions, setCVSubmissions] = useState<CVSubmission[]>(() => getFromLocalStorage<CVSubmission[]>(STORAGE_KEYS.CVS, []));

  // --- Synchro Supabase (Si configuré) ---
  useEffect(() => {
    if (supabase) {
        // Logique de chargement depuis Supabase ici
        console.log("Supabase est prêt pour le partage !");
    }
  }, []);

  // Sauvegarde locale systématique (fallback)
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.STRUCTURES, JSON.stringify(structures)); }, [structures]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(jobOffers)); }, [jobOffers]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.CVS, JSON.stringify(cvSubmissions)); }, [cvSubmissions]);

  const login = useCallback((email: string, password: string) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    }
    return null;
  }, [users]);

  const logout = useCallback(() => {
    sessionStorage.removeItem('currentUser');
    setCurrentUser(null);
  }, []);

  const signup = useCallback((email: string, password: string, structureName: string) => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return null;
    
    const newStructId = `struct-${Date.now()}`;
    const newUser: User = { id: `user-${Date.now()}`, email, password, structureName, structureId: newStructId, role: 'structure' };
    
    const newStruct: Structure = {
      id: newStructId, userId: newUser.id, name: structureName,
      commune: '', address: '', ageGroup: '', openingPeriods: '',
      team: '', educationalObjectives: [], activities: [], openingHours: '',
      contact: { email }, socialLinks: [], otherLinks: []
    };

    setStructures(prev => [newStruct, ...prev]);
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    return newUser;
  }, [users]);

  const addJobOffer = useCallback((offer: any) => {
    if (!currentUser) return;
    const struct = structures.find(s => s.id === currentUser.structureId);
    const newOffer = { ...offer, id: `job-${Date.now()}`, active: true, userId: currentUser.id, structureId: currentUser.structureId, structure: struct?.name || '', commune: struct?.commune || '' };
    setJobOffers(prev => [newOffer, ...prev]);
  }, [currentUser, structures]);

  const toggleJobOfferStatus = useCallback((id: string) => {
    setJobOffers(prev => prev.map(o => o.id === id ? { ...o, active: !o.active } : o));
  }, []);

  const addCVSubmission = useCallback((cvData: any) => {
    const { cvFile, ...rest } = cvData;
    const newCV: CVSubmission = { ...rest, id: `cv-${Date.now()}` };
    if (cvFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            newCV.cvFileName = cvFile.name;
            newCV.cvFileDataUrl = e.target?.result as string;
            setCVSubmissions(prev => [newCV, ...prev]);
        };
        reader.readAsDataURL(cvFile);
    } else {
        setCVSubmissions(prev => [newCV, ...prev]);
    }
  }, []);

  const deleteCVSubmission = (id: string) => setCVSubmissions(prev => prev.filter(c => c.id !== id));
  const addStructure = (s: any) => { const ns = { ...s, id: `struct-${Date.now()}` }; setStructures(prev => [ns, ...prev]); return ns; };
  const updateStructure = (s: Structure) => setStructures(prev => prev.map(st => st.id === s.id ? s : st));
  const deleteStructure = (id: string) => setStructures(prev => prev.filter(s => s.id !== id));
  const getStructureByUserId = (uid: string) => structures.find(s => s.userId === uid);

  const resetData = () => {
    if (confirm("Réinitialiser les données ?")) {
        localStorage.clear();
        window.location.reload();
    }
  };

  return (
    <AppContext.Provider value={{ 
        jobOffers, addJobOffer, toggleJobOfferStatus, 
        cvSubmissions, addCVSubmission, deleteCVSubmission,
        structures, addStructure, updateStructure, deleteStructure, getStructureByUserId,
        currentUser, login, logout, signup, resetData,
        isShared: !!supabase 
    }}>
      {children}
    </AppContext.Provider>
  );
};
