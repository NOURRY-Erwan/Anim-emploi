
export enum PositionType {
  DIRECTEUR = 'Directeur',
  ANIMATEUR = 'Animateur',
  SURVEILLANT = 'Surveillant de baignade',
}

export enum Diploma {
  STAGIAIRE = 'Stagiaire',
  BAFA = 'BAFA (ou équivalent)',
  BAFD = 'BAFD (ou équivalent)',
  SB = 'SB',
  BPJEPS = 'BPJEPS',
}

export enum ContractType {
  CDI = 'CDI',
  CDD = 'CDD',
  CEE = 'CEE',
}

export enum AgeGroup {
  ZERO_TO_THREE = '0-3 ans',
  THREE_TO_SIX = '3-6 ans',
  SIX_TO_TWELVE = '6-12 ans',
  TWELVE_TO_EIGHTEEN = '12-18 ans',
}

export enum ActivityPeriod {
  MERCREDI = 'Mercredi',
  HIVER = "Vacances d'hiver",
  PRINTEMPS = 'Vacances de printemps',
  ETE = "Vacances d'été",
  AUTOMNE = "Vacances d'automne",
  NOEL = 'Vacances de Noël',
}


export interface JobOffer {
  id: string;
  title: string;
  structure: string; // The name of the structure
  structureId: string; // The ID of the structure
  userId: string; // The ID of the user who posted it
  positionType: PositionType;
  diplomas: Diploma[];
  contractType: ContractType;
  ageGroups: AgeGroup[];
  activityPeriods: ActivityPeriod[];
  startDate: string;
  endDate: string;
  commune: string;
  contact: string;
  description: string;
  active: boolean;
}

export interface CVSubmission {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  commune: string;
  diploma: string;
  certifications?: string[]; // SB, APFS, BNSSA
  experience: string;
  cvFileName?: string;
  cvFileDataUrl?: string;
  contact: string;
}

export type SocialNetwork = 'Facebook' | 'Instagram' | 'LinkedIn' | 'Twitter' | 'TikTok' | 'Autre';

export interface SocialLink {
  type: SocialNetwork;
  url: string;
}

export interface OtherLink {
  label: string;
  url: string;
}

export interface Structure {
  id: string;
  userId: string; // The ID of the user who owns this structure
  name: string;
  commune: string;
  address: string;
  ageGroup: string;
  openingPeriods: string;
  team: string;
  educationalObjectives: string[];
  activities: string[];
  openingHours: string;
  contact: {
    email?: string;
    phone?: string;
    registrationLink?: string;
  };
  // Replaced simple website string with arrays
  socialLinks: SocialLink[];
  otherLinks: OtherLink[];
}

export interface User {
  id: string;
  email: string;
  password?: string; // Not storing plain text in a real app!
  structureName: string;
  structureId: string;
  role: 'admin' | 'structure';
}