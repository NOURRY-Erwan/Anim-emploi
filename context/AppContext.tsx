
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
  // ... (data is now linked to users, this is just a fallback)
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
  // FIX: Corrected the type signature for addCVSubmission to accept an optional cvFile property.
  // This resolves a type error in SubmitCVPage.tsx where an object with cvFile was being passed.
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
    // Don't store password in local storage in a real app
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
  const [structures, setStructures] = useState<Structure[]>(() => getFromLocalStorage<Structure[]>('structures', INITIAL_STRUCTURES_DATA));

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
  const [jobOffers, setJobOffers] = useState<JobOffer[]>(() => getFromLocalStorage<JobOffer[]>('jobOffers', INITIAL_JOB_OFFERS));

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
  const [cvSubmissions, setCVSubmissions] = useState<CVSubmission[]>(() => getFromLocalStorage<CVSubmission[]>('cvSubmissions', []));

  useEffect(() => {
    localStorage.setItem('cvSubmissions', JSON.stringify(cvSubmissions));
  }, [cvSubmissions]);

  // FIX: Updated the function signature to match the corrected type in AppContextType and removed the unnecessary type assertion.
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


  const value = { 
    jobOffers, addJobOffer, toggleJobOfferStatus, 
    cvSubmissions, addCVSubmission, deleteCVSubmission,
    structures, addStructure, updateStructure, deleteStructure, getStructureByUserId,
    currentUser, login, logout, signup
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};