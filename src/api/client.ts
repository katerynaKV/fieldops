import axios from 'axios';
import type { Asset } from './types';

export const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const apiClient = {
  getAssets: () => axiosInstance.get('/assets'),
  getAsset: (id: string) => axiosInstance.get(`/assets/${id}`),
  createAsset: (asset: Asset) => axiosInstance.post('/assets', asset),
  deleteAsset: (id: string) => axiosInstance.delete(`/assets/${id}`),
};
