
import React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface MythFact {
  myth: string;
  fact: string;
}

export enum BloodType {
  APos = "A+",
  ANeg = "A-",
  BPos = "B+",
  BNeg = "B-",
  ABPos = "AB+",
  ABNeg = "AB-",
  OPos = "O+",
  ONeg = "O-",
}

export interface DonationItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'Food' | 'Education' | 'Health' | 'Comfort';
}

export interface NGO {
  name: string;
  location: string;
  needs: string[];
  contact: string;
}

export interface AccessibilitySettings {
  fontSize: 'base' | 'lg' | 'xl';
  contrast: 'normal' | 'high';
  screenReader: boolean;
}

export interface AccessibilityContextType {
  accessibility: AccessibilitySettings;
  setAccessibility: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
}
