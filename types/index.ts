// types/index.ts

// Base API Response structure (matches our backend)
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

// User related types
export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'driver' | 'admin' | 'farmer';
  isActive: boolean;
  isVerified: boolean;
  profileImage?: string;
  address?: Address;
  preferences?: UserPreferences;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  language: string;
}

// Auth related types
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: 'user' | 'driver' | 'farmer';
  address?: Partial<Address>;
}

// Waste Report types (matches our WasteReport model)
export interface WasteReport {
  _id: string;
  user: string | User; // Can be ID or populated user
  title: string;
  description: string;
  wasteType: 'organic' | 'recyclable' | 'hazardous' | 'electronic' | 'medical' | 'construction' | 'other';
  quantity: 'small' | 'medium' | 'large' | 'bulk';
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  location: ReportLocation;
  assignedDriver?: string | User;
  scheduledPickup?: ScheduledPickup;
  pickupDetails?: PickupDetails;
  rating?: Rating;
  tags?: string[];
  estimatedCost?: number;
  actualCost?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReportLocation {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  landmark?: string;
}

export interface ScheduledPickup {
  date: string;
  timeWindow: 'morning' | 'afternoon' | 'evening';
  notes?: string;
}

export interface PickupDetails {
  actualPickupTime?: string;
  driverNotes?: string;
  completionImages?: string[];
  weight?: number;
  volume?: number;
}

export interface Rating {
  score: number;
  feedback?: string;
  ratedAt: string;
}

// Bio Waste Request types (matches our BioWasteRequest model)
export interface BioWasteRequest {
  _id: string;
  farmer: string | User;
  title: string;
  description: string;
  wasteType: 'food-waste' | 'agricultural-waste' | 'compost' | 'organic-fertilizer' | 'biogas-material' | 'other';
  quantity: Quantity;
  quality: 'premium' | 'good' | 'fair' | 'poor';
  status: 'pending' | 'approved' | 'rejected' | 'in-progress' | 'completed' | 'cancelled';
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  location: BioWasteLocation;
  preferredCollectionDate: string;
  timeSlot: 'morning' | 'afternoon' | 'evening';
  assignedCollector?: string | User;
  processingInstructions?: string;
  collectionDetails?: CollectionDetails;
  createdAt: string;
  updatedAt: string;
}

export interface Quantity {
  amount: number;
  unit: 'kg' | 'tons' | 'liters' | 'cubic-meters' | 'bags';
}

export interface BioWasteLocation {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  farmName?: string;
  accessInstructions?: string;
}

export interface CollectionDetails {
  scheduledDate?: string;
  actualCollectionDate?: string;
  collectedQuantity?: Quantity;
  collectorNotes?: string;
  qualityAssessment?: {
    score: number;
    notes?: string;
  };
}

// Pickup types (matches our Pickup model)
export interface Pickup {
  _id: string;
  wasteReport: string | WasteReport;
  driver?: string | User;
  scheduledDate: string;
  status: 'pending' | 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'normal' | 'high';
  route?: Route;
  tracking?: Tracking;
  createdAt: string;
  updatedAt: string;
}

export interface Route {
  startLocation: LocationPoint;
  endLocation: LocationPoint;
}

export interface LocationPoint {
  coordinates: { lat: number; lng: number };
  address: string;
}

export interface Tracking {
  currentLocation?: LocationPoint;
  estimatedArrival?: string;
}

// Form data types for creating/updating records
export interface CreateWasteReportData {
  title: string;
  description: string;
  wasteType: WasteReport['wasteType'];
  quantity: WasteReport['quantity'];
  urgencyLevel: WasteReport['urgencyLevel'];
  location: ReportLocation;
  tags?: string[];
}

export interface CreateBioWasteRequestData {
  title: string;
  description: string;
  wasteType: BioWasteRequest['wasteType'];
  quantity: Quantity;
  quality?: BioWasteRequest['quality'];
  urgency?: BioWasteRequest['urgency'];
  location: BioWasteLocation;
  preferredCollectionDate: string;
  timeSlot: BioWasteRequest['timeSlot'];
  processingInstructions?: string;
}

// Keep your existing image declarations
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.webp" {
  const value: any;
  export default value;
}