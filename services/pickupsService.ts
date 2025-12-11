// services/pickupsService.ts
import { ApiResponse, CreatePickupData, Pickup } from '../types';
import api from './api';

export const pickupsService = {
  /**
   * Get all pickup requests
   */
  async getPickups(filters?: {
    status?: string;
    driver?: string;
  }): Promise<ApiResponse<Pickup[]>> {
    const queryParams = new URLSearchParams();
    
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.driver) queryParams.append('driver', filters.driver);
    
    const queryString = queryParams.toString();
    const endpoint = `/pickups${queryString ? `?${queryString}` : ''}`;
    
    return await api.get<Pickup[]>(endpoint);
  },

  /**
   * Get a specific pickup by ID
   */
  async getPickupById(id: string): Promise<ApiResponse<Pickup>> {
    return await api.get<Pickup>(`/pickups/${id}`);
  },

  /**
   * Create a new pickup request
   */
  async createPickup(pickupData: CreatePickupData): Promise<ApiResponse<Pickup>> {
    return await api.post<Pickup>('/pickups', pickupData);
  },

  /**
   * Update pickup status
   */
  async updateStatus(pickupId: string, status: Pickup['status']): Promise<ApiResponse<Pickup>> {
    return await api.put<Pickup>(`/pickups/${pickupId}/status`, { status });
  },

  /**
   * Update pickup tracking information
   */
  async updateTracking(
    pickupId: string, 
    trackingData: { currentLocation?: any; estimatedArrival?: string }
  ): Promise<ApiResponse<Pickup>> {
    return await api.put<Pickup>(`/pickups/${pickupId}/tracking`, trackingData);
  },

  /**
   * Complete a pickup
   */
  async completePickup(
    pickupId: string, 
    completionData: { actualPickupTime?: string; driverNotes?: string }
  ): Promise<ApiResponse<Pickup>> {
    return await api.put<Pickup>(`/pickups/${pickupId}/complete`, completionData);
  },

  /**
   * Get pickups assigned to current driver
   */
  async getDriverPickups(): Promise<ApiResponse<Pickup[]>> {
    return await api.get<Pickup[]>('/pickups/driver/assigned');
  },

  /**
   * Get available pickups for drivers
   */
  async getAvailablePickups(): Promise<ApiResponse<Pickup[]>> {
    return await api.get<Pickup[]>('/pickups/driver/available');
  },
};