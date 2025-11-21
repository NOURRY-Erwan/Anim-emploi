
import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { JobOffer, CVSubmission, Structure, User } from '../types';
import { INITIAL_JOB_OFFERS } from '../constants';

// --- Helper for localStorage ---
const getFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Failed to parse ${key} from localStorage`, error);
    return defaultValue;
  }
};

// --- Initial Data for Structures (used if localStorage is empty) ---
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
    educationalObjectives: ["Favoriser l'autonomie", "Développer la créativité", "Apprendre le vivre-ensemble"],
    activities: ["Aide aux devoirs", "Jeux sportifs", "Ateliers manuels", "Sorties nature"],
    openingHours: '7h30-9h00 / 16h30-18h30',
    contact: {
      email: 'rh@plougasnou.fr',
      phone: '02 98 72 37 73',
      registrationLink: '#',
    },
    website: 'https://www.mairie-plougasnou.fr'
  },
  {
    id: 'structure-carantec-2',
    userId: 'user-carantec-2',
    name: 'Centre de loisirs de Carantec',
    commune: 'Carantec',
    address: '25 Rue de la Grève Blanche, 29660 Carantec',
    ageGroup: 'Jeunes de 6 à 18 ans',
    openingPeriods: 'Vacances scolaires',
    team: '1 directeur BAFD, 8 animateurs BAFA',
    educationalObjectives: ["Découverte du milieu marin", "Sensibilisation à l'environnement", "Esprit d'équipe et coopération"],
    activities: ["Voile", "Kayak", "Pêche à pied", "Grands jeux sur la plage", "Veillées"],
    openingHours: '9h00 - 17h00',
    contact: {
      email: 'contact@alsh-carantec.bzh',
      phone: '02 98 67 00 50',
      registrationLink: '#',
    },
    website: '#'
  },
  {
    id: 'structure-morlaix-3',
    userId: 'user-morlaix-3',
    name: 'Service Jeunesse Morlaix',
    commune: 'Morlaix',
    address: 'Place des Otages, 29600 Morlaix',
    ageGroup: 'Ados de 10 à 17 ans',
    openingPeriods: 'Toute l\'année',
    team: '2 coordinateurs, 4 animateurs BPJEPS',
    educationalObjectives: ["Accompagnement de projets jeunes", "Prévention et citoyenneté", "Accès à la culture et aux sports"],
    activities: ["Stages multisports", "Ateliers numériques", "Sorties culturelles (concerts, expos)", "Organisation d'événements"],
    openingHours: 'Variable selon les activités',
    contact: {
      email: 'jeunesse@villedemorlaix.org',
      phone: '02 98 15 20 60'
    },
    website: 'https://www.ville.morlaix.fr'
  }
];

// --- Initial CV Data ---
const INITIAL_CV_SUBMISSIONS: CVSubmission[] = [
    {
      id: 'cv-1',
      firstName: 'Léa',
      lastName: 'Martin',
      age: '20',
      commune: 'Morlaix',
      diploma: 'BAFA complet',
      experience: '2 saisons en centre de loisirs (6-10 ans). Spécialité : grands jeux en extérieur et activités manuelles.',
      contact: 'lea.martin@email.com'
    },
    {
      id: 'cv-2',
      firstName: 'Tom',
      lastName: 'Dubois',
      age: '24',
      commune: 'Carantec',
      diploma: 'BPJEPS APT (Activités Physiques pour Tous)',
      experience: 'Animateur sportif depuis 3 ans en service jeunesse. Encadrement de stages multisports (foot, basket, escalade). Permis B.',
      contact: '06 12 34 56 78'
    }
];

// --- Initial Admin User ---
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

  // Auth
  currentUser: User | null;
  login: (email: string, password: string) => User | null;
  logout: () => void;
  signup: (email: string, password: string, structureName: string) => User | null;

  // Maintenance
  resetData: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // --- Auth State ---
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = getFromLocalStorage<User[]>('users', []);
    if (!storedUsers.some(u => u.role === 'admin')) {
      return [ADMIN_USER, ...storedUsers];
    }
    return storedUsers;
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
     try {
      const storedUser = sessionStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = useCallback((email: string, password: string): User | null => {
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

  // --- Structure Management State ---
  const [structures, setStructures] = useState<Structure[]>(() => {
    const stored = getFromLocalStorage<Structure[]>('structures', INITIAL_STRUCTURES_DATA);
    // FIX: Si le stockage local retourne un tableau vide (ce qui arrive si l'utilisateur a visité le site "vide"),
    // on force le chargement des données de démo pour que le site ne paraisse pas vide.
    if (Array.isArray(stored) && stored.length === 0) {
        return INITIAL_STRUCTURES_DATA;
    }
    return stored;
  });

  useEffect(() => {
    localStorage.setItem('structures', JSON.stringify(structures));
  }, [structures]);

  const addStructure = useCallback((structureData: Omit<Structure, 'id'>): Structure => {
    const newStructure: Structure = {
      ...structureData,
      id: new Date().toISOString(),
    };
    setStructures(prev => [newStructure, ...prev]);
    return newStructure;
  }, []);

  const signup = useCallback((email: string, password: string, structureName: string): User | null => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        alert("Cet email est déjà utilisé.");
        return null;
    }
    
    // Create new Structure first
    const newStructure = addStructure({
      userId: '', // will be updated
      name: structureName,
      commune: '', address: '', ageGroup: '', openingPeriods: '',
      team: '', educationalObjectives: [], activities: [], openingHours: '',
      contact: {},
    });
    
    // Create new User
    const newUser: User = {
        id: `user-${new Date().getTime()}`,
        email,
        password,
        structureName,
        structureId: newStructure.id,
        role: 'structure',
    };

    // Update the structure with the correct userId
    const updatedStructure = { ...newStructure, userId: newUser.id };
    updateStructure(updatedStructure);
    
    setUsers(prev => [...prev, newUser]);
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    setCurrentUser(newUser);
    return newUser;
  }, [users, addStructure]);


  const updateStructure = useCallback((updatedStructure: Structure) => {
    setStructures(prev => prev.map(s => s.id === updatedStructure.id ? updatedStructure : s));
  }, []);
  
  const deleteStructure = useCallback((id: string) => {
    setStructures(prev => prev.filter(s => s.id !== id));
  }, []);

  const getStructureByUserId = useCallback((userId: string) => {
    return structures.find(s => s.userId === userId);
  }, [structures]);


  // --- Job Offer Management ---
  const [jobOffers, setJobOffers] = useState<JobOffer[]>(() => {
    const stored = getFromLocalStorage<JobOffer[]>('jobOffers', INITIAL_JOB_OFFERS);
    // FIX: Même logique pour les offres d'emploi
    if (Array.isArray(stored) && stored.length === 0) {
        return INITIAL_JOB_OFFERS;
    }
    return stored;
  });

  useEffect(() => {
    localStorage.setItem('jobOffers', JSON.stringify(jobOffers));
  }, [jobOffers]);

  const addJobOffer = useCallback((offer: Omit<JobOffer, 'id' | 'active' | 'userId' | 'structureId'| 'structure' | 'commune'>) => {
    if (!currentUser) return;
    const userStructure = structures.find(s => s.id === currentUser.structureId);
    if (!userStructure) return;

    const newOffer: JobOffer = {
      ...offer,
      id: new Date().toISOString(),
      active: true,
      userId: currentUser.id,
      structureId: currentUser.structureId,
      structure: userStructure.name,
      commune: userStructure.commune,
    };
    setJobOffers(prevOffers => [newOffer, ...prevOffers]);
  }, [currentUser, structures]);

  const toggleJobOfferStatus = useCallback((id: string) => {
    setJobOffers(prevOffers =>
      prevOffers.map(offer =>
        offer.id === id ? { ...offer, active: !offer.active } : offer
      )
    );
  }, []);

  // --- CV Management ---
  const [cvSubmissions, setCVSubmissions] = useState<CVSubmission[]>(() => getFromLocalStorage<CVSubmission[]>('cvSubmissions', INITIAL_CV_SUBMISSIONS));

  useEffect(() => {
    localStorage.setItem('cvSubmissions', JSON.stringify(cvSubmissions));
  }, [cvSubmissions]);

  const addCVSubmission = useCallback((cvData: Omit<CVSubmission, 'id'> & { cvFile?: File }) => {
    const { cvFile, ...restOfData } = cvData;
    const newCV: CVSubmission = {
      ...restOfData,
      id: new Date().toISOString(),
    };

    if (cvFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            newCV.cvFileName = cvFile.name;
            newCV.cvFileDataUrl = event.target?.result as string;
            setCVSubmissions(prev => [newCV, ...prev]);
        };
        reader.readAsDataURL(cvFile);
    } else {
        setCVSubmissions(prev => [newCV, ...prev]);
    }
  }, []);

  const deleteCVSubmission = useCallback((id: string) => {
    setCVSubmissions(prev => prev.filter(cv => cv.id !== id));
  }, []);


  // --- Reset Data ---
  const resetData = useCallback(() => {
    if(window.confirm("Attention : Cela va effacer toutes les données enregistrées localement (structures créées, offres, CVs) et recharger les données par défaut du code. Continuer ?")) {
        localStorage.removeItem('structures');
        localStorage.removeItem('jobOffers');
        localStorage.removeItem('cvSubmissions');
        localStorage.removeItem('users');
        window.location.reload();
    }
  }, []);


  const value = { 
    jobOffers, addJobOffer, toggleJobOfferStatus, 
    cvSubmissions, addCVSubmission, deleteCVSubmission,
    structures, addStructure, updateStructure, deleteStructure, getStructureByUserId,
    currentUser, login, logout, signup,
    resetData
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
