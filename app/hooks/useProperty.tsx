import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useProperty = (propertyId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(propertyId ? `/api/properties/${propertyId}` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useProperty;  