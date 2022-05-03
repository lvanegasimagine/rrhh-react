import React from 'react';
import { IconButton, Stack, Td, Tr } from '@chakra-ui/react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteCargo } from '../../api/cargoResponse';

const CargoItemScreen = ({ _id, nombre_cargo, descripcion, departamento }) => {

  let resumen_descripcion = descripcion.slice(0, 31) + ' ...';
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteCargo);
  
  const remove = async () => {
    await mutateAsync(_id);
    queryClient.invalidateQueries('cargo');
  };

  return (
    <Tr
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
        cursor: 'pointer',
      }}
    >
        <Td>{nombre_cargo}</Td>
        <Td>{departamento?.nombre_departamento}</Td>
        <Td>{resumen_descripcion}</Td>
        <Td>
          <Stack direction="row" spacing={2}>
            <IconButton
              as={ReachLink}
              type="button"
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaPen />}
              to={`/editar-cargo/${_id}`}
            />
           {isLoading ? (
              <IconButton isLoading colorScheme="red" variant="outline"></IconButton>
            ) : (
              <IconButton
                type="button"
                colorScheme="red"
                aria-label="Search database"
                icon={<FaTrash />}
                onClick={remove}
              />
            )}
          </Stack>
        </Td>
    </Tr>
  );
};

export default CargoItemScreen;
