import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import { useQueryEmpleado } from '../../hooks/useMutate';

const ListaEmpleadoScreen = () => {

  const { data, isError, isLoading } = useQueryEmpleado();
  console.log(data);
  
  return (
    <>
      <Text fontSize="6xl">Empleado</Text>
      <Stack direction="row" spacing={4} pt="15" pb="15">
        <ReachLink to="/nuevo-empleado">
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            Agregar Empleado
          </Button>
        </ReachLink>
      </Stack>
      <TableContainer p={'2.5'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nombre y Apellidos</Th>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Telefono</Th>
              <Th>Cedula</Th>
              <Th>Correo Electronico</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
                cursor: 'pointer',
              }}
            >
              <Td>1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<FaPen />}
                  />
                  <IconButton
                    colorScheme="red"
                    aria-label="Search database"
                    icon={<FaTrash />}
                  />
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListaEmpleadoScreen;
