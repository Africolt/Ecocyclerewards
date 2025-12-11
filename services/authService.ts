import {
  ApiResponse, AuthResponse, CurrentUserResponse, LoginData, RegisterData, User
} from '../types';
// services/authService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './api';

// Enhanced interface for auth responses
export interface AuthResponse {
  user: User;
  token: string;
}

export interface CurrentUserResponse {
  user: User;
}

// Type-safe storage keys
const STORAGE_KEYS = {
  USER_TOKEN: 'userToken',
  USER_DATA: 'userData',
} as const;

export const authService = {
  /**
   * Login user with email and password
   */
  async login(loginData: LoginData): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await api.post<AuthResponse>('/auth/login', loginData);
      
      if (response.success && response.data) {
        await this.storeAuthData(response.data);
      }
      
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  /**
   * Register new user
   */
  async register(userData: RegisterData): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await api.post<AuthResponse>('/auth/register', userData);
      
      if (response.success && response.data) {
        await this.storeAuthData(response.data);
      }
      
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  /**
   * Logout user and clear storage
   */
  async logout(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([STORAGE_KEYS.USER_TOKEN, STORAGE_KEYS.USER_DATA]);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  },

  /**
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<ApiResponse<CurrentUserResponse>> {
    try {
      return await api.get<CurrentUserResponse>('/auth/me');
    } catch (error) {
      console.error('Get current user failed:', error);
      throw error;
    }
  },

  /**
   * Check if user is authenticated (has valid token)
   */
  async isAuthenticated(): Promise<boolean> {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.USER_TOKEN);
      return !!token;
    } catch (error) {
      console.error('Auth check failed:', error);
      return false;
    }
  },

  /**
   * Get stored user data
   */
  async getStoredUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Get stored user failed:', error);
      return null;
    }
  },

  /**
   * Get stored token
   */
  async getStoredToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.USER_TOKEN);
    } catch (error) {
      console.error('Get stored token failed:', error);
      return null;
    }
  },

  /**
   * Store auth data after successful login/register
   */
  private async storeAuthData(authData: AuthResponse): Promise<void> {
    try {
      await AsyncStorage.multiSet([
        [STORAGE_KEYS.USER_TOKEN, authData.token],
        [STORAGE_KEYS.USER_DATA, JSON.stringify(authData.user)],
      ]);
      console.log('Auth data stored successfully');
    } catch (error) {
      console.error('Store auth data failed:', error);
      throw error;
    }
  },

  /**
   * Initialize auth state on app start
   */
  async initializeAuth(): Promise<{ user: User; token: string } | null> {
    try {
      const [token, userData] = await Promise.all([
        this.getStoredToken(),
        this.getStoredUser(),
      ]);

      if (token && userData) {
        // Verify token is still valid by making a test request
        try {
          await this.getCurrentUser();
          return { user: userData, token };
        } catch (error) {
          // Token is invalid, clear storage
          await this.logout();
          return null;
        }
      }
      
      return null;
    } catch (error) {
      console.error('Auth initialization failed:', error);
      return null;
    }
  },
};