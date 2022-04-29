import { Button, IconButton, Stack, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { FaPen, FaTrash } from 'react-icons/fa';
import { deleteDepartamento } from '../../api/departamentoResponse';
import { Link as ReachLink } from 'react-router-dom';

const DepartamentoItemScreen = ({
  _id,
  nombre_departamento,
  email_corporativo,
  telefono_corporativo,
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteDepartamento);

  const remove = async () => {
    console.log(_id);
    await mutateAsync(_id);
    queryClient.invalidateQueries('departamento');
  };
  return (
    <Tr
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
        cursor: 'pointer',
      }}
    >
      <>
        <Td>{nombre_departamento}</Td>
        <Td> {email_corporativo}</Td>
        <Td> {telefono_corporativo}</Td>
        <Td>
          <Stack direction="row" spacing={2}>
            <IconButton
              as={ReachLink}
              type="button"
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaPen />}
              to={`/editar-departamento/${_id}`}
            />
            {isLoading ? (
              <Button isLoading colorScheme="teal" variant="outline"></Button>
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
      </>
    </Tr>
  );
};

export default DepartamentoItemScreen;
