import { useMutation, useQueryClient } from "react-query";
import { createDepartamento } from "../api/departamentoResponse";

export function useMutateDepartamento(){
    const queryClient = useQueryClient();

  return useMutation(createDepartamento, {
    onsuccess: (data) => {
      queryClient.setQueryData(['departamento'], prevDepar => prevDepar.concat(data))
      queryClient.invalidateQueries(['departamento']);
    },
  });
}