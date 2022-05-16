import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createCargo, getCargoCount, getCargos } from '../api/cargoResponse';
import {
  createDepartamento,
  getDepartamentoCount,
  getDepartamentos,
} from '../api/departamentoResponse';
import {
  createEmpleado,
  getEmpleado,
  getEmpleadoCount,
  getEmpleados,
} from '../api/empleadoResponse';

const options = {
  retry: 2,
  retryDelay: 1000,
  cacheTime: 3000,
};

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
  return useQuery(['departamento'], getDepartamentos, options);
}

export function useMutateCargo() {
  const queryClient = useQueryClient();

  return useMutation(createCargo, {
    onsuccess: data => {
      queryClient.setQueryData(['cargo'], prevCargo => prevCargo.concat(data));
      queryClient.invalidateQueries(['cargo']);
    },
  });
}

export function useQueryCargo() {
  return useQuery(['cargo'], getCargos, options);
}

export function useQueryEmpleado() {
  return useQuery(['empleado'], getEmpleados, options);
}

export function useQueryEmpleadoById(id) {
  return useQuery(['empleado', { id }], getEmpleado);
}

export function useMutateEmpleado() {
  const queryClient = useQueryClient();

  return useMutation(createEmpleado, {
    onsuccess: data => {
      queryClient.setQueryData(['empleado'], prevEmpleado =>
        prevEmpleado.concat(data)
      );
      queryClient.invalidateQueries(['empleado']);
    },
  });
}

export function useQueryCountDepartamento() {
  return useQuery(['departamentoCount'], getDepartamentoCount, options);
}

export function useQueryCountEmpleado() {
  return useQuery(['empleadoCount'], getEmpleadoCount, options);
}

export function useQueryCountCargo() {
  return useQuery(['cargoCount'], getCargoCount, options);
}
