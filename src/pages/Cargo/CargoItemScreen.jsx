import React from 'react'
import { IconButton, Stack, Td, Tr } from '@chakra-ui/react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { deleteDepartamento } from '../../api/departamentoResponse';
import { Link as ReachLink } from 'react-router-dom';
const CargoItemScreen = ({_id,
  nombre_cargo,
  descripcion,
  departamento,}) => {
  return (
    <Tr
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
        cursor: 'pointer',
      }}
    >
      <>
        <Td>{nombre_cargo}</Td>
        <Td>{departamento?.nombre_departamento}</Td>
        <Td> {descripcion.slice(0, 31) + ' ...'}</Td>
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
            <IconButton
              type="button"
              colorScheme="red"
              aria-label="Search database"
              icon={<FaTrash />}
              // onClick={remove}
            />
          </Stack>
        </Td>
      </>
    </Tr>
  )
}

export default CargoItemScreen