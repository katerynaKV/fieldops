import { useQuery } from '@tanstack/react-query';
import { apiClient } from './client';

export const useAssets = () => {
  return useQuery({
    queryKey: ['assets'],
    queryFn: () => apiClient.getAssets(),
  });
};
