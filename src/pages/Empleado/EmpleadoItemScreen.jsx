import React from 'react';
import { IconButton, Stack, Td, Tr } from '@chakra-ui/react';
import { FaPen, FaTrash, FaEye } from 'react-icons/fa';
import { useMutation, useQueryClient } from 'react-query';
import { deleteEmpleado } from '../../api/empleadoResponse';
import { Link as ReachLink } from 'react-router-dom';
const EmpleadoItemScreen = ({
  _id,
  nombre,
  apellido,
  cargo,
  departamento,
  telefono,
  cedula,
  correo_electronico,
}) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(deleteEmpleado);

  const remove = async _ => {
    await mutateAsync(_id);
    queryClient.invalidateQueries('empleado');
  };

  return (
    <Tr
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
        cursor: 'pointer',
      }}
    >
      <Td> {`${nombre} ${apellido}`}</Td>
      <Td>{cargo?.nombre_cargo}</Td>
      <Td>{departamento?.nombre_departamento}</Td>
      <Td>{telefono}</Td>
      <Td>{correo_electronico}</Td>
      <Td>
        <Stack direction="row" spacing={2}>
          <IconButton
            as={ReachLink}
            type="button"
            colorScheme="green"
            aria-label="Search database"
            icon={<FaEye />}
            to={`/detalle-empleado/${_id}`}
          />
          <IconButton
            as={ReachLink}
            type="button"
            colorScheme="blue"
            aria-label="Search database"
            icon={<FaPen />}
            to={`/editar-empleado/${_id}`}
          />

          {isLoading ? (
            <IconButton
              isLoading
              colorScheme="red"
              variant="outline"
            ></IconButton>
          ) : (
            <IconButton
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

export default EmpleadoItemScreen;
