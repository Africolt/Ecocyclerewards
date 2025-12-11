// services/farmersService.ts
import { ApiResponse, BioWasteRequest, CreateBioWasteRequestData } from '../types';
import api from './api';

export const farmersService = {
  /**
   * Get all bio waste requests
   */
  async getBioWasteRequests(filters?: {
    status?: string;
    wasteType?: string;
  }): Promise<ApiResponse<BioWasteRequest[]>> {
    const queryParams = new URLSearchParams();
    
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.wasteType) queryParams.append('wasteType', filters.wasteType);
    
    const queryString = queryParams.toString();
    const endpoint = `/farmers/requests${queryString ? `?${queryString}` : ''}`;
    
    return await api.get<BioWasteRequest[]>(endpoint);
  },

  /**
   * Get a specific bio waste request by ID
   */
  async getBioWasteRequestById(id: string): Promise<ApiResponse<BioWasteRequest>> {
    return await api.get<BioWasteRequest>(`/farmers/requests/${id}`);
  },

  /**
   * Create a new bio waste request
   */
  async createBioWasteRequest(requestData: CreateBioWasteRequestData): Promise<ApiResponse<BioWasteRequest>> {
    return await api.post<BioWasteRequest>('/farmers/requests', requestData);
  },

  /**
   * Update a bio waste request
   */
  async updateBioWasteRequest(
    id: string, 
    updateData: Partial<CreateBioWasteRequestData>
  ): Promise<ApiResponse<BioWasteRequest>> {
    return await api.put<BioWasteRequest>(`/farmers/requests/${id}`, updateData);
  },

  /**
   * Assign a collector to a bio waste request
   */
  async assignCollector(requestId: string, collectorId: string): Promise<ApiResponse<BioWasteRequest>> {
    return await api.put<BioWasteRequest>(`/farmers/requests/${requestId}/assign`, { collectorId });
  },

  /**
   * Complete bio waste collection
   */
  async completeCollection(
    requestId: string, 
    completionData: { 
      actualCollectionDate?: string; 
      collectedQuantity?: { amount: number; unit: string };
      collectorNotes?: string;
    }
  ): Promise<ApiResponse<BioWasteRequest>> {
    return await api.put<BioWasteRequest>(`/farmers/requests/${requestId}/complete`, completionData);
  },

  /**
   * Get farmer statistics
   */
  async getFarmerStats(): Promise<ApiResponse<any>> {
    return await api.get('/farmers/stats');
  },

  /**
   * Get bio waste requests for current farmer
   */
  async getMyBioWasteRequests(): Promise<ApiResponse<BioWasteRequest[]>> {
    return await api.get<BioWasteRequest[]>('/farmers/my-requests');
  },
};