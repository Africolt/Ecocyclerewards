// services/adminService.ts
import { ApiResponse, BioWasteRequest, Pickup, User, WasteReport } from '../types';
import api from './api';

export interface DashboardStats {
  totalUsers: number;
  totalWasteReports: number;
  totalPickups: number;
  totalBioRequests: number;
  recentActivity: any[];
}

export const adminService = {
  /**
   * Get admin dashboard statistics
   */
  async getDashboard(): Promise<ApiResponse<DashboardStats>> {
    return await api.get<DashboardStats>('/admin/dashboard');
  },

  /**
   * Get all reports for admin
   */
  async getReports(): Promise<ApiResponse<WasteReport[]>> {
    return await api.get<WasteReport[]>('/admin/reports');
  },

  /**
   * Get all pickups for admin
   */
  async getPickups(): Promise<ApiResponse<Pickup[]>> {
    return await api.get<Pickup[]>('/admin/pickups');
  },

  /**
   * Get all users for admin management
   */
  async getUsers(): Promise<ApiResponse<User[]>> {
    return await api.get<User[]>('/admin/users');
  },

  /**
   * Get analytics data
   */
  async getAnalytics(): Promise<ApiResponse<any>> {
    return await api.get('/admin/analytics');
  },

  /**
   * Update user status (activate/deactivate)
   */
  async updateUserStatus(userId: string, isActive: boolean): Promise<ApiResponse<User>> {
    return await api.put<User>(`/admin/users/${userId}/status`, { status: isActive });
  },

  /**
   * Get all bio waste requests for admin
   */
  async getBioWasteRequests(): Promise<ApiResponse<BioWasteRequest[]>> {
    return await api.get<BioWasteRequest[]>('/admin/bio-waste');
  },
};