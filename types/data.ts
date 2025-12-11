// types/data.ts

// User types
export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'driver' | 'admin' | 'farmer';
   address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  isActive: boolean;
  profileImage?: string;
  createdAt: string;
  updatedAt: string;
}

// Waste Report types  
export interface WasteReport {
  _id: string;
  user: User;
  title: string;
  description: string;
  wasteType: 'organic' | 'recyclable' | 'hazardous' | 'electronic' | 'medical' | 'construction' | 'other';
  quantity: 'small' | 'medium' | 'large' | 'bulk';
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  location: {
    address: string;
    coordinates: {
    lat: number;
    lng: number;
  };
  landmark?: string;
};
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  assignedDriver?: User;
  images: {
    url:string;
    filename: string;
    uploadedAt: string;
  }[];
  scheduledPickup?: {
    date: string;
    timeSlot: 'morning' | 'afternoon' | 'evening';
    notes?: string;
  };
  rating?: {
    score: number;
    feedback?: string;
    ratedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  // TODO: Add more properties based on our backend model Add location, images, assignedDriver, etc.
}

// API Response type
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}