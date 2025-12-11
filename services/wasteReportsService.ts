// services/wasteReportsService.ts
import { ApiResponse, CreateWasteReportData, Rating, WasteReport } from '../types';
import api from './api';

export const wasteReportsService = {
  /**
   * Get all waste reports with optional filters
   */
  async getReports(filters?: {
    status?: string;
    wasteType?: string;
    user?: string;
  }): Promise<ApiResponse<WasteReport[]>> {
    const queryParams = new URLSearchParams();
    
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.wasteType) queryParams.append('wasteType', filters.wasteType);
    if (filters?.user) queryParams.append('user', filters.user);
    
    const queryString = queryParams.toString();
    const endpoint = `/waste-reports${queryString ? `?${queryString}` : ''}`;
    
    return await api.get<WasteReport[]>(endpoint);
  },

  /**
   * Get a specific waste report by ID
   */
  async getReportById(id: string): Promise<ApiResponse<WasteReport>> {
    return await api.get<WasteReport>(`/waste-reports/${id}`);
  },

  /**
   * Create a new waste report
   */
  async createReport(reportData: CreateWasteReportData): Promise<ApiResponse<WasteReport>> {
    return await api.post<WasteReport>('/waste-reports', reportData);
  },

  /**
   * Update a waste report
   */
  async updateReport(id: string, updateData: Partial<CreateWasteReportData>): Promise<ApiResponse<WasteReport>> {
    return await api.put<WasteReport>(`/waste-reports/${id}`, updateData);
  },

  /**
   * Delete a waste report
   */
  async deleteReport(id: string): Promise<ApiResponse<void>> {
    return await api.delete<void>(`/waste-reports/${id}`);
  },

  /**
   * Assign a driver to a waste report
   */
  async assignDriver(reportId: string, driverId: string): Promise<ApiResponse<WasteReport>> {
    return await api.put<WasteReport>(`/waste-reports/${reportId}/assign`, { driverId });
  },

  /**
   * Rate a completed pickup
   */
  async ratePickup(reportId: string, ratingData: Omit<Rating, 'ratedAt'>): Promise<ApiResponse<WasteReport>> {
    return await api.post<WasteReport>(`/waste-reports/${reportId}/rate`, ratingData);
  },

  /**
   * Get waste reports for current user
   */
  async getUserReports(): Promise<ApiResponse<WasteReport[]>> {
    return await api.get<WasteReport[]>('/users/waste-reports');
  },
};