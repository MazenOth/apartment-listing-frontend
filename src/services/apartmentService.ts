import axios from 'axios';
import { Apartment } from '@/types/types';
import { API_BASE_URL } from '@/config/api';

export const apartmentService = {
  async getAll(
    search?: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ apartments: Apartment[]; totalApartments: number }> {
    try {
      const params = new URLSearchParams();

      if (search) params.append('search', search);
      params.append('page', page.toString());
      params.append('limit', limit.toString());

      const response = await axios.get<{
        apartments: Apartment[];
        totalApartments: number;
      }>(`${API_BASE_URL}/apartments?${params.toString()}`);

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch apartments. Please try again later.');
    }
  },

  async getById(id: string): Promise<Apartment> {
    try {
      const response = await axios.get<Apartment>(
        `${API_BASE_URL}/apartments/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(
        'Failed to fetch apartment details. Please try again later.'
      );
    }
  },

  async create(apartment: Omit<Apartment, 'id'>): Promise<Apartment> {
    try {
      const response = await axios.post<Apartment>(
        `${API_BASE_URL}/apartments`,
        apartment
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to create apartment. Please try again later.');
    }
  },
};
