import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createDepartamento, getDepartamentos } from '../api/departamentoResponse';

export function useMutateDepartamento() {
  const queryClient = useQueryClient();

  return useMutation(createDepartamento, {
    onsuccess: data => {
      queryClient.setQueryData(['departamento'], prevDepar =>
        prevDepar.concat(data)
      );
      queryClient.invalidateQueries(['departamento']);
    },
  });
}

export function useQueryDepartamento() {
  return useQuery(['departamento'], getDepartamentos, {
    retry: 2,
    retryDelay: 1000,
    cacheTime: 3000,
  });
}
