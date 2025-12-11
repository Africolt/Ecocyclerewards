// types/api.ts
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'driver' | 'admin' | 'farmer';
  phone: string;
  isActive: boolean;
  isVerified: boolean;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  profileImage?: string | null;
  preferences?: {
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    language: string;
  };
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WasteReport {
  _id: string;
  user: string | User;
  title: string;
  description: string;
  wasteType: 'organic' | 'recyclable' | 'hazardous' | 'electronic' | 'medical' | 'construction' | 'other';
  quantity: 'small' | 'medium' | 'large' | 'bulk';
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    landmark?: string;
  };
  assignedDriver?: string | User;
  scheduledPickup?: {
    date: string;
    timeWindow: 'morning' | 'afternoon' | 'evening';
    notes?: string;
  };
  pickupDetails?: {
    actualPickupTime?: string;
    driverNotes?: string;
    weight?: number;
    volume?: number;
    completionImages?: string[];
  };
  rating?: {
    score: number;
    feedback?: string;
    ratedAt: string;
  };
  tags?: string[];
  estimatedCost?: number;
  actualCost?: number;
  createdAt: string;
  updatedAt: string;
}

export interface BioWasteRequest {
  _id: string;
  farmer: string | User;
  title: string;
  description: string;
  wasteType: 'food-waste' | 'agricultural-waste' | 'compost' | 'organic-fertilizer' | 'biogas-material' | 'other';
  quantity: {
    amount: number;
    unit: 'kg' | 'tons' | 'liters' | 'cubic-meters' | 'bags';
  };
  quality: 'premium' | 'good' | 'fair' | 'poor';
  status: 'pending' | 'approved' | 'rejected' | 'in-progress' | 'completed' | 'cancelled';
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    farmName?: string;
    accessInstructions?: string;
  };
  preferredCollectionDate: string;
  timeSlot: 'morning' | 'afternoon' | 'evening';
  assignedCollector?: string | User;
  processingInstructions?: string;
  collectionDetails?: {
    scheduledDate?: string;
    actualCollectionDate?: string;
    collectedQuantity?: {
      amount: number;
      unit: string;
    };
    collectorNotes?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Pickup {
  _id: string;
  wasteReport: string | WasteReport;
  driver?: string | User;
  scheduledDate: string;
  status: 'pending' | 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'normal' | 'high';
  route?: {
    startLocation: {
      coordinates: { lat: number; lng: number };
      address: string;
    };
    endLocation: {
      coordinates: { lat: number; lng: number };
      address: string;
    };
  };
  tracking?: {
    currentLocation?: {
      coordinates: { lat: number; lng: number };
      address: string;
    };
    estimatedArrival?: string;
  };
  createdAt: string;
  updatedAt: string;
}