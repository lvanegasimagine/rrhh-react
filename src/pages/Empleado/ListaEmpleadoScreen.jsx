import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ListaEmpleadoScreen = () => {
  return (
    <>
      <Text fontSize="6xl">Empleado</Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nombre y Apellidos</Th>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Telefono</Th>
              <Th>Cedula</Th>
              <Th>Correo Electronico</Th>
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
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListaEmpleadoScreen;
