import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createCargo, getCargos } from '../api/cargoResponse';
import { createDepartamento, getDepartamentos } from '../api/departamentoResponse';
import { getEmpleados } from '../api/empleadoResponse';

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

export function useMutateCargo() {
  const queryClient = useQueryClient();

  return useMutation(createCargo, {
    onsuccess: data => {
      queryClient.setQueryData(['cargo'], prevCargo =>
        prevCargo.concat(data)
      );
      queryClient.invalidateQueries(['cargo']);
    },
  });
}

export function useQueryCargo() {
  return useQuery(['cargo'], getCargos, {
    retry: 2,
    retryDelay: 1000,
    cacheTime: 3000,
  });
}

export function useQueryEmpleado() {
  return useQuery(['empleado'], getEmpleados, {
    retry: 2,
    retryDelay: 1000,
    cacheTime: 3000,
  })
}
