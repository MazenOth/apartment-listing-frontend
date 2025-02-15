import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { Project } from '@/types/types';

export const projectService = {
  async getAll(): Promise<Project[]> {
    try {
      const response = await axios.get<Project[]>(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects. Please try again later.');
    }
  },
  async create(project: Omit<Project, 'id'>): Promise<Project> {
    try {
      const response = await axios.post<Project>(
        `${API_BASE_URL}/projects`,
        project,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Error creating project:',
          error.response?.data || error.message
        );
      } else {
        console.error('Unexpected error:', error);
      }
      throw new Error('Failed to create project. Please try again later.');
    }
  },
};
