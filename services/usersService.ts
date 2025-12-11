// services/usersService.ts
import { Address, ApiResponse, User } from '../types';
import api from './api';

export const usersService = {
  /**
   * Get user profile
   */
  async getProfile(): Promise<ApiResponse<{ user: User }>> {
    return await api.get<{ user: User }>('/users/profile');
  },

  /**
   * Update user profile
   */
  async updateProfile(updateData: {
    name?: string;
    phone?: string;
    address?: Partial<Address>;
  }): Promise<ApiResponse<User>> {
    return await api.put<User>('/users/profile', updateData);
  },

  /**
   * Update user preferences
   */
  async updatePreferences(preferences: {
    notifications?: { email?: boolean; push?: boolean; sms?: boolean };
    language?: string;
  }): Promise<ApiResponse<User>> {
    return await api.put<User>('/users/preferences', preferences);
  },

  /**
   * Find nearby drivers
   */
  async findNearbyDrivers(coordinates: { lat: number; lng: number }): Promise<ApiResponse<User[]>> {
    return await api.post<User[]>('/users/drivers/nearby', { coordinates });
  },

  /**
   * Get user statistics
   */
  async getUserStats(): Promise<ApiResponse<any>> {
    return await api.get('/users/stats');
  },
};